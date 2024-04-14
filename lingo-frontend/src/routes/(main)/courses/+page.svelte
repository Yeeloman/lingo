<script>
// @ts-nocheck

	import List from './List.svelte';

    export let data;
    // console.log("data", data);
</script>
<svelte:head>
    <title>Courses</title>
</svelte:head>

<div class="h-full max-w-[912px] mx-auto px-3">
    <h1 class="text-2xl font-bold text-neutral-700">
        Courses page
    </h1>
    <List
    userId={data.userId}
    userPro={data.usrProg}
    Courses={data.courses}
    activeCourseId={data.usrProg?.activeCourseId}/>
</div>
