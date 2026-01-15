<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Import organizer images so Vite bundles them for production
import revanthImg from '../assets/images/revanth.jpeg'
import shivaniImg from '../assets/images/shivani.jpeg'
import saiImg from '../assets/images/sai.jpg'
import pavanImg from '../assets/images/pavan.png'
import malvikaImg from '../assets/images/malvika.jpg'
import joinImg from '../assets/images/join.png'

interface Organizer {
  id: number
  name: string
  role: string
  bio: string
  image: string
  socialLinks: {
    twitter?: string
    linkedin?: string
    github?: string
  }
}

// Organizers data
const organizers: Organizer[] = [
  {
    id: 1,
    name: 'Revanth Kumar Patha',
    role: 'Founder',
    bio: t('organizers.bios.revanth'),
  image: revanthImg,
    socialLinks: {
      // twitter: 'https://twitter.com',
      linkedin: 'https://www.linkedin.com/in/revanth-kumar-patha-9246841a0/',
      github: 'https://github.com/RevanthPrk'
    }
  },
  {
    id: 2,
    name: 'Shivani Kuntumalla',
    role: 'Lead Volunteer',
    bio: t('organizers.bios.shivani'),
  image: shivaniImg,
    socialLinks: {
      // twitter: 'https://twitter.com',
      linkedin: 'https://www.linkedin.com/in/shivanik1997/',
      github: 'https://github.com/Shivanik97'
    }
  },
  {
    id: 3,
    name: 'SaiKumar Andhili',
    role: 'Volunteer',
    bio: t('organizers.bios.saikumar'),
  image: saiImg,
    socialLinks: {
      // twitter: 'https://twitter.com',
      linkedin: 'https://www.linkedin.com/in/andhili-saikumar-412593224/',
      // github: 'https://github.com/Shivanik97'
    }
  },
  {
    id: 4,
    name: 'Pavan Kumar Sairigapu',
    role: 'UI/UX Designer',
    bio: t('organizers.bios.pavan'),
  image: pavanImg,
    socialLinks: {
      // twitter: 'https://twitter.com',
      linkedin: 'https://www.linkedin.com/in/pavan-kumar-sairigapu/',
      // github: 'https://github.com/Shivanik97'
    }
  },
  {
    id: 5,
    name: 'Malvika Reddy',
    role: 'UI/UX Designer',
    bio: t('organizers.bios.malvika'),
  image: malvikaImg,
    socialLinks: {
      // twitter: 'https://twitter.com',
      linkedin: 'https://www.linkedin.com/in/malvikareddy18/',
      // github: 'https://github.com/malvikareddy18'
    }
  },
  
]
</script>

<template>
  <div class="organizers-page">
    <!-- Page Header -->
    <div class="page-header">
      <div class="container">
        <!-- <h1>{{ t('organizers.title') }}</h1> -->
      </div>
    </div>
    
    <div class="container">
      <!-- Organizers Intro -->
      <section class="section organizers-intro">
        <h2 class="section-title">{{ t('organizers.intro') }}</h2>
        <p class="organizers-intro-text">
          <!-- {{ t('organizers.description') }} -->
            VueVerse is led by <b>Revanth Kumar Patha</b>, a passionate Frontend Developer and community builder who loves exploring the Vue.js ecosystem, staying on top of new updates, and sharing knowledge with others. <b>The community is open to anyone who’s curious about Vue.js - developers, learners, contributors, or enthusiasts who want to connect, grow, and shape the future of Vue together.</b>
        </p>
      </section>
      
      <!-- Organizers Grid -->
      <section class="section">
        <div class="organizers-grid">
          <div class="organizer-card" v-for="organizer in organizers" :key="organizer.id">
            <div class="organizer-image">
              <img :src="organizer.image" :alt="organizer.name">
            </div>
            <div class="organizer-content">
              <h3 class="organizer-name">{{ organizer.name }}</h3>
              <div class="organizer-role">{{ organizer.role }}</div>
              <!-- <p class="organizer-bio">{{ organizer.bio }}</p> -->
              <div class="organizer-social">
                <!-- <a v-if="organizer.socialLinks.twitter" :href="organizer.socialLinks.twitter" target="_blank" class="social-link" :title="t('common.social.twitter')">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                </a> -->
                <a v-if="organizer.socialLinks.linkedin" :href="organizer.socialLinks.linkedin" target="_blank" class="social-link" :title="t('common.social.linkedin')">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a v-if="organizer.socialLinks.github" :href="organizer.socialLinks.github" target="_blank" class="social-link" :title="t('common.social.github')">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Join Us Section -->
      <section class="section join-team-section">
        <div class="join-team-content">
          <div class="join-team-text">
            <h2>{{ t('organizers.joinTeam.title') }}</h2>
            <p>{{ t('organizers.joinTeam.description') }}</p>
            <h3>{{ t('organizers.joinTeam.lookingFor') }}</h3>
            <ul class="join-roles">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <span><b>{{ t('organizers.joinTeam.roles.writer') }}</b></span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <span><b>{{ t('organizers.joinTeam.roles.instructor') }}</b></span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <span><b>{{ t('organizers.joinTeam.roles.planner') }}</b></span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <span><b>{{ t('organizers.joinTeam.roles.manager') }}</b></span>
              </li>
            </ul>
            <a href="#" class="btn btn-primary">{{ t('organizers.joinTeam.button') }}</a>
          </div>
          <div class="join-team-image">
            <img :src="joinImg" alt="Join the VueVerse Team" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.organizers-intro-text {
  max-width: 800px;
  margin: 0 auto 2rem;
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.7;
  color: #6c757d;
}

.organizers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2.5rem;
  margin-top: 1rem;
}

.organizer-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
}

.organizer-image {
  height: 320px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
}

.organizer-content {
  padding: 1.5rem;
}

.organizer-name {
  font-size: 1.3rem;
  font-weight: 700;
  color: #35495e;
  margin-bottom: 0.5rem;
}

.organizer-role {
  font-size: 0.95rem;
  color: #42b883;
  font-weight: 600;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #f1f1f1;
}

.organizer-bio {
  color: #6c757d;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.organizer-social {
  display: flex;
  gap: 1rem;
  
  .social-link {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #f8f9fa;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: #42b883;
      color: white;
      transform: translateY(-3px);
    }
  }
}

.join-team-section {
  margin-top: 1rem;
}

.join-team-content {
  display: flex;
  background-color: #f8f9fa;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
}

.join-team-text {
  flex: 1;
  padding: 3rem;
  
  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #35495e;
    margin-bottom: 1.5rem;
  }
  
  p {
    color: #6c757d;
    margin-bottom: 1.5rem;
    font-size: 1.05rem;
    line-height: 1.7;
  }
  
  h3 {
    font-size: 1.3rem;
    font-weight: 600;
    color: #35495e;
    margin-bottom: 1rem;
  }
  
  .btn {
    margin-top: 1.5rem;
    padding: 0.75rem 2rem;
    font-weight: 600;
  }
}

.join-roles {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  
  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
    color: #495057;
    font-size: 1.05rem;
    
    svg {
      color: #42b883;
      flex-shrink: 0;
    }
  }
}

.join-team-image {
  flex: 1;
  max-height: 600px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 992px) {
    img {
      max-height: 400px;
    }
  }
}
</style>