<script>
    import Sidebar from "$lib/components/Sidebar.svelte";
    import MobileHeader from "$lib/components/MobileHeader.svelte";
</script>
<MobileHeader/>
<Sidebar additionalClasses="hidden lg:flex" />
<main class="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
    <div class="max-w-[1056px] mx-auto pt-6 h-full">
        <slot/>
    </div>
</main>
