<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    import { page } from '$app/stores';

    import learn from "$lib/assets/learn.svg"
	import leaderboard from '$lib/assets/leaderboard.svg';
    import quest from '$lib/assets/quests.svg'
    import shop from '$lib/assets/shop.svg'

    export let label: string;
    export let href: string;

    const iconSrc: Record<string, string> = {
        "learn": learn,
        "leaderboard": leaderboard,
        "quest": quest,
        "shop": shop
    };
    const pathname = $page.url.pathname;
    const isActive = pathname === href;
</script>
<Button
class='justify-start h-[52px]'
variant={isActive ? "sidebarOutline" : "sidebar"}>
    <a href={href} class="flex items-center">
        {#each Object.entries(iconSrc) as [key, value]}
            {#if key == label}
                <img src={value} alt={label} class="w-[32px] h-[32px] mr-5" />
                {label}
            {/if}
        {/each}
    </a>
</Button>
