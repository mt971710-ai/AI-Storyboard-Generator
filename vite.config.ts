import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // The 'base' path is required for deployments to a subdirectory, like on GitHub Pages.
  base: ' https://mt971710-ai.github.io/AI-Storyboard-Generator/',
})
