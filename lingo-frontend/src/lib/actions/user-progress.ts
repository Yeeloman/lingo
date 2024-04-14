import db from "$db/drizzle";
import { getCourseById, getUserProgress } from "$db/queries";
import { userProgress } from "$db/schema"
// import { goto } from "$app/navigation";

const LEARN_URL = "/learn";
export const upsertUserProgress = async (
    usrPro: typeof userProgress.$inferSelect[],
    userId: string,
    courseId: number): Promise<string> => {

    if (!usrPro || !userId) {
        throw new Error("Unauthorized");
    }
    const [ courses , existingusrpro ] = await Promise.all([
        getCourseById(courseId),
        getUserProgress(userId),
    ])

    if (!courses) {
        throw new Error("Course not found");
    }
    //existingusrpro.getUserProgressInner();
    const usrProg = await existingusrpro.getUserProgressInner();
    //console.log('usrProg', usrProg);
    if (usrProg) {
        await db.update(userProgress).set({
            activeCourseId: courseId,
            userName: usrProg?.userName,
        })
        return LEARN_URL;
    }
    //insert to db new user with new course
    await db.insert(userProgress).values({
        userId: userId,
        activeCourseId: courseId,
        userName: 'User',
    });
    return LEARN_URL;
    //goto(LEARN_URL);
}
