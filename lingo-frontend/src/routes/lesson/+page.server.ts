import { getLesson, getUserProgress } from '$db/queries';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async (event) => {
    const userId = event.cookies.get('__client_uat');
    const [
        lesson,
        userProgress
    ] = await Promise.all([
        getLesson(userId as string),
        getUserProgress(userId as string).getUserProgressInner()
    ]);
    if (!lesson || !userProgress) throw redirect(301, "/learn");

    const initialPercentage = lesson.challenges
        .filter(challenge => challenge.completed)
        .length / lesson.challenges.length * 100;


    return {
        lesson,
        userProgress,
        initialPercentage
    };
}) satisfies PageServerLoad;
