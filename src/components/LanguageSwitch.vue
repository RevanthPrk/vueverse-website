<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'hi' : 'en'
}
</script>

<template>
  <button class="language-switch" @click="toggleLanguage">
    {{ locale === 'en' ? 'हिंदी' : 'English' }}
  </button>
</template>

<style lang="scss" scoped>
.language-switch {
  background-color: transparent;
  border: 1px solid white;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: white;
    color: #35495e;
  }
}
</style>