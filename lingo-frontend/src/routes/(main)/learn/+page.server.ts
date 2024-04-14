import type { PageServerLoad } from './$types';
import {
    getCourseProgress,
    getUnits,
    getUserProgress,
    getLessonPercentage
} from '$db/queries';
import { redirect } from '@sveltejs/kit';

export const load = (async (event) => {
    const userId = event.cookies.get("__client_uat");
    if (!userId) throw redirect(301, "/courses");
    const [
        usrProg,
        units,
        courseProgress,
        lessonPercentage
    ] = await Promise.all([
        getUserProgress(userId as string).getUserProgressInner(),
        getUnits(userId as string),
        getCourseProgress(userId),
        getLessonPercentage(userId as string)
    ])
    // const usrProg = await usrProgStore.getUserProgressInner();
    if (!usrProg || !usrProg.activeCourse) {
        throw redirect(301, "/courses");
    }
    if (!courseProgress) redirect(301, "/courses");
    return {
        usrProg: usrProg,
        units: units,
        courseProgress: courseProgress,
        lessonPercentage: lessonPercentage


    };
}) satisfies PageServerLoad;
