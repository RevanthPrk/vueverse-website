<script setup lang="ts">
// import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// const yearFounded = ref(2023)
// const currentYear = ref(new Date().getFullYear())
// const yearsActive = ref(currentYear.value - yearFounded.value + 1)
</script>

<template>
  <div class="about-page">
    <!-- Page Header -->
    <div class="page-header">
      <div class="container">
        <h1>{{ t('about.title') }}</h1>
      </div>
    </div>
    
    <div class="container">
      <section class="section">
        <div class="about-intro">
          <div class="about-content">
            <h2>{{ t('about.story.title') }}</h2>
            <p>Welcome to <b>VueVerse</b> - your go-to destination for everything related to Vue 3! Whether you're an
              experienced developer or just getting started, this group is dedicated to exploring the latest features,
              releases, and best practices of Vue.js.
              <ol style="margin-left: 16px;">
                <li><b>Dive deep into the new features of Vue 3.</b></li>
                <li><b>Solve real-world problems through collaborative discussion.</b></li>
                <li><b>Share and discover tips, tools, and resources.</b></li>
                <li><b>Stay up-to-date with the latest Vue.js releases and trends.</b></li>
                <li><b>Foster learning through knowledge sharing and hands-on experience.</b></li>
              </ol>

              Join us in growing together, solving challenges, and celebrating the power of Vue 3! 
              Whether you're debugging an issue or crafting your next big project, VueVerse is the place to connect, learn, and succeed
              with Vue.</p>
          </div>
          <div class="about-image">
            <img src="https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="VueVerse Community" />
          </div>
        </div>
      </section>
      
      <section class="section">
        <h2 class="section-title">{{ t('about.mission.title') }}</h2>
        <div class="mission-values">
          <div class="mission-card">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
            </div>
            <h3>{{ t('about.mission.communityFirst.title') }}</h3>
            <p>{{ t('about.mission.communityFirst.description') }}</p>
          </div>
          
          <div class="mission-card">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            </div>
            <h3>{{ t('about.mission.technicalExcellence.title') }}</h3>
            <p>{{ t('about.mission.technicalExcellence.description') }}</p>
          </div>
          
          <div class="mission-card">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            </div>
            <h3>{{ t('about.mission.globalConnection.title') }}</h3>
            <p>{{ t('about.mission.globalConnection.description') }}</p>
          </div>
        </div>
      </section>
      
      <section class="section">
        <h2 class="section-title">{{ t('about.activities.title') }}</h2>
        <div class="activities-grid">
          <div class="activity-item">
            <h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
              {{ t('about.activities.monthlyMeetups.title') }}
            </h3>
            <p>{{ t('about.activities.monthlyMeetups.description') }}</p>
          </div>
          
          <div class="activity-item">
            <h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="14 2 18 6 7 17 3 17 3 13 14 2"></polygon><line x1="3" y1="22" x2="21" y2="22"></line></svg>
              {{ t('about.activities.workshops.title') }}
            </h3>
            <p>{{ t('about.activities.workshops.description') }}</p>
          </div>
          
          <!-- <div class="activity-item">
            <h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
              {{ t('about.activities.hackathons.title') }}
            </h3>
            <p>{{ t('about.activities.hackathons.description') }}</p>
          </div> -->
          
          <!-- <div class="activity-item">
            <h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              {{ t('about.activities.mentorship.title') }}
            </h3>
            <p>{{ t('about.activities.mentorship.description') }}</p>
          </div> -->
          
          <div class="activity-item">
            <h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
              {{ t('about.activities.openSource.title') }}
            </h3>
            <p>{{ t('about.activities.openSource.description') }}</p>
          </div>
          
          <!-- <div class="activity-item">
            <h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              {{ t('about.activities.jobConnect.title') }}
            </h3>
            <p>{{ t('about.activities.jobConnect.description') }}</p>
          </div> -->
        </div>
      </section>
      
      <!-- <section class="section">
        <h2 class="section-title">{{ t('about.hyderabad.title') }}</h2>
        <div class="about-hyderabad">
          <div class="about-hyderabad-image">
            <img src="https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Hyderabad Tech Scene" />
          </div>
          <div class="about-hyderabad-content">
            <p>{{ t('about.hyderabad.description1') }}</p>
            <p>{{ t('about.hyderabad.description2') }}</p>
            <p>{{ t('about.hyderabad.description3') }}</p>
          </div>
        </div>
      </section> -->
      
      <section class="section">
        <h2 class="section-title">{{ t('about.join.title') }}</h2>
        <div class="join-community">
          <p class="join-text">{{ t('about.join.description') }}</p>
          <div class="join-channels">
             <a href="https://www.linkedin.com/company/vueversehyderabad/" target="_blank" class="join-channel-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              LinkedIn Community
            </a>
            <a href="https://discord.gg/8RKRpkrwNy" target="_blank" class="join-channel-btn">
              <!-- <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> -->
               <!-- Discord icon (SVG) -->
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-label="Discord">
  <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.444.864-.608 1.249-1.844-.276-3.68-.276-5.486 0-.164-.398-.405-.874-.617-1.249a.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.07.07 0 0 0-.032.027C1.393 9.045.688 13.58 1.066 18.058a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.077.077 0 0 0 .084-.027c.461-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.041-.105 12.28 12.28 0 0 1-1.872-.892.077.077 0 0 1-.008-.127c.126-.094.252-.192.372-.291a.074.074 0 0 1 .078-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .079.009c.12.099.246.198.373.292a.077.077 0 0 1-.006.127c-.598.343-1.23.645-1.873.891a.076.076 0 0 0-.04.106c.36.698.772 1.364 1.225 1.994a.076.076 0 0 0 .084.028 19.876 19.876 0 0 0 5.994-3.03.077.077 0 0 0 .031-.056c.5-5.177-.838-9.672-3.548-13.662a.06.06 0 0 0-.031-.028ZM9.217 13.499c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.418 2.157-2.418 1.21 0 2.174 1.095 2.157 2.418 0 1.334-.956 2.419-2.157 2.419Zm7.399 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.418 2.157-2.418 1.21 0 2.174 1.095 2.157 2.418 0 1.334-.947 2.419-2.157 2.419Z"/>
</svg>

              {{ t('about.join.channels.discord') }}
            </a>

             <a href="https://app.daily.dev/squads/vueverse1" target="_blank" class="join-channel-btn">
              <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg> -->
               <img src="https://cdn.jsdelivr.net/npm/simple-icons@v15/icons/dailydotdev.svg" width="20" height="20" color="green" alt="daily.dev" />

              daily.dev Community
            </a>
            <!-- <a href="#" class="join-channel-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              {{ t('about.join.channels.twitter') }}
            </a> -->
           
            <!-- <a href="#" class="join-channel-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              {{ t('about.join.channels.github') }}
            </a> -->
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-header {
  background-color: #35495e;
  color: white;
  padding: 6rem 0 2rem;
  margin-bottom: 3rem;
  
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-top: 2rem;
  }
}

.about-intro {
  display: flex;
  gap: 3rem;
  align-items: center;
  margin-bottom: 4rem;
  
  @media (max-width: 992px) {
    flex-direction: column-reverse;
  }
  
  .about-content {
    flex: 1;
    
    h2 {
      font-size: 2rem;
      font-weight: 700;
      color: #35495e;
      margin-bottom: 1.5rem;
    }
    
    p {
      margin-bottom: 1.5rem;
      line-height: 1.7;
      color: #495057;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  
  .about-image {
    flex: 1;
    
    img {
      width: 100%;
      border-radius: 8px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
  }
}

.mission-values {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.mission-card {
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  
  .icon {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: rgba(66, 184, 131, 0.1);
    color: #42b883;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
  }
  
  h3 {
    font-size: 1.4rem;
    font-weight: 600;
    color: #35495e;
    margin-bottom: 1rem;
  }
  
  p {
    color: #6c757d;
    line-height: 1.7;
  }
}

.activities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.activity-item {
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  h3 {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 1.2rem;
    font-weight: 600;
    color: #35495e;
    margin-bottom: 1rem;
    
    svg {
      color: #42b883;
    }
  }
  
  p {
    color: #6c757d;
    line-height: 1.6;
  }
}

.about-hyderabad {
  display: flex;
  gap: 3rem;
  align-items: center;
  margin-top: 2rem;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
  
  .about-hyderabad-image {
    flex: 1;
    
    img {
      width: 100%;
      border-radius: 8px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
  }
  
  .about-hyderabad-content {
    flex: 1;
    
    p {
      margin-bottom: 1.5rem;
      line-height: 1.7;
      color: #495057;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

.join-community {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 3rem;
  text-align: center;
  margin-top: 1rem;
  
  .join-text {
    font-size: 1.2rem;
    color: #495057;
    max-width: 700px;
    margin: 0 auto 2rem;
    line-height: 1.7;
  }
  
  .join-channels {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    
    .join-channel-btn {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem 1.5rem;
      background-color: white;
      color: #35495e;
      border-radius: 5px;
      font-weight: 600;
      transition: all 0.3s ease;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
      
      svg {
        color: #42b883;
      }
      
      &:hover {
        background-color: #42b883;
        color: white;
        
        svg {
          color: white;
        }
      }
    }
  }
}
</style>