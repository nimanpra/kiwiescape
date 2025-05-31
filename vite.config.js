import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', '@mui/material'],
          icons: ['@mui/icons-material'],
        }
      }
    },
    assetsDir: 'assets'
  },
  publicDir: 'public',
  base: process.env.NODE_ENV === 'production' ? '/kiwiescape/' : '/'
})
