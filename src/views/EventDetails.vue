<template>
  <div class="event-details">
    <div class="page-header">
      <div class="container">
        <h1>Event Details</h1>
      </div>
    </div>

    <div class="container">
        <section v-if="selectedEvent" class="event-cta-section">
            <div class="event-cta-content">
                <div class="event-cta-text">
                    <h2>{{ selectedEvent?.title }}</h2>
                    <p>{{ selectedEvent?.description }}</p>
                </div>
                <div class="event-cta-image">
                    <img :src="selectedEvent?.image" alt="VueVerse Event" />
                </div>
            </div>
            <Slider :images="selectedEvent?.images || []" v-if="selectedEvent?.images.length" />
            <div v-if="selectedEvent?.speakers.length" style="padding: 16px; padding-top: 24px;">
                <h2 class="section-title">Speakers</h2>
                <div class="organizers-grid">
                    <div class="organizer-card" v-for="speaker in selectedEvent?.speakers" :key="speaker.id">
                        <div class="organizer-image">
                        <img :src="speaker.image" :alt="speaker.name">
                        </div>
                        <div class="organizer-content">
                        <h3 class="organizer-name">{{ speaker.name }}</h3>
                        <h5 class="organizer-title">{{ speaker.title }}</h5>
                        <div class="organizer-social">
                            <a v-if="speaker.social" :href="speaker.social" target="_blank" class="social-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="event-cta-section" v-else>
            <div class="event-cta-content">
                <h2 class="event-cta-text">No Events Found</h2>
            </div>
        </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import Slider from './Slider.vue';
// Import local images so Vite will bundle them for production
import group1 from '../assets/images/group1.jpg'
import firstImg from '../assets/images/1st.jpg'
import firstImage from '../assets/images/1stimage.jpg'
import firstMeetup from '../assets/images/1stmeetup.jpg'
import speakers1Img from '../assets/images/speakers1.jpg'
import ariqtSponsor from '../assets/images/ariqt sponsor.jpg'
import ariqt2 from '../assets/images/ariqt2.jpg'
import thub1 from '../assets/images/thub1.jpg'
import collegeFirst from '../assets/images/college 1st.jpg'
import friendFirst from '../assets/images/friend1st.jpg'

import group2 from '../assets/images/group2.jpg'
import secondImg from '../assets/images/2nd.jpg'
import speakers2Img from '../assets/images/speakers2.jpg'
import oneEntry from '../assets/images/oneentry.jpg'
import collaborators2Img from '../assets/images/collaborators2.jpg'
import stickersImg from '../assets/images/stickers.jpg'

import kondiImg from '../assets/images/kondi.jpg'
import sumanth2Img from '../assets/images/sumanth2.jpeg'
import kiranImg from '../assets/images/kiran.jpg'
import jyothiImg from '../assets/images/jyothi.jpg'
import aravindImg from '../assets/images/aravind.jpg'
import jagadeeshImg from '../assets/images/jagadeesh.jpg'
import quantanaImg from '../assets/images/quantana.jpg'
import udhayaImg from '../assets/images/udhaya.jpeg'

import keshavImg from '../assets/images/keshav.jpg'
import keshavRajImg from '../assets/images/keshavraj.jpg'
import abhilashImg from '../assets/images/abhilash.jpeg'

import meet3 from '../assets/images/3meet.jpeg'
import meet31 from '../assets/images/3meet1.jpeg'
import meet32 from '../assets/images/3meet2.jpeg'
import meet33 from '../assets/images/3meet3.jpeg'
import meet34 from '../assets/images/3meet4.jpeg'
import meet35 from '../assets/images/3meet5.jpeg'
import meet36 from '../assets/images/3meet6.jpeg'

const route = useRoute()
// const router = useRouter()
type Event = {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  images: string[];
  speakers: Array<{
    id: number;
    name: string;
    title: string;
    description: string;
    image: string;
    social: string;
  }>;
};
const selectedEvent = ref<Event | null>(null)
const events = ref<Event[]>([
  {
    id: 1,
    title: 'VueJS Ecosystem & It\'s Updates',
    date: '2024-11-23',
    location: 'T-Hub Phase 2, Hyderabad',
    description: 'Explore the ever-growing VueJS ecosystem. Stay updated with the latest tools, features, and innovations.',
    image: group1,
    images: [
      firstImg,
      firstImage,
      firstMeetup,
      speakers1Img,
      ariqtSponsor,
      ariqt2,
      thub1,
      collegeFirst,
      friendFirst,
    ],
    speakers: [
        {
            id: 1,
            name: 'Kondi Venkatesh',
            title: 'Why Every Developer needs Vitest',
            description: 'Expert in Vue.js and its ecosystem.',
            image: kondiImg,
            social: 'https://www.linkedin.com/in/venkatesh-kondi-50890322b/'
        },
        {
            id: 2,
            name: 'Sumanth Thallapelly',
            title: 'Introduction to Storybook',
            description: 'Specializes in modern JavaScript frameworks.',
            image: sumanth2Img,
            social: 'https://www.linkedin.com/in/sumanth469/'
        },
        {
            id: 3,
            name: 'Kiran Kumar Challagiri',
            title: 'Mastering Vue JS Foundations',
            description: 'Passionate about creating intuitive user experiences.',
            image: kiranImg,
            social: 'https://www.linkedin.com/in/kirankumar3117/'
        },
        {
            id: 4,
            name: 'Hithesh SVSK',
            title: 'VueVolution - Migrate from Vue2 to Vue3',
            description: 'Skilled in building robust server-side applications.',
            image: speakers1Img,
            social: 'https://www.linkedin.com/in/sunkara-hithesh-naidu-26826717b/'
        },
        {
            id: 5,
            name: 'Revanth Kumar Patha',
            title: 'Void0 - The future of Javascript toolchain',
            description: 'Expert in CI/CD and cloud infrastructure.',
            image: 'https://avatars.githubusercontent.com/u/54081648?v=4',
            social: 'https://www.linkedin.com/in/revanth-kumar-patha-9246841a0/'
        }
    ]
  },
  {
    id: 2,
    title: 'Frontend Fusion',
    date: '2025-05-17',
    location: 'T-Hub Phase 2, Hyderabad',
    description: 'Frontend Fusion brought together developers to explore the latest trends, tools, and practices in modern frontend development.',
    image: group2,
    images: [
      secondImg,
      speakers2Img,
      oneEntry,
      collaborators2Img,
      stickersImg,
      thub1,
      group2,
    ],
    speakers: [
        {
            id: 1,
            name: 'Jyothi Prakash',
            title: 'Wait... JavaScript Can do it..?',
            description: 'Expert in Vue.js and its ecosystem.',
            image: jyothiImg,
            social: 'https://www.linkedin.com/in/jyothi-prakash-1324a61b3/'
        },
        {
            id: 2,
            name: 'Aravind Kumar J',
            title: 'React Reconciliation: The Hidden Engine Behind Your Components.',
            description: 'Specializes in modern JavaScript frameworks.',
            image: aravindImg,
            social: 'https://www.linkedin.com/in/mjagadeeshwaran/'
        },
        {
            id: 3,
            name: 'Jagadeeshwaran M',
            title: 'Modern Vue JS: Accelerating development with a Headless approach and Jamstack using OneEntry',
            description: 'Passionate about creating intuitive user experiences.',
            image: jagadeeshImg,
            social: 'https://www.linkedin.com/in/mjagadeeshwaran/'
        },
        {
            id: 4,
            name: 'Ramesh Emandi',
            title: 'Modern Frontend Engineering: Tools, Techniques and Best Practices',
            description: 'Skilled in building robust server-side applications.',
            image: quantanaImg,
            social: 'https://www.linkedin.com/in/rameshemandi/'
        },
        {
            id: 5,
            name: 'UdhayaPrakash V',
            title: 'Slashing Cloud Costs in Half: A Real-World Success Story with Vercel',
            description: 'Expert in CI/CD and cloud infrastructure.',
            image: udhayaImg,
            social: 'https://www.linkedin.com/in/udhayaprakasha-v-a71975a0/'
        }
    ]
  },
  {
    id: 3,
    title: 'VueVerse Connect 2026',
    date: '2026-02-07',
    location: 'Draper\'s Startup House Hyderabad',
    description: 'Interesting features and releases of Frontend Development.',
    image: meet31,
    images: [
      meet31,
      meet32,
      meet33,
      meet34,
      meet35,
      meet36,
      meet3,
    ],
    speakers: [
        {
            id: 1,
            name: 'Kiran Kumar Challagiri',
            title: 'Real-World Product Building Case Study',
            description: 'clear, practical understanding of the end-to-end product development process, using real scenarios and decisions that happen in actual projects',
            image: kiranImg,
            social: 'https://www.linkedin.com/in/kirankumar3117/'
        },
        {
            id: 2,
            name: 'Keshav Mohta',
            title: 'GitHub Actions: Real Use Cases and best practices',
            description: 'It\'s about GitHub Actions and how can we learn and apply in our repo.',
            image: keshavImg,
            social: 'https://www.linkedin.com/in/xkeshav/'
        },
        {
            id: 3,
            name: 'Abhilash D',
            title: 'PayGo.fit and how it was built from just an Idea',
            description: 'Build any product from scratch, idea to launch no need to wait for anything',
            image: abhilashImg,
            social: 'https://www.linkedin.com/in/abhilash-dharavath/'
        },
        {
            id: 4,
            name: 'Keshav Raj',
            title: 'Unknown things about WebComponents',
            description: 'Work with Web Components, and how they can be used to create reusable UI elements that work across different frameworks and libraries.',
            image: keshavRajImg,
            social: 'https://www.linkedin.com/in/k-e-s-h-a-v/'
        },
    ]
  }
])

onMounted(() => {
    const id = Number(route.params.id); // 👈 get route param
    selectedEvent.value = events.value.find(e => e.id === id) || null;
    console.log("Selected event:", selectedEvent.value);
})
</script>

<style lang="scss" scoped>
.page-header {
  background: linear-gradient(135deg, rgba(66, 184, 131, 0.9) 0%, rgba(53, 73, 94, 0.9) 100%),
    url('https://images.pexels.com/photos/1239162/pexels-photo-1239162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') no-repeat center center;
  color: white;
  background-size: cover;
  padding: 6rem 0 2rem;
  margin-bottom: 3rem;
  
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-top: 2rem;
  }
}

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

.organizer-title {
  font-size: 1rem;
  font-weight: 600;
  color: #42b883;
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

</style>