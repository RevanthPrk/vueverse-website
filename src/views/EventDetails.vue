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
    image: 'https://media.licdn.com/dms/image/v2/D5622AQEIFJo6SXwIoA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1732643441016?e=1758758400&v=beta&t=sc12WcVfaWTLkaPij5XoZQbRnxR6mCm9wiV1IQnFe2w',
    images: [
      'https://media.licdn.com/dms/image/v2/D5622AQHGbpQ0lDE60A/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1732533442418?e=1758758400&v=beta&t=smjcZL_Js5NWEIhylV4dBaQUu-MjCtzlu9dT0dRFB1w',
      'https://media.licdn.com/dms/image/v2/D5622AQF6k7ZGb3L4-w/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1732533444285?e=1758758400&v=beta&t=1li7lD6KxdmsAWVkefaTwOo_996eIPzQYoM5gfCbndA',
      'https://media.licdn.com/dms/image/v2/D5622AQHa7mfHpsnOAA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1732644164768?e=1758758400&v=beta&t=ROSN1Ii1DXefN4QfzDycV9ersfTuCaPWLRFZVv2zegQ',
      'https://media.licdn.com/dms/image/v2/D5622AQEQ3EARg96VgA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1732644001631?e=1758758400&v=beta&t=suqb5T18WsO1hOClxh7wJbL5Jb-JWgPcRht53R6-KwI',
      'https://media.licdn.com/dms/image/v2/D5622AQEIFJo6SXwIoA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1732643441016?e=1758758400&v=beta&t=sc12WcVfaWTLkaPij5XoZQbRnxR6mCm9wiV1IQnFe2w',
      'https://media.licdn.com/dms/image/v2/D5622AQE6HXYkaIW-hw/feedshare-shrink_1280/feedshare-shrink_1280/0/1732534633437?e=1758758400&v=beta&t=n4M6iKUkHluAWvCE9Db-wn_5N1WWwacs-qFB4K4sdrQ',
      'https://media.licdn.com/dms/image/v2/D5622AQGExHw3i8qZmA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1732379885955?e=1758758400&v=beta&t=x_9OfYDtmvU2H1spgCtQhaz_8hldB0tr1u-okPIr8Ew',
      'https://media.licdn.com/dms/image/v2/D5622AQGUjyP3Pq_VGQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1732379885861?e=1758758400&v=beta&t=nQef8hgjgzQGCUv6GkvPgseoCknhIR8OBamy9whPVHo',
    ],
    speakers: [
        {
            id: 1,
            name: 'Kondi Venkatesh',
            title: 'Why Every Developer needs Vitest',
            description: 'Expert in Vue.js and its ecosystem.',
            image: 'https://media.licdn.com/dms/image/v2/D5622AQHsGAVdhyVEiQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1732944354620?e=1758758400&v=beta&t=XYC497hSwtewwqAh0S9RSkh3U3xOxiNjnsADQUNxXj4',
            social: 'https://www.linkedin.com/in/venkatesh-kondi-50890322b/'
        },
        {
            id: 2,
            name: 'Sumanth Thallapelly',
            title: 'Introduction to Storybook',
            description: 'Specializes in modern JavaScript frameworks.',
            image: 'https://media.licdn.com/dms/image/v2/D5622AQElUHptlT-8RQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1732616398418?e=1758758400&v=beta&t=VNs4kfRzbdDHyGgH2Yie1TDoKiV9pX8OefvY481eqKA',
            social: 'https://www.linkedin.com/in/sumanth469/'
        },
        {
            id: 3,
            name: 'Kiran Kumar Challagiri',
            title: 'Mastering Vue JS Foundations',
            description: 'Passionate about creating intuitive user experiences.',
            image: 'https://media.licdn.com/dms/image/v2/D5622AQHqzh0Hi71eFg/feedshare-shrink_1280/feedshare-shrink_1280/0/1732643432311?e=1758758400&v=beta&t=MBGdHNe9BRvx342-EAWzK4dx-fu70PHFzxmiaq8FIgU',
            social: 'https://www.linkedin.com/in/kirankumar3117/'
        },
        {
            id: 4,
            name: 'Hithesh SVSK',
            title: 'VueVolution - Migrate from Vue2 to Vue3',
            description: 'Skilled in building robust server-side applications.',
            image: 'https://media.licdn.com/dms/image/v2/D561FAQGMJgwsXsISZw/feedshare-document-images_800/feedshare-document-images_800/1/1730975458517?e=1756944000&v=beta&t=VWud6U0DwRYaNDBF1ZbltPwWG6QF5O_mhlrJZKaMCrI',
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
    image: 'https://media.licdn.com/dms/image/v2/D5622AQF388OAJ8LF1Q/feedshare-shrink_2048_1536/B56Zb5igXyHUAs-/0/1747943297763?e=1758758400&v=beta&t=A94Wy2IjcoPd4NAgW1jEYRJUU7quy42lzEuWfo2G40Q',
    images: [
      'https://media.licdn.com/dms/image/v2/D5622AQGshK1usqY4pQ/feedshare-shrink_2048_1536/B56Zbdb7ETHUAo-/0/1747471807964?e=1758758400&v=beta&t=2_Pi7pfpM2xrUuMG8L97LrrjYQjanLDxYECjKi_p9kA',
      'https://media.licdn.com/dms/image/v2/D5622AQGGpUCgudMVBQ/feedshare-shrink_2048_1536/B56Zb5igXhHUAo-/0/1747943296557?e=1758758400&v=beta&t=v7iEeQpbIQHzim4IVlwNzOIux9E6ydrETjhiHn0K2Y8',
    //   'https://media.licdn.com/dms/image/v2/D5622AQFfZV8nbS5BfQ/feedshare-shrink_1280/B56Zbt1oYlGgAo-/0/1747746983477?e=1758758400&v=beta&t=czRoOMg5DrxyiNkcDC2tpAClP-kQPZK4XIeRBl2arn8',
      'https://media.licdn.com/dms/image/v2/D5622AQHvbu03l6y5Og/feedshare-shrink_2048_1536/B56Zb5igX1H4Ao-/0/1747943296260?e=1758758400&v=beta&t=Tpa21SQv6trTWrHf-kJkkWcvU30eS6_aSlgIAruJ5kE',
      'https://media.licdn.com/dms/image/v2/D5622AQF388OAJ8LF1Q/feedshare-shrink_2048_1536/B56Zb5igXyHUAs-/0/1747943297763?e=1758758400&v=beta&t=A94Wy2IjcoPd4NAgW1jEYRJUU7quy42lzEuWfo2G40Q',
      'https://media.licdn.com/dms/image/v2/D5622AQHsTWXw_VHifg/feedshare-shrink_2048_1536/B56ZbiMfA1HUAo-/0/1747551650435?e=1758758400&v=beta&t=8bSXEylGLcq_9IH26IYFnW0UOolHTO9R2cSYLu_2aHI',
    //   'https://media.licdn.com/dms/image/v2/D5622AQGFSpozOctvXQ/feedshare-shrink_2048_1536/B56ZbdeMvSH4Ao-/0/1747472407164?e=1758758400&v=beta&t=SLilu68mNyuCIVhQR1oZgHwTKuVvCLkq_tlZH2mzEMM',
      'https://media.licdn.com/dms/image/v2/D5622AQEInZF1-GRINQ/feedshare-shrink_2048_1536/B56Zbdb7EaGoAo-/0/1747471808453?e=1758758400&v=beta&t=HC2HxfdoC8KenREKl2wyxtY3HIctpSRPMrsIfr89Xuw',
      'https://media.licdn.com/dms/image/v2/D5622AQHOpfnq2fTh7w/feedshare-shrink_2048_1536/B56Zb.ZFu4HoAo-/0/1748024753458?e=1758758400&v=beta&t=pMN6_cZYPmhPoD1bGo1PyS9Pqs0dy3qAykKWzNIEy_M',
    ],
    speakers: [
        {
            id: 1,
            name: 'Jyothi Prakash',
            title: 'Wait... JavaScript Can do it..?',
            description: 'Expert in Vue.js and its ecosystem.',
            image: 'https://media.licdn.com/dms/image/v2/D5622AQHnn2ym_6AQGQ/feedshare-shrink_2048_1536/B56Zbdk.MjGgAo-/0/1747474181828?e=1758758400&v=beta&t=EVG-BsCH_v8f_xFpBBzFFmPR1GJYlgSxNfJAMwofxnQ',
            social: 'https://www.linkedin.com/in/jyothi-prakash-1324a61b3/'
        },
        {
            id: 2,
            name: 'Aravind Kumar J',
            title: 'React Reconciliation: The Hidden Engine Behind Your Components.',
            description: 'Specializes in modern JavaScript frameworks.',
            image: 'https://media.licdn.com/dms/image/v2/D5622AQGTdjv6d9O7OA/feedshare-shrink_2048_1536/B56Zb5igXvHcAo-/0/1747943297319?e=1758758400&v=beta&t=ysHM4pC434DzldEMUvOVheWGSgQOiaMa-AUueF9hCm0',
            social: 'https://www.linkedin.com/in/mjagadeeshwaran/'
        },
        {
            id: 3,
            name: 'Jagadeeshwaran M',
            title: 'Modern Vue JS: Accelerating development with a Headless approach and Jamstack using OneEntry',
            description: 'Passionate about creating intuitive user experiences.',
            image: 'https://media.licdn.com/dms/image/v2/D5622AQG92vMR3JOa1w/feedshare-shrink_800/B56ZcR1ynGHoAk-/0/1748351010938?e=1758758400&v=beta&t=oA4fmEQDxXcLWrmbSnKLYLPoGaBNFZFNK3mfbWoTCmQ',
            social: 'https://www.linkedin.com/in/mjagadeeshwaran/'
        },
        {
            id: 4,
            name: 'Ramesh Emandi',
            title: 'Modern Frontend Engineering: Tools, Techniques and Best Practices',
            description: 'Skilled in building robust server-side applications.',
            image: 'https://media.licdn.com/dms/image/v2/D5622AQHsTWXw_VHifg/feedshare-shrink_2048_1536/B56ZbiMfA1HUAo-/0/1747551650435?e=1758758400&v=beta&t=8bSXEylGLcq_9IH26IYFnW0UOolHTO9R2cSYLu_2aHI',
            social: 'https://www.linkedin.com/in/rameshemandi/'
        },
        {
            id: 5,
            name: 'UdhayaPrakash V',
            title: 'Slashing Cloud Costs in Half: A Real-World Success Story with Vercel',
            description: 'Expert in CI/CD and cloud infrastructure.',
            image: 'https://media.licdn.com/dms/image/v2/D5622AQHL6lMRHmU_DA/feedshare-shrink_800/B56ZZhKdpmGcAg-/0/1745386860808?e=1758758400&v=beta&t=C6spY-yrXMZBBHzGIlbb7qIZ9VN59hoMf_NXcmb1dgE',
            social: 'https://www.linkedin.com/in/udhayaprakasha-v-a71975a0/'
        }
    ]
  },
  {
    id: 3,
    title: 'Vue + AI - Exploring the Future',
    date: '',
    location: 'T-Hub Phase 2, Hyderabad',
    description: 'Intersection of Vue.js and Artificial Intelligence. Discover how AI can transform the way we build, optimize, and scale Vue applications.',
    image: 'https://media.licdn.com/dms/image/v2/D561FAQHFnaAWE8zBAA/feedshare-document-images_800/B56ZjA0oOoG0Ao-/1/1755581691983?e=1758153600&v=beta&t=VW5kxbiXD8I2U6DwMdynHdbQCUYImLMP_arTF6OTW4g',
    images: [],
    speakers: []
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