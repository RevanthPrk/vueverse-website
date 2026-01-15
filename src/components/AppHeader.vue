<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from 'vue-router'
// import { useI18n } from 'vue-i18n'
// import LanguageSwitch from './LanguageSwitch.vue'
// 
// const { t } = useI18n()
const route = useRoute()
const isMenuOpen = ref(false)
const isScrolled = ref(false)
const windowWidth = ref(window.innerWidth)

// Toggle mobile menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// Close mobile menu when clicking outside
const closeMenu = () => {
  if (isMenuOpen.value) {
    isMenuOpen.value = false
  }
}

// Check if the current route matches the navlink
const isActive = (path: string) => {
  return route.path === path
}

// Update isScrolled based on scroll position
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

// Update window width on resize
const handleResize = () => {
  windowWidth.value = window.innerWidth
  if (windowWidth.value >= 768) {
    isMenuOpen.value = false
  }
}

// Should show mobile menu
const isMobile = computed(() => {
  return windowWidth.value < 768
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
  document.addEventListener('click', closeMenu)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
  document.removeEventListener('click', closeMenu)
})
</script>

<template>
  <header 
    :class="['site-header', { 'scrolled': isScrolled }]"
    @click.stop
  >
    <div class="container">
      <div class="header-content">
        <router-link to="/" class="logo">
            <img src="../assets/images/vueverse_logo1.png" alt="VueVerse Hyderabad Logo" width="80" />

          <!-- <div class="logo-icon">
            <span class="logo-v">V</span>
          </div>
          <div class="logo-text">
            <span class="logo-vue">Vue</span><span class="logo-verse">Verse</span>
            <span class="logo-location">Hyderabad</span>
          </div> -->
        </router-link>
        
        <button 
          class="menu-toggle" 
          :class="{ 'active': isMenuOpen }"
          @click="toggleMenu" 
          v-if="isMobile"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <nav class="site-nav" :class="{ 'active': isMenuOpen || !isMobile }">
          <ul class="nav-links">
            <li @click="closeMenu" :class="{ 'active': isActive('/') }">
              <router-link to="/">Home</router-link>
            </li>
            <li @click="closeMenu" :class="{ 'active': isActive('/about') }">
              <router-link to="/about">About</router-link>
            </li>
            <li @click="closeMenu" :class="{ 'active': isActive('/events') }">
              <router-link to="/events">Events</router-link>
            </li>
            <li @click="closeMenu" :class="{ 'active': isActive('/our-team') }">
              <router-link to="/our-team">Our Team</router-link>
            </li>
            <li @click="closeMenu" :class="{ 'active': isActive('/partners') }">
              <router-link to="/partners">Partners</router-link>
            </li>
            <li @click="closeMenu" :class="{ 'active': isActive('/blogs') }">
              <router-link to="/blogs">Blogs</router-link>
            </li>
            <li @click="closeMenu" :class="{ 'active': isActive('/videos') }">
              <router-link to="/videos">Videos</router-link>
            </li>
          </ul>
          <div class="nav-actions">
            <!-- <LanguageSwitch class="language-switch-component" /> -->
            <a href="https://www.linkedin.com/company/vueversehyderabad/" target="_blank" class="btn btn-primary">Join Us</a>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1rem 0;
  transition: all 0.3s ease;
  background-color: transparent;
  
  &.scrolled {
    background-color: rgba(53, 73, 94, 0.95);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    padding: 0.5rem 0;
    
    .logo-icon {
      transform: scale(0.9);
    }
    
    .logo-text {
      transform: scale(0.95);
    }
  }
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  
  &:hover {
    .logo-icon {
      transform: rotate(5deg) scale(1.05);
    }
  }
}

.logo-icon {
  width: 40px;
  height: 40px;
  background-color: #42b883;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem;
  color: white;
  font-weight: 700;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(66, 184, 131, 0.3);
}

.logo-text {
  line-height: 1.1;
  transition: all 0.3s ease;
}

.logo-vue {
  font-weight: 700;
  color: #42b883;
}

.logo-verse {
  font-weight: 700;
  color: white;
}

.logo-location {
  display: block;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  span {
    display: block;
    width: 100%;
    height: 3px;
    background-color: white;
    border-radius: 3px;
    transition: all 0.3s ease-in-out;
  }
  
  &.active {
    span:first-child {
      transform: translateY(9px) rotate(45deg);
    }
    
    span:nth-child(2) {
      opacity: 0;
    }
    
    span:last-child {
      transform: translateY(-9px) rotate(-45deg);
    }
  }
}

.site-nav {
  display: flex;
  align-items: center;
  
  .nav-links {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    
    li {
      margin-left: 2rem;
      position: relative;
      
      &.active, &:hover {
        a:after {
          width: 100%;
        }
      }
      
      a {
        color: white;
        text-decoration: none;
        font-weight: 500;
        padding: 0.5rem 0;
        position: relative;
        
        &:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #42b883;
          transition: width 0.3s ease;
        }
      }
    }
  }
  
  .nav-actions {
    margin-left: 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .nav-actions:hover {
    .btn {
      color: white;
    }
  }
}

@media (max-width: 767px) {
  .menu-toggle {
    display: flex;
  }
  
  .site-nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    max-width: 300px;
    height: 100vh;
    background-color: #35495e;
    flex-direction: column;
    justify-content: flex-start;
    padding: 5rem 2rem;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    transition: right 0.3s ease;
    
    &.active {
      right: 0;
    }
    
    .nav-links {
      flex-direction: column;
      width: 100%;
      
      li {
        margin: 0 0 1.5rem 0;
        
        a {
          display: block;
          font-size: 1.2rem;
        }
      }
    }
    
    .nav-actions {
      margin: 1.5rem 0 0 0;
      width: 100%;
      flex-direction: column;
      
      .btn {
        width: 100%;
      }

      .language-switch-component {
        width: 100%;
      }
    }
  }
}
</style>