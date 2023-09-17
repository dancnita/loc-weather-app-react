import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/loc-weather-app-react/',
  plugins: [react()],
});
