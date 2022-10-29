import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {https:false,
  //   proxy: {
  //     '/api': {
  //          target: "https://blog-server-i6uh.onrender.com/",
  //          changeOrigin: true,
  //          secure: false,      
  //          ws: true,
  //      }
  // }},
  

})

// this proxy is required for cross-site requests to work
