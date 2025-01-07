import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@config': path.resolve(__dirname, 'src/firebase'),
      '@create': path.resolve(__dirname, 'src/create'),
      '@dashboard': path.resolve(__dirname, 'src/dashboard'),
      '@edit': path.resolve(__dirname, 'src/edit'),
      '@home': path.resolve(__dirname, 'src/home'), 
      '@notFound': path.resolve(__dirname, 'src/notFound'),
      "@shared": path.resolve(__dirname, 'src/shared'),
    }
  }
})
