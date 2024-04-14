<script lang='ts'>
    import italian from '$lib/assets/it.svg';
    import french from "$lib/assets/fr.svg";
    import japanese from "$lib/assets/jp.svg";
    import spanish from "$lib/assets/es.svg";
    import croatian from "$lib/assets/hr.svg";
	import { Check } from 'svelte-lucide';

    const langIcons = {
        "Italian": italian,
        "French": french,
        "Japanese": japanese,
        "Spanish": spanish,
        "Croatian": croatian
    };

    export let id: number;
    export let title: string;
    export let disabled: boolean;
    export let active: boolean;
    export let onClick: (id: number) => void;
</script>
<div on:click={() => onClick(id)}
    on:keydown={event => (event.key === 'Enter' || event.key === ' ') && onClick(id)}
    role="button"
    tabindex="0"
    class="h-full border-2 rounded-xl border-b-4 hover:bg-black/5 cursor-pointer active:border-b-2 flex flex-col items-center justify-between p-3 min-h-[217px] min-w-[200px]{disabled ? "pointer-events-none opacity-50": ""}">
    <div class="min-[24px] w-full flex items-center justify-end">
        {#if active}
            <div class="rounded-md bg-green-600 flex items-center justify-center p-1.5">
                <Check class="text-white stroke-[4] h-4 w-4"/>
            </div>
        {/if}
    </div>
    {#each Object.entries(langIcons) as [lang, icon]}
        {#if lang === title}
            <img
            src={icon}
            alt={lang}
            class="rounded-lg border object-cover"
            width="93.33" height="70"/>
        {/if}
    {/each}
    <p class="text-neutral-700 text-center font-bold mt-3">{title}</p>
</div>
