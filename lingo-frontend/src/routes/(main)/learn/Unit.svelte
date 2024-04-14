<script lang="ts">
	import UnitBanner from './UnitBanner.svelte';
	import { lessons, units } from '$db/schema';
	import LessonButton from './LessonButton.svelte';

    export let id: number;
    export let order: number;
    export let title: string;
    export let description: string;
    export let Lessons: (typeof lessons.$inferSelect & {
        completed: boolean;
    })[];
    export let activeLesson: typeof lessons.$inferSelect & {
        unit: typeof units.$inferSelect;
    } | undefined;
    export let activeLessonPercentage: number;

    let isCurrent: boolean;
    let isLocked: boolean;
</script>

<div>
	<UnitBanner {title} {description} />
	<div class="flex items-center flex-col relative">
        {#each Lessons as lesson, index}
            <!-- {isCurrent = lesson.id === activeLesson?.id}
            {isLocked = !lesson.completed && !isCurrent} -->
            <LessonButton
            id={lesson.id}
            index={index}
            totalCount={Lessons.length - 1}
            current={isCurrent = lesson.id === activeLesson?.id}
            locked={isLocked = !lesson.completed && !isCurrent}
            percentage={activeLessonPercentage}
            />
        {/each}
    </div>
</div>
