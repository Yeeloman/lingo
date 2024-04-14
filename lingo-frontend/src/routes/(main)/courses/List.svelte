<script lang="ts">
    import Card from "./Card.svelte";
    import { courses, userProgress } from "$db/schema";
	import { goto } from "$app/navigation";
	import { upsertUserProgress } from "$lib/actions/user-progress";

    export let userPro: typeof userProgress.$inferSelect;
    export let Courses: typeof courses.$inferSelect[];
    export let activeCourseId: typeof userProgress.$inferSelect["activeCourseId"];
    export let userId: string;

    let pending: boolean = false;

    const onClick = async (id: number) => {
        pending = true;
        if (id === activeCourseId) {
            goto('/learn');
        }
        const url = await upsertUserProgress([userPro], userId, id);
        goto(url);
    }
    pending = false;
</script>

<div class="pt-6 grid grid-cols-2 gap-4 lg:grid-cols-[repeat(auto-fit,_minmax(210px,1fr))]">
    {#each Courses as course}
        <Card
        id={course.id}
        title={course.title}
        onClick={onClick}
        active={course.id === activeCourseId}
        disabled={pending}/>
    {/each}
</div>
