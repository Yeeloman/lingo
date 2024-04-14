<script>
	import  SignedIn  from 'clerk-sveltekit/client/SignedIn.svelte';
	import SignOutButton from 'clerk-sveltekit/client/SignOutButton.svelte';
</script>
<p>page</p>
<nav>
    <a href="/">Words</a>
    <SignedIn>
        <SignOutButton />
    </SignedIn>

</nav>
