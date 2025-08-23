<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

interface Partner {
  id: number
  name: string
  logo: string
  description: string
  type: string
  website: string
}

// Partners data
const partners: Partner[] = [
  {
    id: 1,
    name: 'Ariqt International',
    logo: 'https://linktr.ee/og/image/AriqtInternational.jpg',
    description: t('partners.descriptions.thub'),
    type: 'Software Organization',
    website: 'https://example.com'
  },
  {
    id: 2,
    name: 'OneEntry Headless CMS Portal',
    logo: 'https://media.licdn.com/dms/image/v2/D4E22AQHezAm9YpnOkA/feedshare-shrink_800/B4EZYBM4VfGgAg-/0/1743776877681?e=1758758400&v=beta&t=Bvp80rh6BnRg1V8dqX0mr7P753FocQucpNEcATbzcFY',
    description: t('partners.descriptions.techvista'),
    type: 'Software Organization',
    website: 'https://example.com'
  },
  {
    id: 3,
    name: 'JSLovers',
    logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQHYNRjBKSqn-Q/company-logo_200_200/company-logo_200_200/0/1718639979394?e=1758758400&v=beta&t=CLKcijZzN-abu7wx_oCDJgH1j0yHoOc-Wz5-eSxOFXc',
    description: t('partners.descriptions.thub'),
    type: 'Community',
    website: 'https://example.com'
  },
  {
    id: 4,
    name: 'ChennaiReact',
    logo: 'https://media.licdn.com/dms/image/v2/D560BAQGyrX_NTRK3tA/company-logo_200_200/company-logo_200_200/0/1723487993653/chennaireact_logo?e=1758758400&v=beta&t=J0DHCLGYrNnEhUSR_i5jtktcO9yFi7BdEfotwfd_Cu8',
    description: t('partners.descriptions.techvista'),
    type: 'Community',
    website: 'https://example.com'
  },
  {
    id: 5,
    name: 'D3 - Community',
    logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQFjiEoqun9lSg/company-logo_200_200/B4DZY9I1YUH4AM-/0/1744782448763/d3_community_logo?e=1758758400&v=beta&t=BxBrumg1e5sljCayeUmPWFtd8DoVJSZXXIvRNCq27Rg',
    description: t('partners.descriptions.techvista'),
    type: 'Community',
    website: 'https://example.com'
  },
  {
    id: 6,
    name: 'Code on JVM',
    logo: 'https://media.licdn.com/dms/image/v2/D560BAQFeo13AYITciA/company-logo_200_200/company-logo_200_200/0/1734769360538/codeonjvmchennai_logo?e=1758758400&v=beta&t=Oo-TGAiA026Ow3LeQe_ZL5X4cKmZcS38w62_6q91KtA',
    description: t('partners.descriptions.techvista'),
    type: 'Community',
    website: 'https://example.com'
  },
]

// Group partners by type
const silverPartners = partners.filter(partner => partner.type === 'Software Organization')
const communityPartners = partners.filter(partner => partner.type === 'Community')
</script>

<template>
  <div class="partners-page">
    <!-- Page Header -->
    <div class="page-header">
      <div class="container">
        <h1>{{ t('partners.title') }}</h1>
      </div>
    </div>
    
    <div class="container">
      <!-- Partners Intro -->
      <section class="section partners-intro">
        <h2 class="section-title">{{ t('partners.intro') }}</h2>
        <p class="partners-intro-text">
          {{ t('partners.description') }}
        </p>
      </section>
      
      <!-- Silver Partners -->
      <section class="section">
        <h2 class="partner-tier-title">
          <span class="tier-badge silver">Software Organizations</span> {{ t('partners.title') }}
        </h2>
        <div class="partners-grid">
          <div class="partner-card" v-for="partner in silverPartners" :key="partner.id">
            <div class="partner-logo">
              <img :src="partner.logo" :alt="partner.name">
            </div>
            <div class="partner-content">
              <h3 class="partner-name">{{ partner.name }}</h3>
              <!-- <p class="partner-description">{{ partner.description }}</p> -->
              <a :href="partner.website" target="_blank" class="partner-website">{{ t('common.visitWebsite') }}</a>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Community Partners -->
      <section class="section">
        <h2 class="partner-tier-title">
          <span class="tier-badge community">{{ t('partners.tiers.community') }}</span> {{ t('partners.title') }}
        </h2>
        <div class="partners-grid">
          <div class="partner-card" v-for="partner in communityPartners" :key="partner.id">
            <div class="partner-logo">
              <img :src="partner.logo" :alt="partner.name">
            </div>
            <div class="partner-content">
              <h3 class="partner-name">{{ partner.name }}</h3>
              <!-- <p class="partner-description">{{ partner.description }}</p> -->
              <a :href="partner.website" target="_blank" class="partner-website">{{ t('common.visitWebsite') }}</a>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Become a Partner Section -->
      <section class="section become-partner-section">
        <div class="become-partner-content">
          <div class="become-partner-text">
            <h2>{{ t('partners.becomePartner.title') }}</h2>
            <p>{{ t('partners.becomePartner.description') }}</p>
            <h3>{{ t('partners.becomePartner.benefits.title') }}</h3>
            <ul class="benefits-list">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span>{{ t('partners.becomePartner.benefits.items.visibility') }}</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span>{{ t('partners.becomePartner.benefits.items.connect') }}</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span>{{ t('partners.becomePartner.benefits.items.speaking') }}</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span>{{ t('partners.becomePartner.benefits.items.showcase') }}</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span>{{ t('partners.becomePartner.benefits.items.support') }}</span>
              </li>
            </ul>
            <a href="#" class="btn btn-primary partner-website">{{ t('partners.becomePartner.button') }}</a>
          </div>
          <div class="become-partner-image">
            <img src="../assets/images/collaborate.png" alt="Become a VueVerse Partner" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.partners-intro-text {
  max-width: 800px;
  margin: 0 auto 2rem;
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.7;
  color: #6c757d;
}

.partner-tier-title {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.75rem;
  color: #35495e;
  margin-bottom: 2rem;
  
  .tier-badge {
    font-size: 0.9rem;
    padding: 0.3rem 1rem;
    border-radius: 50px;
    color: white;
    font-weight: 600;
    
    &.platinum {
      background: linear-gradient(135deg, #bdc3c7, #8e9eab);
    }
    
    &.gold {
      background: linear-gradient(135deg, #f1c40f, #f39c12);
    }
    
    &.silver {
       background: linear-gradient(135deg, #f1c40f, #f39c12);
    }
    
    &.community {
      background: linear-gradient(135deg, #42b883, #35495e);
    }
  }
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2.5rem;
  margin-bottom: 4rem;
}

.partner-card {
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

.partner-logo {
  height: 200px;
  overflow: hidden;
  background-color: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  
  // padding: 2rem;
  
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
}

.partner-content {
  padding: 1.5rem;
}

.partner-name {
  font-size: 1.3rem;
  font-weight: 700;
  color: #35495e;
  margin-bottom: 1rem;
}

.partner-description {
  color: #6c757d;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
}

.partner-website {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #42b883;
  color: white;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    // background-color: #42b883;
    color: white;
  }
}

.become-partner-section {
  margin-top: 0rem;
}

.become-partner-content {
  display: flex;
  background-color: #f8f9fa;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
}

.become-partner-text {
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
    margin-top: 1rem;
    padding: 0.75rem 2rem;
    font-weight: 600;
  }
}

.benefits-list {
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

.become-partner-image {
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