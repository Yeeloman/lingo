import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';
import { imagetools } from '@zerodevx/svelte-img/vite'

export default defineConfig({
	plugins: [
		enhancedImages(),
		sveltekit(),
		imagetools()
	],
	server: {
        fs: {
            allow: ['.env', 'db']
        }
    }
});
