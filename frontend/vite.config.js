import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import process from 'node:process';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	// Load environment variables from the client/.env file
	const env = loadEnv(mode, process.cwd() + "/frontend");

	return {
		plugins: [react()],
		server: {
			proxy: {
				"/api": {
					target: env.VITE_API_URL,
					changeOrigin: true,
					secure: false,
				},
			},
		},
	};
});
