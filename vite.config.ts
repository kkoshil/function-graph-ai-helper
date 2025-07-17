import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Vercel provides env vars to the build process.
    // This makes 'process.env.API_KEY' available in the client code.
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
  }
})
