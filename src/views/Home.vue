<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import EventCard from '../components/EventCard.vue'
// Import images so Vite includes them in the build output
import group1 from '../assets/images/group1.jpg'
import group2 from '../assets/images/group2.jpg'
import group3 from '../assets/images/3rd.jpg'

const { t } = useI18n()

// Community stats
const memberCount = ref(540)
const eventsHosted = ref(2)
const hoursOfContent = ref(50)

// Featured events (would typically come from an API/database)
const events = [
  {
    id: 1,
    title: 'VueJS Ecosystem & It\'s Updates',
    date: '2024-11-23',
    location: 'T-Hub Phase 2, Hyderabad',
    description: 'Explore the ever-growing VueJS ecosystem. Stay updated with the latest tools, features, and innovations.',
    image: group1
  },
  {
    id: 2,
    title: 'Frontend Fusion',
    date: '2025-05-17',
    location: 'T-Hub Phase 2, Hyderabad',
    description: 'Frontend Fusion brought together developers to explore the latest trends, tools, and practices in modern frontend development.',
    image: group2
  },
  {
    id: 3,
    title: 'VueVerse Connect 2026',
    date: '2026-02-07',
    location: 'To be announced',
    description: 'Interesting features and new releases of Vue.js it\'s ecosystem & Frontend Development.',
    image: group3
  }
]
</script>

<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">{{ t('home.hero.title') }}</h1>
        <p class="hero-subtitle">
          VueVerse is dedicated to exploring the latest features, releases, and best practices of Vue.js, Vite, Vitest,
          and Nuxt.
        </p>
        <div class="hero-actions">
          <a href="https://www.linkedin.com/company/vueversehyderabad/" target="_blank" class="btn btn-primary">{{ t('home.hero.joinCommunity') }}</a>
          <router-link to="/events" class="btn btn-secondary">{{ t('home.hero.upcomingEvents') }}</router-link>
        </div>
      </div>
      <div class="stats-bar">
        <div class="container">
          <div class="stats-wrapper">
            <div class="stat-item">
              <div class="stat-value">{{ memberCount.toLocaleString() }}+</div>
              <div class="stat-label">{{ t('home.stats.members') }}</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">{{ eventsHosted }}+</div>
              <div class="stat-label">{{ t('home.stats.events') }}</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">{{ hoursOfContent }}+</div>
              <div class="stat-label">{{ t('home.stats.hours') }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About VueVerse Section -->
    <section class="section about-section">
      <div class="container">
        <h2 class="section-title">{{ t('home.about.title') }}</h2>
        <div class="about-content">
          <div class="about-text">
            <!-- <p>{{ t('home.about.description') }}</p> -->
            <p>Welcome to <b>VueVerse</b> - your go-to destination for everything related to Vue 3! Whether you're an
              experienced developer or just getting started, this group is dedicated to exploring the latest features,
              releases, and best practices of Vue.js.
              <ol style="padding-bottom: 10px;">
                <li>1. <b>Dive deep into the new features of Vue 3.</b></li>
                <li>2. <b>Solve real-world problems through collaborative discussion.</b></li>
                <li>3. <b>Share and discover tips, tools, and resources.</b></li>
                <li>4. <b>Stay up-to-date with the latest Vue.js releases and trends.</b></li>
                <li>5. <b>Foster learning through knowledge sharing and hands-on experience.</b></li>
              </ol>

              Join us in growing together, solving challenges, and celebrating the power of Vue 3! 
              Whether you're debugging an issue or crafting your next big project, VueVerse is the place to connect, learn, and succeed
              with Vue.</p>
            <router-link to="/about" class="btn btn-primary mt-3 clickbutton">{{ t('common.readMore') }}</router-link>
          </div>
          <div class="about-image">
            <img
              src="../assets/images/vueverse.png"
              alt="VueVerse Hyderabad Community" />
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Events Section -->
    <section class="section events-section">
      <div class="container">
        <h2 class="section-title">Tech Meetups</h2>
        <div class="events-grid">
          <EventCard v-for="event in events" :key="event.id" :event="event" />
        </div>
        <div class="text-center mt-4">
          <router-link to="/events" class="btn btn-primary viewall">{{ t('common.viewAll') }}</router-link>
        </div>
      </div>
    </section>

    <!-- Why Join Section -->
    <section class="section join-section">
      <div class="container">
        <h2 class="section-title">Why Join VueVerse?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3>Connect with Peers</h3>
            <p>
              Build meaningful relationships with fellow Vue developers, share knowledge, and collaborate on exciting
              projects.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </div>
            <h3>Learn & Grow</h3>
            <p>
              Access exclusive workshops, hands-on tutorials, and in-depth sessions on Vue.js and related technologies.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                </polygon>
              </svg>
            </div>
            <h3>Career Opportunities</h3>
            <p>
              Discover new job opportunities, showcase your skills, and connect with companies actively hiring Vue
              developers.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <h3>Contribute & Mentor</h3>
            <p>
              Share your knowledge, become a mentor, and contribute to open-source Vue projects with community support.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Join the VueVerse?</h2>
          <p>
            Be part of a thriving ecosystem of developers and tech enthusiasts passionate about Vue.js and
            frontend excellence.
          </p>
          <p><b>Vue is our Passion and It's available for all 💚</b></p>
          <a href="https://www.linkedin.com/company/vueversehyderabad/" target="_blank" class="btn btn-primary link">Join VueVerse Today</a>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.hero-section {
  position: relative;
  background: linear-gradient(135deg, rgba(66, 184, 131, 0.9) 0%, rgba(53, 73, 94, 0.9) 100%),
    url('https://images.pexels.com/photos/1239162/pexels-photo-1239162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') no-repeat center center;
  background-size: cover;
  color: white;
  padding: 9rem 0 6rem;
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
     margin-bottom: 1rem;
    }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('https://images.pexels.com/photos/935875/pexels-photo-935875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    background-size: cover;
    background-position: center;
    opacity: 0.1;
    z-index: -1;
  }
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}

.link {
  &:hover {
    color: white !important;
  }
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
}

.hero-subtitle {
  font-size: 1.3rem;
  font-weight: 400;
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 0.75rem;
    max-width: 250px;
    margin: 0 auto;
  }

  .btn {
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
  }

  .btn-primary {
    background-color: white;
    color: #42b883;

    &:hover {
      background-color: white;
      color: #35495e;
    }
  }

  .btn-secondary {
    background-color: transparent;
    border: 2px solid white;
    color: white;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
}

.stats-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  transform: translateY(50%);

  @media (max-width: 768px) {
      display: none;
    }
}

.stats-wrapper {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-around;
  padding: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
}

.stat-item {
  padding: 0 1rem;

  .stat-value {
    font-size: 2rem;
    font-weight: 700;
    color: #42b883;
    line-height: 1;
    margin-bottom: 0.5rem;
  }

  .stat-label {
    color: #6c757d;
    font-size: 0.9rem;
  }
}

.about-section {
  margin-top: 1rem;
}

.about-content {
  display: flex;
  gap: 3rem;
  align-items: center;

  @media (max-width: 992px) {
    flex-direction: column-reverse;
  }
}

.viewall {
  background-color: #42b883;
  color: white;
}

.about-text {
  flex: 1;

  p {
    margin-bottom: 1rem;
    line-height: 1.7;
  }
}

.about-image {
  flex: 1;

  img {
    width: 100%;
    border-radius: 8px;
    object-fit: contain;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }
  }
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.feature-card {
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);

    .feature-icon {
      background-color: #42b883;
      color: white;
    }
  }

  .feature-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f8f9fa;
    color: #42b883;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #35495e;
  }

  p {
    color: #6c757d;
    line-height: 1.6;
  }
}

.cta-section {
  background-color: #35495e;
  color: white;
  padding: 4rem 0;
  margin-top: 4rem;
  text-align: center;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.9;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  .btn {
    padding: 0.75rem 2rem;
    font-size: 1.1rem;
    font-weight: 600;
    background-color: #42b883;
    border: none;

    &:hover {
      background-color: darken(#42b883, 5%);
      transform: translateY(-3px);
    }
  }
}

.clickbutton {
  background-color: #42b883 !important;
  color: white !important;
}
</style>