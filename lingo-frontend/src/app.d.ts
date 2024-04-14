// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			userId?: string
			usrProg?: {
    			userId?: string;
    			userName?: string;
    			activeCourseId?: number | null;
    			hearts?: number;
    			points?: number;
    			activeCourse?: {
    			    id: number;
    			    title: string;
    			} | null;
			};
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
