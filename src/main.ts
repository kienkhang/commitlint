import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.scss'
import HelloWorld from '@/pages/HelloWorld.vue'
import Counter from '@/pages/Counter.vue'
import Login from '@/pages/Login.vue'
import App from './App.vue'

const routes = [
  { path: '/', component: HelloWorld, alias: '/home' },
  { path: '/count', component: Counter },
  { path: '/login', component: Login },
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

createApp(App).use(router).mount('#app')
