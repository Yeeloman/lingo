<script lang="ts">
	import  Button  from '$lib/components/ui/button/button.svelte';
	import { ArrowLeft } from 'svelte-lucide';
    export let title: String;
</script>
<div class="sticky top-0 bg-white pb-3 lg:pt-[28px] lg:mt-[-28px] flex items-center justify-between border-b-2 mb-5 text-neutral-400 lg:z-50">
    <a href="/courses">
        <Button variant="ghost" size="sm">
            <ArrowLeft class="h-5 w-5 stroke-2 text-neutral-400"/>
        </Button>
    </a>
    <h1 class="font-bold text-lg">
        {title}
    </h1>
    <div/>
</div>
