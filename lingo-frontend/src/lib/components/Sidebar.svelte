<script lang='ts'>
	import ClerkLoading from 'clerk-sveltekit/client/ClerkLoading.svelte';
    import SideBarItem from "$lib/components/SideBarItem.svelte"
	import ClerkLoaded from "clerk-sveltekit/client/ClerkLoaded.svelte";
	import { Loader } from 'svelte-lucide';
	import UserButton from 'clerk-sveltekit/client/UserButton.svelte';

    export let additionalClasses: string = "";

    const sidebar_item: Record<string, [string, string]> = {
        learn: ["learn", "/learn"],
        leaderboard: ["leaderboard", "/leaderboard"],
        quest: ["quest", "/quest"],
        shop: ["shop", "/shop"],
    }
</script>
<div class="flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col {additionalClasses}">
    <a href="/learn">
        <div class="pt-8 pl-4 pb-7 flex items-center gap-x-3">
            <enhanced:img src="$lib/assets/mascot.svg" alt="Mascot icon" class="w-[40px] h-[40px]" />
            <h1 class="text-2xl font-extrabold text-green-600 tracking-wide">
                Lingo
            </h1>
        </div>
    </a>
    <div class="flex flex-col flex-1 gap-y-2">
        {#each Object.entries(sidebar_item) as [key, value]}
        <SideBarItem
            label={value[0]}
            href={value[1]}/>
        {/each}
    </div>
    <div class="p-4">
        <ClerkLoading>
            <Loader class="h-5 w-5 text-muted-foreground animate-spin"/>
        </ClerkLoading>
        <ClerkLoaded>
            <UserButton afterSignOutUrl="/"/>
        </ClerkLoaded>
    </div>
</div>
