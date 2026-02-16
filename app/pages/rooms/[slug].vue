<script setup lang="ts">
const { t } = useI18n();
const route = useRoute();
const { getRoom } = useRooms();

const slug = route.params.slug as string;
const room = getRoom(slug);

if (!room) {
  throw createError({ statusCode: 404, message: "Room not found" });
}

const selectedImage = ref(0);
const lightboxOpen = ref(false);
const slideDirection = ref<"left" | "right">("left");

function selectImage(index: number) {
  slideDirection.value = index > selectedImage.value ? "left" : "right";
  selectedImage.value = index;
}

function openLightbox(index: number) {
  selectedImage.value = index;
  lightboxOpen.value = true;
}

function prevImage() {
  if (!room) return;
  slideDirection.value = "right";
  selectedImage.value = (selectedImage.value - 1 + room.images.length) % room.images.length;
}

function nextImage() {
  if (!room) return;
  slideDirection.value = "left";
  selectedImage.value = (selectedImage.value + 1) % room.images.length;
}

function onKeydown(e: KeyboardEvent) {
  if (!lightboxOpen.value) return;
  if (e.key === "ArrowLeft") prevImage();
  if (e.key === "ArrowRight") nextImage();
  if (e.key === "Escape") lightboxOpen.value = false;
}

onMounted(() => window.addEventListener("keydown", onKeydown));
onUnmounted(() => window.removeEventListener("keydown", onKeydown));
</script>

<template>
  <div v-if="room" class="room-page">
    <header class="page-header">
      <nav class="breadcrumb">
        <NuxtLink to="/" class="nav-link">
          {{ t("rooms.backToHome") }}
        </NuxtLink>
        <span class="separator">/</span>
        <NuxtLink to="/rooms" class="nav-link">
          {{ t("rooms.title") }}
        </NuxtLink>
        <span class="separator">/</span>
        <span class="current">{{ t(room.nameKey) }}</span>
      </nav>
    </header>

    <div class="room-content">
      <h1 class="room-title">{{ t(room.nameKey) }}</h1>

      <!-- Photo Gallery -->
      <section class="gallery-section">
        <div class="gallery-main" @click="openLightbox(selectedImage)">
          <Transition :name="`slide-${slideDirection}`" mode="out-in">
            <img
              :key="selectedImage"
              :src="room.images[selectedImage]"
              :alt="`${t(room.nameKey)} - Photo ${selectedImage + 1}`"
              class="gallery-main-image"
            >
          </Transition>
        </div>
        <div class="gallery-thumbnails">
          <button
            v-for="(image, index) in room.images"
            :key="index"
            :class="['thumbnail', { active: selectedImage === index }]"
            @click="selectImage(index)"
          >
            <img
              :src="image"
              :alt="`${t(room.nameKey)} - Miniature ${index + 1}`"
              loading="lazy"
            >
          </button>
        </div>
      </section>

      <!-- Description -->
      <section class="description-section">
        <p class="room-description">{{ t(room.descriptionKey) }}</p>
      </section>

      <!-- Details -->
      <div class="details-grid">
        <!-- Capacity -->
        <section class="detail-card">
          <h2 class="detail-title">{{ t("rooms.capacity") }}</h2>
          <p class="detail-value">{{ t("rooms.capacityPersons", { count: room.capacity }) }}</p>
        </section>

        <!-- Amenities -->
        <section class="detail-card">
          <h2 class="detail-title">{{ t("rooms.amenitiesTitle") }}</h2>
          <ul class="amenities-list">
            <li v-for="amenityKey in room.amenitiesKeys" :key="amenityKey">
              {{ t(amenityKey) }}
            </li>
          </ul>
        </section>
      </div>

      <!-- Booking -->
      <div class="booking-section">
        <a :href="room.bookingUrl" target="_blank" rel="noopener" class="booking-button">
          {{ t("rooms.bookOnAirbnb") }}
        </a>
      </div>

      <!-- Back link -->
      <div class="back-section">
        <NuxtLink to="/rooms" class="back-button">
          &larr; {{ t("rooms.backToRooms") }}
        </NuxtLink>
      </div>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition name="lightbox-fade">
        <div v-if="lightboxOpen" class="lightbox" @click.self="lightboxOpen = false">
          <button class="lightbox-close" @click="lightboxOpen = false">&times;</button>
          <button class="lightbox-prev" @click="prevImage">&lsaquo;</button>
          <Transition :name="`slide-${slideDirection}`" mode="out-in">
            <img
              :key="selectedImage"
              :src="room.images[selectedImage]"
              :alt="`${t(room.nameKey)} - Photo ${selectedImage + 1}`"
              class="lightbox-image"
            >
          </Transition>
          <button class="lightbox-next" @click="nextImage">&rsaquo;</button>
          <div class="lightbox-counter">{{ selectedImage + 1 }} / {{ room.images.length }}</div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.room-page {
  min-height: 100vh;
  background: #faf8f5;
  padding: 2rem;
}

.page-header {
  max-width: 900px;
  margin: 0 auto;
  padding-top: 1rem;
  margin-bottom: 2rem;
}

.breadcrumb {
  font-family: "Georgia", serif;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.nav-link {
  color: var(--ui-color-primary-700);
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: var(--ui-color-primary-500);
}

.separator {
  color: #999;
}

.current {
  color: #666;
}

.room-content {
  max-width: 900px;
  margin: 0 auto;
}

.room-title {
  font-family: "Georgia", serif;
  font-size: 3rem;
  font-weight: 300;
  letter-spacing: 2px;
  color: #2c2c2c;
  margin-bottom: 2rem;
}

/* Gallery */
.gallery-section {
  margin-bottom: 3rem;
}

.gallery-main {
  width: 100%;
  aspect-ratio: 16 / 10;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1rem;
  background: #e8e4df;
  cursor: pointer;
}

.gallery-main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery-thumbnails {
  display: flex;
  gap: 0.75rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: thin;
  scrollbar-color: var(--ui-color-primary-300) transparent;
  padding-bottom: 0.5rem;
}

.gallery-thumbnails::-webkit-scrollbar {
  height: 6px;
}

.gallery-thumbnails::-webkit-scrollbar-track {
  background: transparent;
}

.gallery-thumbnails::-webkit-scrollbar-thumb {
  background: var(--ui-color-primary-300);
  border-radius: 3px;
}

.thumbnail {
  flex: 0 0 160px;
  aspect-ratio: 4 / 3;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid transparent;
  padding: 0;
  background: none;
  transition: border-color 0.2s ease, opacity 0.2s ease;
  opacity: 0.6;
  scroll-snap-align: start;
}

.thumbnail.active {
  border-color: var(--ui-color-primary-500);
  opacity: 1;
}

.thumbnail:hover {
  opacity: 1;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-image {
  max-width: 90vw;
  max-height: 85vh;
  object-fit: contain;
  border-radius: 4px;
}

.lightbox-close {
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  background: none;
  border: none;
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s;
  line-height: 1;
}

.lightbox-close:hover {
  opacity: 1;
}

.lightbox-prev,
.lightbox-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: white;
  font-size: 3rem;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s;
  padding: 1rem;
  line-height: 1;
}

.lightbox-prev {
  left: 1rem;
}

.lightbox-next {
  right: 1rem;
}

.lightbox-prev:hover,
.lightbox-next:hover {
  opacity: 1;
}

.lightbox-counter {
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-family: "Georgia", serif;
  font-size: 0.95rem;
  opacity: 0.7;
}

/* Description */
.description-section {
  margin-bottom: 2.5rem;
}

.room-description {
  font-family: "Georgia", serif;
  font-size: 1.15rem;
  line-height: 1.8;
  color: #444;
}

/* Details */
.details-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.detail-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.detail-title {
  font-family: "Georgia", serif;
  font-size: 1.1rem;
  font-weight: 400;
  color: #2c2c2c;
  margin-bottom: 0.75rem;
}

.detail-value {
  font-family: "Georgia", serif;
  font-size: 1rem;
  color: #555;
}

.amenities-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.amenities-list li {
  font-family: "Georgia", serif;
  font-size: 1rem;
  color: #555;
  padding: 0.3rem 0;
}

.amenities-list li::before {
  content: "\2713\00a0";
  color: var(--ui-color-primary-500);
}

/* Booking */
.booking-section {
  margin-bottom: 2.5rem;
  text-align: center;
}

.booking-button {
  display: inline-block;
  font-family: "Georgia", serif;
  font-size: 1.1rem;
  font-weight: 400;
  letter-spacing: 1px;
  color: white;
  background: var(--ui-color-primary-600);
  padding: 0.9rem 2.5rem;
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.2s ease;
}

.booking-button:hover {
  background: var(--ui-color-primary-700);
  transform: translateY(-2px);
}

/* Back */
.back-section {
  padding-bottom: 3rem;
}

.back-button {
  font-family: "Georgia", serif;
  font-size: 1rem;
  color: var(--ui-color-primary-700);
  text-decoration: none;
  transition: color 0.2s ease;
}

.back-button:hover {
  color: var(--ui-color-primary-500);
}

/* Slide transitions */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.35s ease, opacity 0.35s ease;
}

.slide-left-enter-from {
  transform: translateX(30px);
  opacity: 0;
}

.slide-left-leave-to {
  transform: translateX(-30px);
  opacity: 0;
}

.slide-right-enter-from {
  transform: translateX(-30px);
  opacity: 0;
}

.slide-right-leave-to {
  transform: translateX(30px);
  opacity: 0;
}

/* Lightbox fade */
.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .room-page {
    padding: 1rem;
  }

  .room-title {
    font-size: 2rem;
  }

  .gallery-thumbnails {
    gap: 0.5rem;
  }

  .thumbnail {
    flex: 0 0 130px;
  }

  .details-grid {
    grid-template-columns: 1fr;
  }

  .lightbox-prev,
  .lightbox-next {
    font-size: 2rem;
    padding: 0.5rem;
  }
}
</style>
