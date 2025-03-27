import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss(),],
  
  css: {
    postcss: './postcss.config.js',
    
  },
  build: {
    outDir: 'dist',  
    rollupOptions: {
      input: './index.html',  
    },
  },
  base: '/', 
});
