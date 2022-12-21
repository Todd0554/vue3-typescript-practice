import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      "@": path.resolve(__dirname,'./src'),
    }
  },
  server: {
    proxy: {
      "/api": {
        target: "https://www.thenewstep.cn/backend/8000/api/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
})