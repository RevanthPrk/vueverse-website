<script setup lang="ts">
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())
</script>

<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <router-link to="/" class="logo">
            <img src="../assets/images/vueverse_logo1.png" alt="VueVerse Hyderabad Logo" width="120" />
          </router-link>
          <p class="footer-tagline">
            VueVerse is dedicated to exploring the latest features, releases, and best practices of Vue.js, Vite, Vitest, and Nuxt.
          </p>
        </div>
        
        <div class="footer-links">
          <div class="footer-links-group">
            <h4>Community</h4>
            <ul>
              <li><router-link to="/about">About Us</router-link></li>
              <li><router-link to="/events">Events</router-link></li>
              <li><router-link to="/our-team">Our Team</router-link></li>
              <li><router-link to="/partners">Partners</router-link></li>
            </ul>
          </div>
          
          <div class="footer-links-group">
            <h4>Resources</h4>
            <ul>
              <li><a href="https://vuejs.org/" target="_blank">Vue.js</a></li>
              <li><a href="https://vueschool.io/" target="_blank">Vue School</a></li>
              <li><a href="https://router.vuejs.org/" target="_blank">Vue Router</a></li>
              <li><a href="https://pinia.vuejs.org/" target="_blank">Pinia</a></li>
            </ul>
          </div>
          
          <div class="footer-links-group">
            <h4>Connect</h4>
            <ul>
              <li><a href="https://www.linkedin.com/company/vueversehyderabad/" target="_blank">LinkedIn</a></li>
              <li><a href="https://discord.gg/8RKRpkrwNy" target="_blank">Discord</a></li>
              <li><a href="https://app.daily.dev/squads/vueverse1" target="_blank">daily.dev</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} VueVerse. All rights reserved.</p>
        <div class="social-links">
          <!-- <a href="#" class="social-link" title="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
          </a>
          <a href="#" class="social-link" title="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a> -->
          <a href="https://discord.gg/8RKRpkrwNy" target="_blank" class="social-link" title="Discord">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> -->
             <!-- Discord icon (SVG) -->
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-label="Discord">
  <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.444.864-.608 1.249-1.844-.276-3.68-.276-5.486 0-.164-.398-.405-.874-.617-1.249a.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.07.07 0 0 0-.032.027C1.393 9.045.688 13.58 1.066 18.058a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.077.077 0 0 0 .084-.027c.461-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.041-.105 12.28 12.28 0 0 1-1.872-.892.077.077 0 0 1-.008-.127c.126-.094.252-.192.372-.291a.074.074 0 0 1 .078-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .079.009c.12.099.246.198.373.292a.077.077 0 0 1-.006.127c-.598.343-1.23.645-1.873.891a.076.076 0 0 0-.04.106c.36.698.772 1.364 1.225 1.994a.076.076 0 0 0 .084.028 19.876 19.876 0 0 0 5.994-3.03.077.077 0 0 0 .031-.056c.5-5.177-.838-9.672-3.548-13.662a.06.06 0 0 0-.031-.028ZM9.217 13.499c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.418 2.157-2.418 1.21 0 2.174 1.095 2.157 2.418 0 1.334-.956 2.419-2.157 2.419Zm7.399 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.418 2.157-2.418 1.21 0 2.174 1.095 2.157 2.418 0 1.334-.947 2.419-2.157 2.419Z"/>
</svg>

          </a>
          <a href="https://www.linkedin.com/company/vueversehyderabad/" target="_blank" class="social-link" title="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.site-footer {
  background: linear-gradient(135deg, rgba(66, 184, 131, 0.9) 0%, rgba(53, 73, 94, 0.9) 100%);
  color: white !important;
  padding: 4rem 0 2rem;
  margin-top: 4rem;
  border-top: 1px solid #e9ecef;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 3rem;
}

.footer-logo {
  flex: 1 1 300px;
  
  .logo {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  .logo-icon {
    width: 36px;
    height: 36px;
    background-color: #42b883;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.75rem;
    color: white;
    font-weight: 700;
    font-size: 1.2rem;
  }
  
  .logo-text {
    line-height: 1.1;
  }
  
  .logo-vue {
    font-weight: 700;
    color: #42b883;
  }
  
  .logo-verse {
    font-weight: 700;
    color: #fff;
  }
  
  .logo-location {
    display: block;
    font-size: 0.8rem;
    color: #666;
    font-weight: 400;
  }
  
  .footer-tagline {
    color: #fff;
    font-size: 0.95rem;
    margin-top: 1rem;
    max-width: 300px;
  }
}

.footer-links {
  flex: 1 1 500px;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  
  .footer-links-group {
    flex: 1 1 150px;
    
    h4 {
      font-size: 1.1rem;
      font-weight: 600;
      color: #fff;
      margin-bottom: 1.25rem;
      position: relative;
      
      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -0.5rem;
        width: 40px;
        height: 2px;
        background-color: #42b883;
      }
    }
    
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      
      li {
        margin-bottom: 0.75rem;
        
        a {
          color: #fff;
          text-decoration: none;
          transition: color 0.2s ease;
          font-size: 0.95rem;
          
          &:hover {
            color: #42b883;
          }
        }
      }
    }
  }
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid #dee2e6;
  
  p {
    color: #fff;
    font-size: 0.9rem;
  }
  
  .social-links {
    display: flex;
    gap: 1rem;
    
    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      color: #fff;
      border-radius: 50%;
      background-color: #42b883;
      transition: all 0.3s ease;
      
      &:hover {
        background-color: #42b883;
        color: white;
        transform: translateY(-3px);
      }
    }
  }
}

@media (max-width: 767px) {
  .footer-bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style>