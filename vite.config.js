import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://harshvardhansahal.github.io/myntra-react-clone',
  plugins: [react()],
})
