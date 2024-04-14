<script>
    import { Button } from "$lib/components/ui/button";
</script>
<footer class="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
    <div class="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size='lg' variant='ghost' class="w-full">
            <enhanced:img
            src="$lib/assets/hr.svg"
            alt="Croatian"
            class='mr-4 rounded-md w-[40px] h-[32px]'/>
            Croatian
        </Button>
        <Button size='lg' variant='ghost' class="w-full">
            <enhanced:img
            src="$lib/assets/jp.svg"
            alt="Japenese"
            class='mr-4 rounded-md w-[40px] h-[32px]'/>
            Japenese
        </Button>
        <Button size='lg' variant='ghost' class="w-full">
            <enhanced:img
            src="$lib/assets/it.svg"
            alt="Italian"
            class='mr-4 rounded-md w-[40px] h-[32px]'/>
            Italian
        </Button>
        <Button size='lg' variant='ghost' class="w-full">
            <enhanced:img
            src="$lib/assets/fr.svg"
            alt="French"
            class='mr-4 rounded-md w-[40px] h-[32px]'/>
            French
        </Button>
        <Button size='lg' variant='ghost' class="w-full">
            <enhanced:img
            src="$lib/assets/es.svg"
            alt="Spanish"
            class='mr-4 rounded-md w-[40px] h-[32px]'/>
            Spanish
        </Button>
    </div>
</footer>
