<script lang="ts">
	import { Check, Star, Crown } from "svelte-lucide";
    import CercleProgressBar from "./CercleProgressBar.svelte";
	import Button from "$lib/components/ui/button/button.svelte";


    export let id: number;
	export let index: number;
	export let totalCount: number;
	export let locked: boolean;
	export let current: boolean;
	export let percentage: number;

	const cycleLength: number = 8;
	const cycleIndex = index % cycleLength;

	let indentationLevel;

	if (cycleIndex <= 2) {
		indentationLevel = cycleIndex;
	} else if (cycleIndex <= 4) {
		indentationLevel = 4 - cycleIndex;
	} else if (cycleIndex <= 6) {
		indentationLevel = 4 - cycleIndex;
	} else {
		indentationLevel = cycleIndex - 8;
	}

	const rightPosition = indentationLevel * 40;

	const isFirst = index === 0;
	const isLast = index === totalCount;
	const isCompleted = !current && !locked;

	const Icon = isCompleted ? Check : isLast ? Crown : Star;

	const href = isCompleted ? `/lesson/${id}` : '/lesson';
</script>

<a {href}
aria-disabled={locked}
style:pointer-events={locked ? "none" : "auto"}
class="m-4"
>
	<div
	class="relative"
	style:right={rightPosition + "px"}
	style:marginTop={isFirst && !isCompleted ? "60px" : "24px"}
	>
	    {#if current}
	        <div class="h-[102px] w-[102px] relative">
	            <div class="absolute -top-6 left-5 px-3 py-2.5 border-2 font-bold uppercase text-green-500 bg-white rounded-xl animate-bounce tracking-wide z-10">
	                Start
	            	<div
	                class="absolute left-1/2 -bottom-2 w-0 h-0 border-x-8 border-x-transparent border-t-8 transform -translate-x-1/2"
	                />
	            </div>
				<CercleProgressBar
				progress={Number.isNaN(percentage) ? 0 : percentage}>
					<Button
					slot="Button"
					size="rounded"
					variant={locked ? "locked" : "secondary"}
					class="h-[70px] w-[70px] border-b-8">
						<Icon
						class="w-10 h-10
						{locked ? "fill-neutral-400 text-neutral-400 strock-neutral-400"
						: "fill-primary-foreground text-primary-foreground"} {isCompleted ? "fill-none stroke-[4]" : "" }"/>
					</Button>
				</CercleProgressBar>
	        </div>
		{:else}
			<Button
			slot="Button"
			size="rounded"
			variant={locked ? "locked" : "secondary"}
			class="h-[70px] w-[70px] border-b-8">
				<Icon
				class="w-10 h-10
				{locked ? "fill-neutral-400 text-neutral-400 strock-neutral-400"
				: "fill-primary-foreground text-primary-foreground"} {isCompleted ? "fill-none stroke-[4]" : "" }"/>
			</Button>
		{/if}
	</div>

</a>
