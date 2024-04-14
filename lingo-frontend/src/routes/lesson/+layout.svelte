<script lang="ts">
    import type { LayoutData } from './$types';

    export let data: LayoutData;
</script>

<div class="flex flex-col h-full">
    <div class="flex flex-col h-full w-full">
        <slot/>
    </div>
</div>
