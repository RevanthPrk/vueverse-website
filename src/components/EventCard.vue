<script setup lang="ts">
import { computed } from 'vue'
// import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

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
// const { t } = useI18n()
const router = useRouter()

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

// Handle view details button
const viewEventDetails = () => {
  router.push({
    name: 'event-details',
    params: { id: props.event.id }
  })
}

// Handle register button
const registerForEvent = () => {
  console.log('Register for event:', props.event.id)
  // Add your registration logic here
}
</script>

<template>
  <div class="event-card">
    <!-- Event Image -->
    <div class="event-image-container">
      <img 
        :src="props.event.image" 
        :alt="props.event.title"
        class="event-image"
      />
      <div class="image-overlay"></div>
    </div>

    <!-- Card Content -->
    <div class="event-content">
      <!-- Event Date & Location -->
      <div class="event-meta">
        <div class="meta-item date-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          <span class="date-text">{{ formattedDate }}</span>
        </div>
        <div class="meta-item location-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span class="location-text">{{ props.event.location }}</span>
        </div>
      </div>

      <!-- Event Title -->
      <h3 class="event-title">{{ props.event.title }}</h3>

      <!-- Event Description -->
      <p class="event-description">{{ props.event.description }}</p>

      <!-- Action Buttons -->
      <div class="button-group">
        <button 
          class="btn btn-primary"
          @click="viewEventDetails"
        >
          View Details
        </button>
        <button 
          class="btn btn-secondary"
          @click="registerForEvent"
        >
          Register
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// Theme Colors
$primary-color: #42b883;
$secondary-color: #35495e;
$neutral-100: #f8f9fa;
$neutral-200: #e9ecef;
$neutral-600: #6c757d;
$neutral-700: #495057;
$neutral-900: #212529;
$shadow-light: rgba(0, 0, 0, 0.05);
$shadow-medium: rgba(0, 0, 0, 0.1);
$shadow-hover: rgba(0, 0, 0, 0.15);

.event-card {
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px $shadow-light;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 32px $shadow-hover;
    z-index: 2;

    .event-image {
      transform: scale(1.05);
    }

    .btn-primary {
      background-color: darken($primary-color, 8%);
      box-shadow: 0 4px 12px rgba($primary-color, 0.3);
    }

    .btn-secondary {
      color: $primary-color;
      border-color: $primary-color;
    }
  }
}

// Image Container
.event-image-container {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: linear-gradient(135deg, $neutral-200 0%, $neutral-100 100%);
}

.event-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba($secondary-color, 0.15) 0%, rgba($primary-color, 0.1) 100%);
  pointer-events: none;
}

// Content Section
.event-content {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1.5rem;
  position: relative;
  z-index: 1;
}

// Meta Information (Date & Location)
.event-meta {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid $neutral-200;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: $neutral-600;

  svg {
    color: $primary-color;
    flex-shrink: 0;
  }
}

.date-text,
.location-text {
  line-height: 1.4;
  font-weight: 500;
}

// Title
.event-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: $secondary-color;
  margin: 0.75rem 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

// Description
.event-description {
  font-size: 0.95rem;
  color: $neutral-700;
  line-height: 1.6;
  margin: 0.5rem 0 1.25rem 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex-grow: 1;
}

// Button Group
.button-group {
  display: flex;
  gap: 0.75rem;
  margin-top: auto;
}

// Buttons
.btn {
  flex: 1;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: capitalize;
  outline: none;
  position: relative;
  overflow: hidden;

  &:active {
    transform: scale(0.98);
  }

  &:focus-visible {
    outline: 2px solid $primary-color;
    outline-offset: 2px;
  }
}

.btn-primary {
  background: linear-gradient(135deg, $primary-color 0%, darken($primary-color, 5%) 100%);
  color: #ffffff;
  border: none;
  box-shadow: 0 2px 8px rgba($primary-color, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 0 4px 12px rgba($primary-color, 0.3);
  }
}

.btn-secondary {
  background-color: transparent;
  color: $secondary-color;
  border: 2px solid $secondary-color;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: rgba($secondary-color, 0.05);
    border-color: $primary-color;
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