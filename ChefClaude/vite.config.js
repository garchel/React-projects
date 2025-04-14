import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/React-projects/ChefClaude/',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  root: './'
})
