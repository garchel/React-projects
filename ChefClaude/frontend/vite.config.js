import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/React-projects/ChefClaude/',
  plugins: [react()],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      external: ['axios', 'react-markdown'],
      output: {
        globals: {
          axios: 'axios',
          'react-markdown': 'ReactMarkdown'
        }
      }
    }
  },
  optimizeDeps: {
    include: ['axios', 'react-markdown']
  }
})