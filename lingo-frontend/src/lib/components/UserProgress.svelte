<script lang="ts">

    import italian from '$lib/assets/it.svg';
    import french from "$lib/assets/fr.svg";
    import japanese from "$lib/assets/jp.svg";
    import spanish from "$lib/assets/es.svg";
    import croatian from "$lib/assets/hr.svg";

	import Button from '$lib/components/ui/button/button.svelte';
	import { InfinityIcon } from 'lucide-svelte';

    export let activeCourse: any;
    export let hearts: number;
    export let points: number;
    export let hasActiveSubscription: boolean;

    const langIcons = {
        "Italian": italian,
        "French": french,
        "Japanese": japanese,
        "Spanish": spanish,
        "Croatian": croatian
    };
</script>
<div class="flex items-center justofy-between gap-x-2 w-full">
    <a href="/courses">
        <Button variant="ghost">
            {#each Object.entries(langIcons) as [key, value]}
                {#if activeCourse.title == key}
                    <img src={value} alt={activeCourse.lang}
                    class="h-[32px] w-[32px] rounded-md border"/>
                {/if}
            {/each}
        </Button>
    </a>
    <a href="/shop">
        <Button variant="ghost" class="text-orange-500">
            <enhanced:img src="$lib/assets/points.svg"
            alt="Points"
            class="h-[28px] w-[28px] mr-2"/>
            {points}
        </Button>
        <Button variant="ghost" class="text-rose-500">
            <enhanced:img src="$lib/assets/heart.svg"
            alt="Hearts"
            class="h-[28px] w-[28px] mr-2"/>
            {#if hasActiveSubscription}
                <InfinityIcon class="w-4 h-4 stroke-[3]"/>
            {:else}
                {hearts}
            {/if}
        </Button>
    </a>
</div>
