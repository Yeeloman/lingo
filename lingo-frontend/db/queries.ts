import db from "$db/drizzle";
import {
    courses,
    units,
    lessons,
    // challenges,
    // challengeOptions,
    challengeProgress,
    userProgress
} from "$db/schema";
import { eq } from "drizzle-orm";
import { writable } from "svelte/store";


export function useCourses() {
    const courses = writable({});
    async function getCourses() {
        const data = await db.query.courses.findMany();
        return data;
    }
    return {
        ...courses,
        getCourses
    };
}

// interface UserProgress {
//     userId: string;
//     userName: string;
//     activeCourseId: number | null;
//     hearts: number;
//     points: number;
//     activeCourse: {
//         id: number;
//         title: string;
//     };
// }
export function getUserProgress(userId: string) {

    const userProg = writable({});
    async function getUserProgressInner() {
        const data = await db.query.userProgress.findFirst({
            where: eq(userProgress.userId, userId),
            with: {
                activeCourse: true,
            }
        });
        // userProg.set(data as UserProgress);
        return data;
    }
    //getUserProgressInner();
    return {
        ...userProg,
        getUserProgressInner
    };
}



interface CourseId {
    id: number;
    title: string;
}
export function getCourseById(id: number) {

    const courseId = writable({});

    async function getCourseId() {
        const data = await db.query.courses.findFirst({
            where: eq(courses.id, id),
        });
        courseId.set(data as CourseId);
        return data;
    }
    getCourseId();
    return {
        ...courseId,
        getCourseId
    }
}


export async function getUnits(id: string) {

    //const unitsStore = writable({});
    const usrProgress = await getUserProgress(id).getUserProgressInner();

    if (!id || !usrProgress?.activeCourseId) {
        return [];
    }

    const data = await db.query.units.findMany({
        where: eq(units.courseId, usrProgress.activeCourseId),
        with: {
            lessons: {
                with: {
                    challenges: {
                        with: {
                            challengeProgress: {
                                where: eq(challengeProgress.userId, id),
                            }
                        }
                    }
                }
            }
        }
    });

    const normalizedData = data.map((unit) => {
        const lessonsWithComplitedStatus = unit.lessons.map((lesson) => {
            if(lesson.challenges.length === 0 ) {
                return {
                    ...lesson,
                    completed: false
                }
            }
            const allChallenges = lesson.challenges.every((challenge) => {
                return challenge.challengeProgress
                    && challenge.challengeProgress.length > 0
                    && challenge.challengeProgress.every((progress) => progress.completed);
            });
            return {
                ...lesson,
                completed: allChallenges,
            }
        });
        return {
            ...unit,
            lessons: lessonsWithComplitedStatus
        }
    });
    return normalizedData;
}

// course progress
export async function getCourseProgress(id: string) {
    const userProgress = await getUserProgress(id).getUserProgressInner();

    if (!id || !userProgress?.activeCourseId) {
        return null;
    }

    const unitsInActiveCourse = await db.query.units.findMany({
        orderBy: (units, {asc}) => [asc(units.order)],
        where: userProgress?.activeCourseId ? eq(units.courseId, userProgress.activeCourseId) : undefined,
        // where: eq(units.courseId, userProgress.activeCourseId),
        with: {
            lessons: {
                orderBy: (lessons, { asc }) => [asc(lessons.order)],
                with: {
                    unit: true,
                    challenges: {
                        with: {
                            challengeProgress: {
                                where: eq(challengeProgress.userId, id),
                            }
                        }
                    }
                }
            }
        }
    });

    const firstUncompletedLesson = unitsInActiveCourse
    .flatMap((unit) => unit.lessons)
    .find(lesson =>  {
        return lesson.challenges.some(challenge => {
            return !challenge.challengeProgress
            || challenge.challengeProgress.length === 0
            || challenge.challengeProgress.some((progress) => progress.completed === false);
        });
    });

    return {
        activeLesson: firstUncompletedLesson,
        activeLessonId: firstUncompletedLesson?.id
    }
}

export async function getLesson(userId: string, id?: number) {
    const courseProgress = await getCourseProgress(userId);
    const lessonId = id || courseProgress?.activeLessonId;

    if (!lessonId) return null;

    const data = await db.query.lessons.findFirst({
        where: eq(lessons.id, lessonId),
        with: {
            challenges: {
                orderBy: (challenges, { asc }) => [asc(challenges.order)],
                with: {
                    challengeOptions: true,
                    challengeProgress: {
                        where: eq(challengeProgress.userId, userId)
                    }
                }
            }
        }
    })

    if (!data || !data.challenges) return null;

    const normalizedChallenges = data.challenges.map((challenge) => {
        const completed = challenge.challengeProgress
        && challenge.challengeProgress.length > 0
        && challenge.challengeProgress.every((progress) => progress.completed);

        return {
            ...challenge,
            completed
        }
    });
    return {
        ...data,
        challenges: normalizedChallenges
    }
}

export async function getLessonPercentage(id: string) {
    const courseProgress = await getCourseProgress(id);

    if (!courseProgress?.activeLessonId) return 0;

    const lesson = await getLesson(id);

    if (!lesson) return 0;

    const completedChallenges = lesson.challenges
        .filter(challenge => challenge.completed);
    const percentage = Math.round((completedChallenges.length / lesson.challenges.length) * 100);

    return percentage;
}
