import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import mkcert from 'vite-plugin-mkcert'

// mkcert() add into plugin if you want secure https: certificate
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.png', '**/*.jpeg','**/*.jpg'],
  // server: {https:false,
  //   proxy: {
  //     '/api': {
  //         //  target: "https://blog-server-i6uh.onrender.com",
  //          target: "http://localhost:3000",
          
  //          changeOrigin: true,
  //          secure: false,      
  //          ws: true,
  //      }
      
  // }},
  

})

// this proxy is required for cross-site requests to work in case of development , proxy is not a thing for production
