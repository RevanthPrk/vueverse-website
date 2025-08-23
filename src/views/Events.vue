<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import EventCard from '../components/EventCard.vue'

const { t } = useI18n()

// Upcoming events
const events = ref([
  {
    id: 1,
    title: 'VueJS Ecosystem & It\'s Updates',
    date: '2024-11-23',
    location: 'T-Hub Phase 2, Hyderabad',
    description: 'Explore the ever-growing VueJS ecosystem. Stay updated with the latest tools, features, and innovations.',
    image: 'https://media.licdn.com/dms/image/v2/D5622AQEIFJo6SXwIoA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1732643441016?e=1758758400&v=beta&t=sc12WcVfaWTLkaPij5XoZQbRnxR6mCm9wiV1IQnFe2w'
  },
  {
    id: 2,
    title: 'Frontend Fusion',
    date: '2025-05-17',
    location: 'T-Hub Phase 2, Hyderabad',
    description: 'Frontend Fusion brought together developers to explore the latest trends, tools, and practices in modern frontend development.',
    image: 'https://media.licdn.com/dms/image/v2/D5622AQF388OAJ8LF1Q/feedshare-shrink_2048_1536/B56Zb5igXyHUAs-/0/1747943297763?e=1758758400&v=beta&t=A94Wy2IjcoPd4NAgW1jEYRJUU7quy42lzEuWfo2G40Q'
  },
  {
    id: 3,
    title: 'Vue + AI - Exploring the Future',
    date: '',
    location: 'T-Hub Phase 2, Hyderabad',
    description: 'Intersection of Vue.js and Artificial Intelligence. Discover how AI can transform the way we build, optimize, and scale Vue applications.',
    image: 'https://media.licdn.com/dms/image/v2/D561FAQHFnaAWE8zBAA/feedshare-document-images_800/B56ZjA0oOoG0Ao-/1/1755581691983?e=1756944000&v=beta&t=QzRA924pj4n8y_VtA03MRiAB5oRxscXQ0RLJ_7MvzXU'
  }
])

// Past events
const pastEvents = ref([
  {
    id: 4,
    title: 'VueVerse Launch Party',
    date: '2025-01-15',
    location: 'Hyderabad Central Library',
    description: 'The inaugural event for VueVerse Hyderabad with community networking and talks.',
    image: 'https://images.pexels.com/photos/2505056/pexels-photo-2505056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 5,
    title: 'Vue 3 Composition API Workshop',
    date: '2025-02-20',
    location: 'T-Hub Foundation',
    description: 'Hands-on workshop covering the fundamentals of Vue 3\'s Composition API.',
    image: 'https://images.pexels.com/photos/3182755/pexels-photo-3182755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 6,
    title: 'Vue DevTools: Debugging Masters',
    date: '2025-03-12',
    location: 'IIIT Hyderabad',
    description: 'Live demonstration of advanced debugging techniques using Vue DevTools.',
    image: 'https://images.pexels.com/photos/3182801/pexels-photo-3182801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 7,
    title: 'Building Accessible Vue Applications',
    date: '2025-04-05',
    location: 'iLabs Hyderabad',
    description: 'Learn how to create inclusive Vue applications that meet WCAG standards.',
    image: 'https://media.licdn.com/dms/image/v2/D5622AQEIFJo6SXwIoA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1732643441016?e=1758758400&v=beta&t=sc12WcVfaWTLkaPij5XoZQbRnxR6mCm9wiV1IQnFe2w'
  },
  {
    id: 8,
    title: 'Vue Animation Workshop',
    date: '2025-05-18',
    location: 'WeWork Hyderabad',
    description: 'Explore animation techniques in Vue with CSS transitions and JavaScript hooks.',
    image: 'https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 9,
    title: 'Vue Testing Strategies',
    date: '2025-06-22',
    location: 'T-Hub Foundation',
    description: 'Comprehensive overview of testing methodologies for Vue applications.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
])
</script>

<template>
  <div class="events-page">
    <!-- Page Header -->
    <div class="page-header">
      <div class="container">
        <h1>{{ t('events.title') }}</h1>
      </div>
    </div>
    
    <div class="container">
      <!-- Event Registration CTA -->
      <section class="event-cta-section">
        <div class="event-cta-content">
          <div class="event-cta-text">
            <h2>{{ t('events.cta.title') }}</h2>
            <p>Dive into the VueJS ecosystem and discover the latest updates, tools, and best practices that are shaping the future of Vue. Whether you’re a beginner or a pro, this is the perfect place to learn, connect, and grow with the community.</p>
            <a href="https://lu.ma/vueverse?k=c&period=past" target="_blank" class="btn btn-primary">{{ t('events.cta.button') }}</a>
          </div>
          <div class="event-cta-image">
            <img src="../assets/images/image.png" alt="VueVerse Event" />
          </div>
        </div>
      </section>
      
      <!-- Upcoming Events -->
      <section class="section">
        <h2 class="section-title">Events</h2>
        <div v-if="events.length > 0" class="events-grid">
          <EventCard 
            v-for="event in events" 
            :key="event.id" 
            :event="event" 
          />
        </div>
        <div v-else class="no-events">
          <div class="no-events-content">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            <h3>{{ t('events.noUpcoming') }}</h3>
            <p>{{ t('events.subscribe') }}</p>
            <a href="#" class="btn btn-primary">{{ t('events.subscribeButton') }}</a>
          </div>
        </div>
      </section>
      
      <!-- Past Events -->
      <!-- <section class="section">
        <h2 class="section-title">{{ t('events.past') }}</h2>
        <div class="events-grid">
          <EventCard 
            v-for="event in pastEvents" 
            :key="event.id" 
            :event="event" 
          />
        </div>
      </section> -->
      
      <!-- Host an Event -->
      <section class="section host-event-section">
        <div class="host-event-content">
          <div class="host-event-text">
            <h2>{{ t('events.host.title') }}</h2>
            <p>{{ t('events.host.description') }}</p>
            <div class="host-options">
              <a href="#" class="btn btn-primary">{{ t('events.host.speakerButton') }}</a>
              <a href="#" class="btn btn-secondary">{{ t('events.host.venueButton') }}</a>
            </div>
          </div>
          <div class="host-event-image">
            <img src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Host a VueVerse Event" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.event-cta-section {
  margin-bottom: 4rem;
}

.event-cta-content {
  display: flex;
  background-color: #f8f9fa;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
}

.event-cta-text {
  flex: 1;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #35495e;
    margin-bottom: 1.5rem;
  }
  
  p {
    color: #6c757d;
    margin-bottom: 2rem;
    font-size: 1.1rem;
    line-height: 1.7;
  }
  
  .btn {
    align-self: flex-start;
    padding: 0.75rem 2rem;
    font-weight: 600;
  }
}

.event-cta-image {
  flex: 1;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 992px) {
    img {
      max-height: 300px;
    }
  }
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.no-events {
  margin: 4rem 0;
  text-align: center;
}

.no-events-content {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  svg {
    color: #dee2e6;
    margin-bottom: 1.5rem;
  }
  
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #35495e;
    margin-bottom: 1rem;
  }
  
  p {
    color: #6c757d;
    margin-bottom: 1.5rem;
    max-width: 500px;
  }
}

.host-event-section {
  margin-top: 4rem;
}

.host-event-content {
  display: flex;
  background-color: #f8f9fa;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 992px) {
    flex-direction: column-reverse;
  }
}

.host-event-text {
  flex: 1;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #35495e;
    margin-bottom: 1.5rem;
  }
  
  p {
    color: #6c757d;
    margin-bottom: 2rem;
    font-size: 1.1rem;
    line-height: 1.7;
  }
}

.host-options {
  display: flex;
  gap: 1rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 0.75rem;
  }
}

.host-event-image {
  flex: 1;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 992px) {
    img {
      max-height: 300px;
    }
  }
}
</style>