<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

const route = useRoute()
const pageTitle = ref('VueVerse')
const showPersistentDownload = false

watchEffect(() => {
  // Update page title based on route
  const routeName = route.name?.toString() || 'home'
  if (routeName === 'home') {
    pageTitle.value = 'VueVerse - Developer Community'
  } else {
    const name = routeName.charAt(0).toUpperCase() + routeName.slice(1)
    pageTitle.value = `${name} | VueVerse`
  }
  document.title = pageTitle.value
})
</script>

<template>
  <div class="app">
    <AppHeader />
    <!-- Persistent download button visible across all routes -->
    <a
      v-if="showPersistentDownload"
      class="persistent-download"
      href="/VueVerse_2026_Vision_and_Objectives.pdf"
      download="2026-VueVerse-Plan.pdf"
      title="Download 2026 VueVerse Plan"
    >
      <svg class="download-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
      <span class="download-text">VueVerse 2026 Plan</span>
    </a>
    <main>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>
    <AppFooter />
  </div>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}

/* Persistent download button styles */
.persistent-download {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 9999;
  background-color: #42b883;
  color: white;
  padding: 1.2rem 1rem;
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 8px 24px rgba(66, 184, 131, 0.2);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  /* subtle pulsing glow to draw attention */
  animation: pulse 2.6s ease-in-out infinite;
}

.persistent-download:hover {
  transform: translateY(-3px);
  color: #fff !important;
  box-shadow: 0 12px 30px rgba(66, 184, 131, 0.25);
}

.persistent-download .download-icon {
  stroke: #fff;
  flex: 0 0 auto;
}

.persistent-download .download-text {
  line-height: 1;
}

/* pulse keyframes for glow effect */
@keyframes pulse {
  0% {
    transform: translateY(0);
    box-shadow: 0 8px 24px rgba(66, 184, 131, 0.18);
  }
  50% {
    transform: translateY(-4px);
    box-shadow: 0 22px 44px rgba(66, 184, 131, 0.30);
  }
  100% {
    transform: translateY(0);
    box-shadow: 0 8px 24px rgba(66, 184, 131, 0.18);
  }
}

/* Respect user's reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .persistent-download {
    animation: none !important;
    transition: none !important;
  }
}

/* Responsive sizing */
@media (max-width: 576px) {
  .persistent-download {
    right: 12px;
    bottom: 12px;
    padding: 0.45rem 0.7rem;
    font-size: 0.9rem;
  }
  .persistent-download .download-icon {
    width: 16px;
    height: 16px;
  }
}

@media (max-width: 576px) {
  .persistent-download {
    right: 12px;
    bottom: 12px;
    padding: 0.5rem 0.8rem;
    font-size: 0.95rem;
  }
}
</style>
