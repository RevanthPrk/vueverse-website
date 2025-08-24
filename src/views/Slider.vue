<template>
  <div class="carousel">
    <!-- Images Wrapper -->
    <div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(img, i) in images" :key="i" class="carousel-item">
        <img :src="img" alt="carousel image" />
      </div>
    </div>

    <!-- Left Arrow -->
    <button class="carousel-btn left" @click="prevSlide">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
      </svg>
    </button>

    <!-- Right Arrow -->
    <button class="carousel-btn right" @click="nextSlide">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps<{
  images: string[];
}>();

const currentIndex = ref(0);
let interval: ReturnType<typeof setInterval> | null = null;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length;
};

onMounted(() => {
  interval = setInterval(nextSlide, 3000);
});

onBeforeUnmount(() => {
  if (interval) clearInterval(interval);
});
</script>

<style scoped lang="scss">
.carousel {
  position: relative;
  width: 100%;
  padding-top: 3rem;
//   max-width: 800px;
  margin: auto;
  overflow: hidden;
  border-radius: 10px;

  .carousel-inner {
    display: flex;
    transition: transform 0.5s ease-in-out;
    width: 100%;
  }

//   .carousel-item {
//     min-width: 100%;
//     img {
//       width: 100%;
//       object-fit: cover;
//     //   height: auto;
//       display: block;
//     }
//   }

.carousel-item {
  min-width: 100%;
img {
  width: 100%;
  height: 400px; /* You can adjust this height value as needed */
  object-fit: cover;
  display: block;
}
}

  .carousel-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    border: none;
    cursor: pointer;
    padding: 10px;
    border-radius: 50%;
    z-index: 10;

    svg {
      width: 24px;
      height: 24px;
    }

    &.left {
      left: 10px;
    }
    &.right {
      right: 10px;
    }
  }
}
</style>
