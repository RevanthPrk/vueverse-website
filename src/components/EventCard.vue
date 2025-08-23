<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

interface EventProps {
  event: {
    id: number
    title: string
    date?: string
    location: string
    description: string
    image: string
  }
}

const props = defineProps<EventProps>()
const { t } = useI18n()

// Format date for display
const formattedDate = computed(() => {
  if(props.event.date) {
const date = new Date(props.event.date)
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
  } else return 'Upcoming event...'
})
</script>

<template>
  <div class="event-card">
    <div class="event-image">
      <img :src="event.image" :alt="event.title">
      <div class="event-date">{{ formattedDate }}</div>
    </div>
    <div class="event-content">
      <h3 class="event-title">{{ event.title }}</h3>
      <div class="event-location">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
        {{ event.location }}
      </div>
      <p class="event-description">{{ event.description }}</p>
      <div class="event-actions">
        <router-link :to="`/events/${event.id}`" class="btn-details">{{ t('events.viewDetails') }}</router-link>
        <a href="https://lu.ma/vueverse?k=c&period=past" class="btn-register">{{ t('events.register') }}</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.event-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    
    .event-image img {
      transform: scale(1.05);
    }
  }
}

.event-image {
  position: relative;
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  .event-date {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #42b883;
    color: white;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    font-weight: 600;
    border-top-left-radius: 8px;
  }
}

.event-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.event-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #35495e;
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.event-location {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6c757d;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  
  svg {
    color: #42b883;
  }
}

.event-description {
  color: #6c757d;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  line-height: 1.6;
  flex: 1;
}

.event-actions {
  display: flex;
  gap: 1rem;
  margin-top: auto;
  
  .btn-details, .btn-register {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    font-weight: 600;
    border-radius: 4px;
    text-align: center;
    transition: all 0.3s ease;
  }
  
  .btn-details {
    flex: 1;
    color: #42b883;
    border: 1px solid #42b883;
    background-color: transparent;
    
    &:hover {
      background-color: rgba(66, 184, 131, 0.1);
    }
  }
  
  .btn-register {
    flex: 1;
    background-color: #42b883;
    color: white;
    border: 1px solid #42b883;
    
    &:hover {
      background-color: darken(#42b883, 5%);
    }
  }
}
</style>