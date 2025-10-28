import { defineConfig } from 'vite';
import path from 'path';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
	plugins: [react(), svgr()],

	resolve: {
		alias: {
			'@core': path.resolve(__dirname, 'src/core'),
			'@styles': path.resolve(__dirname, 'src/styles'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@layouts': path.resolve(__dirname, 'src/layouts'),
			'@features': path.resolve(__dirname, 'src/features'),
		},
	},
});
