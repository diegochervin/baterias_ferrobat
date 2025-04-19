import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 importante: base igual al nombre del repo
export default defineConfig({
  plugins: [react()],
  base: '/baterias_ferrobat/',
})
