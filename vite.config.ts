import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layout from 'vite-plugin-vue-layouts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    Pages({
      dirs: 'src/pages',
      extensions: ['vue', 'ts', 'js'],
    }),
    Layout({
      layoutsDirs: 'src/layouts',
      defaultLayout: 'home',
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
