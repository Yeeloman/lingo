import type { LayoutServerLoad } from './$types';


export const load = (async ( event ) => {
    event.locals.userId = event.cookies.get('__client_uat')

    return {
        userId: event.locals.userId,
    };
}) satisfies LayoutServerLoad;
