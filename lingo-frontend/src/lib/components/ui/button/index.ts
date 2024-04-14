import Root from "./button.svelte";
import { tv, type VariantProps } from "tailwind-variants";
import type { Button as ButtonPrimitive } from "bits-ui";

const buttonVariants = tv({
	base: "inline-flex items-center justify-center rounded-xl text-sm font-bold whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 tracking-wide uppercase",
	variants: {
		variant: {
			locked: "bg-neutral-200 text-primary-foreground hover:bg-neutral-200/90 border-neutral-400 border-b-4 active:border-b-0",
			default: "bg-white text-black border-slate-200 border-2 border-b-4 hover:bg-slate-100 active:border-b-2 text-slate-500",
			primary: "bg-sky-400 text-primary-foreground border-sky-500 border-2 hover:bg-sky-400/90 border-sky-500 border-b-4  active:border-b-0",
			primaryOutline: "bg-white text-sky-500 hover:bg-slate-100",
			secondary: "bg-green-500 text-primary-foreground border-green-500 border-2 hover:bg-green-500/90 border-green-600 border-b-4  active:border-b-0",
			secondaryOutline: "bg-white text-green-500 hover:bg-slate-100",
			danger: "bg-rose-500 text-primary-foreground border-rose-500 border-2 hover:bg-rose-500/90 border-rose-600 border-b-4  active:border-b-0",
			dangerOutline: "bg-white text-rose-500 hover:bg-slate-100",
			super: "bg-indigo-500 text-primary-foreground border-indigo-500 border-2 hover:bg-indigo-500/90 border-indigo-600 border-b-4  active:border-b-0",
			superOutline: "bg-white text-indigo-500 hover:bg-slate-100",
			ghost: "bg-transparent text-slate-500 border-transparent border-0 hover:bg-slate-100",
			sidebar: "bg-transparent text-slate-500 border-transparent border-2 hover:bg-slate-100 transition-none",
			sidebarOutline: "bg-sky-500/15 text-sky-500 border-sky-300 border-2 hover:bg-sky-500/20 transition-none",
		},
		size: {
			default: "h-11 px-4 py-2",
			sm: "h-9  px-3",
			lg: "h-12 px-8",
			icon: "h-10 w-10",
			rounded: "rounded-full",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "default",
	},
});

type Variant = VariantProps<typeof buttonVariants>["variant"];
type Size = VariantProps<typeof buttonVariants>["size"];

type Props = ButtonPrimitive.Props & {
	variant?: Variant;
	size?: Size;
};

type Events = ButtonPrimitive.Events;

export {
	Root,
	type Props,
	type Events,
	//
	Root as Button,
	type Props as ButtonProps,
	type Events as ButtonEvents,
	buttonVariants,
};
