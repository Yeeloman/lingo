<script>
	export let progress;
	const angle = 360 * progress;

	// Adapt the logic according to the approach
	const background = `radial-gradient(white 50%, transparent 51%),
    conic-gradient(transparent 0deg ${angle}deg, gainsboro ${angle}deg 360deg),
    conic-gradient(#4ade80 0deg, #4ade80 360deg);`;

	$: cssVarStyles = `--background:${background}`;
</script>

<div id="progress-circle" class="flex items-center justify-center" style={cssVarStyles}>
	<slot name="Button"/>
</div>

<style>
	#progress-circle {
		background: var(--background);
		border-radius: 50%;
		width: 120px;
		height: 120px;
		transition: all 500ms ease-in;
		will-change: transform;
	}
</style>
