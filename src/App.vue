<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

const route = useRoute()
const pageTitle = ref('VueVerse')

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
</style>