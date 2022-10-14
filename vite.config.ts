import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    Pages({
      dirs: 'src/pages',
      extensions: ['vue', 'ts', 'js'],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
