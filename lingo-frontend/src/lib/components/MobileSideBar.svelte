<script>
    import {
        Sheet,
        SheetContent,
        SheetTrigger
    } from "$lib/components/ui/sheet";
    import Sidebar from "$lib/components/Sidebar.svelte";
	import { Menu } from "svelte-lucide";
</script>
<Sheet>
    <SheetTrigger>
        <Menu class="text-white"/>
    </SheetTrigger>
    <SheetContent
    class="p-0 z-[100]"
    side="left">
        <Sidebar/>
    </SheetContent>
</Sheet>
