<script lang="ts">
	import { enhancedImages } from '@sveltejs/enhanced-img';
    import {
        Dialog,
        DialogContent,
        DialogHeader,
        DialogFooter,
        DialogTitle,
        DialogDescription
        } from "$lib/components/ui/dialog";
    import Button from "$lib/components/ui/button/button.svelte";
    import { isOpen } from "$lib/store/UseExitModel";
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";

</script>

<Dialog open={$isOpen} onOpenChange={() => isOpen.set(!$isOpen)}>
    <DialogContent
        class="max-w-md">
        <DialogHeader>
            <div>
                <enhanced:img
                    src="$lib/assets/mascot_sad.svg"
                    alt="mascot sad"
                    class="h-[80px] w-[80px]"
                />
                testing
            </div>
        </DialogHeader>

    </DialogContent>
</Dialog>
