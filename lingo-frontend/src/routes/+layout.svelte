<script lang="ts">
	import ExitModel from '$lib/components/models/ExitModel.svelte';
    import "../app.css";
    import '@fontsource-variable/nunito';
</script>

<ExitModel/>
<slot />

<style>
    :global(body) {
        font-family: 'Nunito Variable bold', sans-serif;
    }
</style>
