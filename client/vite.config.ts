import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),mkcert()],
  server: {https:false,
    proxy: {
      '/api': {
           target: 'http://localhost:3000',
           changeOrigin: true,
           secure: false,      
           ws: true,
       }
  }},
  

})

// this proxy is required for cross-site requests to work
