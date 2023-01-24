import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginFaviconsInject from 'vite-plugin-favicons-inject';


export default defineConfig({
  plugins: [
    react(),
    vitePluginFaviconsInject('./public/E1.png'),
  ],
 
});