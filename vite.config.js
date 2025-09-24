import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Edita `base` con el nombre de tu repo para gh-pages, por ejemplo: '/mi-repo/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
