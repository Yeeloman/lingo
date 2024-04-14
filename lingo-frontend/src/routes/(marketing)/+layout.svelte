<script>
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";
</script>
<div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-1 flex flex-col items-center justify-center">
        <slot />
    </main>
    <Footer />
</div>
