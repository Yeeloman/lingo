<script lang="ts">
    import StickyWrapper from "$lib/components/StickyWrapper.svelte"
    import FeedWrapper from "$lib/components/FeedWrapper.svelte";
    import UserProgress from "$lib/components/UserProgress.svelte";
    import Header from "./Header.svelte";
    import Unit from "./Unit.svelte";
	// import { redirect } from "@sveltejs/kit";
    //import { lessons, units as unitSchema } from "$db/schema";

    export let data;

    const { courseProgress, lessonPercentage} = data;

</script>

<svelte:head>
    <title>Learn</title>
</svelte:head>

<div class="flex flex-row-reverse gap-[48px] px-6">
    <StickyWrapper>
        <UserProgress
        activeCourse={data.usrProg?.activeCourse}
        hearts={data.usrProg?.hearts}
        points={data.usrProg?.points}
        hasActiveSubscription={false}/>
    </StickyWrapper>
    <FeedWrapper>
        {#if data.usrProg?.activeCourse}
            <Header title={data.usrProg.activeCourse.title} />
            {#each Object.values(data.units) as unit}
                <div class="mb-10">
                    <Unit
                    id={unit.id}
                    order={unit.order}
                    description={unit.description}
                    title={unit.title}
                    Lessons={unit.lessons}
                    activeLesson={courseProgress.activeLesson}
                    activeLessonPercentage={lessonPercentage}/>
                </div>
            {/each}
        {/if}
    </FeedWrapper>
</div>
