<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { NotebookText } from "lucide-svelte";

	export let title: string;
	export let description: string;
</script>

<div class="w-full rounded-xl bg-green-500 p-5 text-white flex items-center justify-between">
	<div class="space-y-2.5">
		<h3 class="text-2xl font-bold">
			{title}
		</h3>
		<p class="text-lg">
			{description}
		</p>
	</div>
	<a href="/lesson">
		<Button
			size="lg"
			variant="secondary"
			class="hidden xl:flex border-2 border-b-4 active:border-b-2"
		>
			<NotebookText class="mr-2" />
			Continue
		</Button>
	</a>
</div>
