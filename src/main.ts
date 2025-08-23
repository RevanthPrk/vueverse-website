import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import i18n from './i18n'
import './style.scss'
import App from './App.vue'

// Import routes
import { routes } from './router'

// Create pinia store
const pinia = createPinia()

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // Always scroll to top when navigating
    return { top: 0 }
  }
})

createApp(App)
  .use(router)
  .use(pinia)
  .use(i18n)
  .mount('#app')