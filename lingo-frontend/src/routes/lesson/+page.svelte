<script lang="ts">
	import Quiz from './Quiz.svelte';
	export let data;
</script>

<svelte:head>
	<title>Lesson</title>
</svelte:head>

<Quiz
	initialLessonId={data.lesson.id}
	initialLessonChallenges={data.lesson.challenges}
	initialHearts={data.userProgress.hearts}
	initialPercentage={data.initialPercentage}
	userSubscription={null}
/>
