<script lang="ts">
	import ClerkLoaded from 'clerk-sveltekit/client/ClerkLoaded.svelte';
	import ClerkLoading from "clerk-sveltekit/client/ClerkLoading.svelte";
    import { Button } from '$lib/components/ui/button';
	import SignedOut from 'clerk-sveltekit/client/SignedOut.svelte';
    import { Loader } from 'svelte-lucide';
	import SignInButton from 'clerk-sveltekit/client/SignInButton.svelte';
	import SignUpButton from 'clerk-sveltekit/client/SignUpButton.svelte';
	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';

</script>
<svelte:head>
    <title>Lingo</title>
</svelte:head>

<div class="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
    <div class="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <enhanced:img class="bg-cover" src="$lib/assets/hero.svg" alt="Hero"/>
    </div>
    <div class="flex flex-col items-center gap-y-8">
        <h1 class="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[400px] text-center">
            Learn, practice, and master new languages With Lingo.
        </h1>
        <div class="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
            <ClerkLoading>
                <Loader class="h-5 w-5 text-muted-foreground animate-spin"/>
            </ClerkLoading>
            <ClerkLoaded>
                <SignedOut>
                    <SignUpButton mode="modal"
                    class="w-full">
                    <Button size="lg" variant="secondary" class="w-full">
                        Get Started
                    </Button>
                </SignUpButton>
                <SignInButton mode="modal"
                    class="w-full">
                        <Button size="lg" variant="primaryOutline" class="w-full">
                            I already have an account
                        </Button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <Button size="lg" variant="secondary" class="w-full">
                        <a href="/learn">Continue learning</a>
                    </Button>
                </SignedIn>
            </ClerkLoaded>
        </div>
    </div>
</div>
