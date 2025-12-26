<template>
 <div>
    <div class="page-header">
      <div class="container">
        <h1>Blogs & Articles</h1>
      </div>
    </div>
  <div class="articles-container">

    <div class="articles-list">
      <div
        v-for="article in ArticleStore.articles"
        :key="article.id"
        class="article-card"
      >
        <h2 class="article-title">{{ article.title }}</h2>

        <div class="article-footer">
          <div class="author-info">
            <span class="author-name">{{ article.Author }}</span>

            <a :href="article.linkedIn" target="_blank" class="linkedin-icon">
              <svg
                class="linkedin-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 
                     2.239 5 5 5h14c2.761 0 5-2.239 
                     5-5v-14c0-2.761-2.239-5-5-5zm-11 
                     19h-3v-10h3v10zm-1.5-11.5c-.966 
                     0-1.75-.784-1.75-1.75s.784-1.75 
                     1.75-1.75 1.75.784 1.75 
                     1.75-.784 1.75-1.75 1.75zm13.5 
                     11.5h-3v-5.5c0-1.103-.897-2-2-2s-2 
                     .897-2 2v5.5h-3v-10h3v1.528c.74-1.106 
                     2.084-1.528 3.5-1.528 2.485 0 4.5 
                     2.015 4.5 4.5v5.5z"
                />
              </svg>
            </a>
          </div>

          <a
            :href="article.url"
            target="_blank"
            class="read-more-btn"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import { useArticlesStore } from '../stores/articles'
const ArticleStore = useArticlesStore()
</script>

<style scoped>
.articles-container {
  display: flex;
  justify-content: center;
  padding-top: 12px;
}

.articles-heading {
  font-size: 1.875rem;
  font-family: sans-serif;
}

.articles-list {
  width: 100%;
  padding-left: 32px;
  padding-bottom: 32px;
  padding-right: 32px;
  padding-top: 10px;
}

.article-card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  margin-bottom: 28px;
  position: relative;
}

.article-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
}

.article-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.author-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.author-name {
  color: #374151;
  font-weight: bold;
}

.linkedin-icon {
  text-decoration: none;
}

.linkedin-svg {
  width: 16px;
  height: 16px;
  fill: #2563eb;
}

.read-more-btn {
  background: #42b883 !important;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.3s ease;
}

.read-more-btn:hover {
  background: #4b2f75;
}
</style>
