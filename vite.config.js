import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:"https://mohdryan.github.io/podcast-site-clone/",
  plugins: [react()],
})
