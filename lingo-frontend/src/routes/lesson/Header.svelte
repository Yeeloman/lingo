<script lang="ts">
	import Progress from '$lib/components/ui/progress/progress.svelte';
	import { isOpen } from '$lib/store/UseExitModel';
	import { InfinityIcon, X } from 'lucide-svelte';

	export let hearts: number;
	export let percentage: number;
	export let hasActiveSub: boolean;
</script>

<header
	class="lg:pt-[50px] pt-[20px] px-10 flex gap-x-7 items-center justify-between max-w-[1140px] mx-auto w-full"
>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		on:click={() => isOpen.set(!$isOpen)}
		class="text-slate-500 hover:opacity-75 transition cursor-pointer"
	>
		<X />
    </div>
        <Progress value={percentage}/>
        <div class="text-rose-500 flex items-center font-bold">
            <enhanced:img
                src="$lib/assets/heart.svg"
                class="h-[28px] w-[28px] mr-2"
                alt='heart'

            />
            {#if hasActiveSub}
                <InfinityIcon
                    class="h-6 w-6 stroke-[3]"/>
            {:else}
                {hearts}
            {/if}

        </div>

</header>
