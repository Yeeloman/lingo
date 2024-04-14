<script lang="ts">
	import Header from "./Header.svelte";
	import type { challengeOptions, challenges } from "$db/schema";
	import { writable } from 'svelte/store';


    export let initialLessonId: number;
    export let initialLessonChallenges: (typeof challenges.$inferSelect & {
    completed: boolean;
    challengeOptions: typeof challengeOptions.$inferSelect[];
    })[];
    export let initialHearts: number;
    export let initialPercentage: number;
    export let userSubscription: any;

    const [hearts, percentage] = [writable(initialHearts), writable(initialPercentage)];
</script>

<div>
    <Header
        hearts={$hearts}
        percentage={$percentage}
        hasActiveSub={!!userSubscription?.usActive}
    />
</div>
