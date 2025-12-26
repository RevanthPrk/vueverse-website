<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

interface Video {
  id: string
  title: string
  description: string
  thumbnail: string
  date: string
  duration: string
  video: string
}

// Videos data (YouTube video IDs and custom data)
const videos: Video[] = [
  {
    id: 'XqZsoesa55w',  // placeholder ID
    title: 'Vue.js 3 Tutorial - For Beginners',
    description: 'In this Vue 3 tutorial series for beginners we\'ll learn Vue.js (using version 3 - the latest major version) from the ground up & use it to make a couple of nice web projects - A Reaction timer & the beginning of a small, simple blog.',
    thumbnail: 'https://i.ytimg.com/vi/YrxBCBibVo0/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLD9WLQm1NAoLvKJK3YiLFrmRl4qPw',
    date: '2025-06-15',
    duration: '45:21',
    video: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9hp28dYyYBy3xoOdoeNw-hD'
  },
  {
    id: 'dQw4w9WgXcQ',  // placeholder ID
    title: 'Pinia Crash Course',
    description: 'In this tutorial, you\'ll learn exactly learn what Pinia is (a state management solution for Vue) and how we\'d typically use it in a Vue application with a practical example.',
    thumbnail: 'https://i.ytimg.com/vi/u0B9dysw29A/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCLuZ5SedYOGiwWtokMJyFP7XkWYw',
    date: '2025-05-28',
    duration: '32:15',
    video: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9hp28dYyYBy3xoOdoeNw-hD'
  },
  {
    id: 'oHg5SJYRHA0',  // placeholder ID
    title: 'Vite & The future of JavaScript tooling',
    description: 'At VoidZero, we are working on building the foundation for a unified toolchain for JavaScript. We have reworked everything inside Vite from the ground up, now running on a Rust-powered toolchain containing OXC and Rolldown.',
    thumbnail: 'https://i3.ytimg.com/vi/cXiy8jtgfmM/maxresdefault.jpg',
    date: '2025-04-10',
    duration: '38:42',
    video: 'https://www.youtube.com/watch?v=cXiy8jtgfmM'
  },
  {
    id: 'oHg5SJYRHh0',  // placeholder ID
    title: 'Void0: The Future of JavaScript Ecosystem',
    description: 'Next-generation of JavaScript toolchain, Achieving a Unified, High Performance, Composable, Runtime Agnostic with Vite \nUsing Rolldown, OXC and completely Rust based Bundler and Compiler.',
    thumbnail: '../src/assets/images/talk.png',
    date: '2025-09-27',
    duration: '30:42',
    video: 'https://www.youtube.com/watch?v=JkbSpVTVOHo'
  },
  {
    id: 'LLFys7v-l4c',  // placeholder ID
    title: 'State of Vite and Vue 2025 by Creator Evan You',
    description: 'What is the State of Vue in 2025?Hear about Alien Signals, Devtools v7, Vapor Mode, Rolldown Vite, Vue Plus.',
    thumbnail: '../src/assets/images/vite-thumbnail.jpg',
    date: '2025-03-22',
    duration: '36:05',
    video: 'https://www.youtube.com/watch?v=x7Jsmt_o9ek'
  },
   {
    id: 'LLFys7v-l3c',  // placeholder ID
    title: 'Evan You | Vite Beyond a Build Tool | ViteConf 2025',
    description: 'Evan You unveils Vite+, a unified toolchain built on Vite, Vitest, Rollup, and Ox. This ViteConf 2025 talk demonstrates how Vite is evolving beyond a simple build tool, showcasing significant performance improvements. A live coding demo highlights Vite+\'s powerful features, including a new caching system\'s date,',
    thumbnail: 'https://i3.ytimg.com/vi/gOffFaYUxms/maxresdefault.jpg',
    date: '2025-10-13',
    duration: '41:05',
    video: 'https://www.youtube.com/watch?v=gOffFaYUxms&t=1s'
  },
]

// Format date for display
// const formatDate = (dateString: string) => {
//   const date = new Date(dateString)
//   return new Intl.DateTimeFormat('en-US', {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric'
//   }).format(date)
// }
</script>

<template>
  <div class="videos-page">
    <!-- Page Header -->
    <div class="page-header">
      <div class="container">
        <h1>{{ t('videos.title') }}</h1>
      </div>
    </div>
    
    <div class="container">
      <!-- Videos Intro -->
      <section class="section videos-intro">
        <h2 class="section-title">{{ t('videos.intro') }}</h2>
        <p class="videos-intro-text">
          {{ t('videos.description') }}
        </p>
      </section>
      
      <!-- Featured Video -->
      <section class="section featured-video-section">
        <h2 class="section-title">{{ t('videos.featured') }}</h2>
        <div class="featured-video">
          <div class="video-container">
            <img :src="videos[0].thumbnail" alt="Featured Video Thumbnail" class="video-placeholder" />
            <div class="play-button">
              <a :href="videos[0].video" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg></a>
            </div>
          </div>
          <div class="featured-video-info">
            <h3>{{ videos[0].title }}</h3>
            <!-- <p class="video-metadata">
              <span class="video-date">{{ formatDate(videos[0].date) }}</span>
              <span class="video-duration">{{ videos[0].duration }}</span>
            </p> -->
            <p class="video-description">{{ videos[0].description }}</p>
            <a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1" target="_blank" class="btn btn-primary">
              {{ t('videos.watchOnYoutube') }}
            </a>
          </div>
        </div>
      </section>
      
      <!-- Video Gallery -->
      <section class="section video-gallery-section">
        <h2 class="section-title">{{ t('videos.allVideos') }}</h2>
        <div class="video-grid">
          <div class="video-card" v-for="video in videos.slice(1)" :key="video.id">
            <div class="video-thumbnail">
              <img :src="video.thumbnail" :alt="video.title">
              <div class="play-overlay">
                <div class="play-icon">
                  <a :href="video.video" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg></a>
                </div>
                <!-- <span class="duration">{{ video.duration }}</span> -->
              </div>
            </div>
            <div class="video-info">
              <h3 class="video-title">{{ video.title }}</h3>
              <!-- <p class="video-date">{{ formatDate(video.date) }}</p> -->
              <p class="video-description">{{ video.description }}</p>
              <a :href="video.video" target="_blank" class="watch-link">
                {{ t('videos.watchOnYoutube') }}
              </a>
            </div>
          </div>
        </div>
        <div class="text-center mt-4">
          <a href="https://www.youtube.com/@VueVerse-hyderabad" target="_blank" class="btn btn-primary visit">
            {{ t('videos.visitChannel') }}
          </a>
        </div>
      </section>
      
      <!-- Subscribe to Channel -->
      <section class="section subscribe-section">
        <div class="subscribe-content">
          <h2>{{ t('videos.subscribe.title') }}</h2>
          <p>{{ t('videos.subscribe.description') }}</p>
          <a href="https://www.youtube.com/@VueVerse-hyderabad" target="_blank" class="btn-subscribe">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            {{ t('videos.subscribe.button') }}
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.videos-intro-text {
  max-width: 800px;
  margin: 0 auto 2rem;
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.7;
  color: #6c757d;
}

.featured-video {
  display: flex;
  gap: 3rem;
  margin-top: 2rem;
  
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 2rem;
  }
}

.video-container {
  flex: 3;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  
  &:hover {
    .play-button {
      transform: scale(1.1);
      background-color: rgba(66, 184, 131, 0.9);
    }
    
    .video-placeholder {
      transform: scale(1.05);
    }
  }
}

.video-placeholder {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background-color: rgba(66, 184, 131, 0.8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  svg {
    transform: translateX(3px);
  }
}

.visit {
  background-color: #42b883;
  color: white;
}

.featured-video-info {
  flex: 2;
  
  h3 {
    font-size: 1.8rem;
    font-weight: 700;
    color: #35495e;
    margin-bottom: 1rem;
    line-height: 1.3;
  }
  
  .video-metadata {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
    color: #6c757d;
    font-size: 0.95rem;
    
    .video-date, .video-duration {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      
      &:before {
        content: '';
        display: inline-block;
        width: 5px;
        height: 5px;
        background-color: #42b883;
        border-radius: 50%;
      }
    }
  }
  
  .video-description {
    color: #6c757d;
    line-height: 1.7;
    margin-bottom: 2rem;
  }
  
  .btn {
    padding: 0.75rem 1.5rem;
    font-weight: 600;
  }
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2.5rem;
  margin-top: 2rem;
}

.video-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    
    .play-overlay {
      opacity: 1;
      background-color: rgba(53, 73, 94, 0.7);
    }
    
    .video-thumbnail img {
      transform: scale(1.05);
    }
  }
}

.video-thumbnail {
  position: relative;
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
}

.play-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(53, 73, 94, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
}

.play-icon {
  background-color: rgba(66, 184, 131, 0.9);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    transform: translateX(3px);
  }
}

.duration {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
}

.video-info {
  padding: 1.5rem;
}

.video-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #35495e;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.video-date {
  color: #6c757d;
  font-size: 0.85rem;
  margin-bottom: 1rem;
}

.video-description {
  color: #6c757d;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  
  // Limit to 2 lines of text
  display: -webkit-box;
  -webkit-line-clamp: 2;
  // -webkit-box-orient: vertical;
  overflow: hidden;
}

.watch-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #42b883;
  font-weight: 600;
  font-size: 0.95rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: darken(#42b883, 10%);
  }
  
  &:after {
    content: '→';
    transition: transform 0.3s ease;
  }
  
  &:hover:after {
    transform: translateX(3px);
  }
}

.subscribe-section {
  margin-top: 4rem;
}

.subscribe-content {
  background-color: #35495e;
  border-radius: 8px;
  padding: 3rem;
  text-align: center;
  color: white;
  
  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
  
  p {
    max-width: 600px;
    margin: 0 auto 2rem;
    font-size: 1.1rem;
    line-height: 1.7;
    opacity: 0.9;
  }
  
  .btn-subscribe {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    background-color: #ff0000;
    color: white;
    padding: 0.75rem 2rem;
    border-radius: 4px;
    font-weight: 600;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: darken(#ff0000, 10%);
      transform: translateY(-3px);
    }
  }
}
</style>