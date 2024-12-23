import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ecomerceReact/', // Certifique-se de que este é o nome correto do repositório
});
