import type { PageServerLoad } from './$types';
import { useCourses, getUserProgress } from '$db/queries';
// all the commented code here should be for caching using redis
// import { redis } from "$lib/server/redis";

export const load = (async (event) => {
    const userId = event.cookies.get("__client_uat");
    const coursesStore =  useCourses();
    const usrProgStore = getUserProgress(userId as string);
    // const cachedCourses = await redis.get('courses');
    // if (cachedCourses) {
    //     return {
    //         courses: JSON.parse(cachedCourses)
    //     };
    // }
    const [courses, usrProg] = await Promise.all([
        coursesStore.getCourses(),
        usrProgStore.getUserProgressInner()
    ]);
    // await redis.set('courses', JSON.stringify(courses), 'EX', 120);
    return {
        courses,
        usrProg

    };
}) satisfies PageServerLoad;
