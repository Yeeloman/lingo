<script>
	import { Button } from '$lib/components/ui/button';
    import ClerkLoading from "clerk-sveltekit/client/ClerkLoading.svelte";
    import ClerkLoaded from "clerk-sveltekit/client/ClerkLoaded.svelte";
    import SignedIn from "clerk-sveltekit/client/SignedIn.svelte";
    import SignedOut from "clerk-sveltekit/client/SignedOut.svelte";
    import UserButton from "clerk-sveltekit/client/UserButton.svelte";
    import SignInButton from "clerk-sveltekit/client/SignInButton.svelte";
    import { Loader } from 'svelte-lucide';
</script>
<header class="h-20 w-full border-b-2 border-slate-200 px-4">
    <div class="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
        <div class="pt-8 pl-4 pb-7 flex items-center gap-x-3">
            <enhanced:img src="$lib/assets/mascot.svg" alt="Mascot icon" class="w-[40px] h-[40px]" />
            <h1 class="text-2xl font-extrabold text-green-600 tracking-wide">
                Lingo
            </h1>
        </div>
        <ClerkLoading>
            <Loader class="h-5 w-5 text-muted-foreground animate-spin"/>
        </ClerkLoading>
        <ClerkLoaded>
            <SignedIn>
                <UserButton afterSignOutUrl="/"/>
            </SignedIn>
            <SignedOut>
                <SignInButton mode="modal"
                afterSignInUrl="/learn"
                afterSignUpUrl="/learn">
                    <Button size="lg" variant="ghost">
                        Login
                    </Button>
                </SignInButton>
            </SignedOut>
        </ClerkLoaded>
    </div>
</header>
