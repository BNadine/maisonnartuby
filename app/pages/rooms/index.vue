<script setup lang="ts">
const { t } = useI18n();
const { getAllRooms } = useRooms();

const rooms = getAllRooms();
</script>

<template>
  <div class="rooms-page">
    <header class="page-header">
      <PageBreadcrumb
:items="[
        { label: t('rooms.backToHome'), to: '/' },
        { label: t('rooms.title') },
      ]" />
      <h1 class="page-title">{{ t("rooms.title") }}</h1>
    </header>

    <div class="rooms-grid">
      <NuxtLink
        v-for="room in rooms"
        :key="room.slug"
        :to="`/rooms/${room.slug}`"
        :class="['room-card', { 'room-card--unavailable': room.status === 'unavailable' }]"
      >
        <div class="room-image-wrapper">
          <img
            :src="room.images[0]"
            :alt="t(room.nameKey)"
            class="room-image"
            loading="lazy"
          >
          <div v-if="room.status === 'unavailable'" class="unavailable-badge">
            {{ t("rooms.unavailable") }}
          </div>
        </div>
        <div class="room-info">
          <h2 class="room-name">{{ t(room.nameKey) }}</h2>
          <p class="room-excerpt">{{ t(room.descriptionKey) }}</p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.rooms-page {
  min-height: 100vh;
  background: #faf8f5;
  padding: 2rem;
}

.page-header {
  max-width: 1200px;
  margin: 0 auto 3rem;
  padding-top: 1rem;
}

.page-title {
  font-family: "Georgia", serif;
  font-size: 3rem;
  font-weight: 300;
  letter-spacing: 2px;
  color: #2c2c2c;
  margin-top: 1rem;
}

.rooms-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 2rem;
}

.room-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.room-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.room-card--unavailable .room-image {
  filter: grayscale(100%);
}

.room-image-wrapper {
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  position: relative;
}

.room-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease, filter 0.3s ease;
}

.room-card:hover .room-image {
  transform: scale(1.05);
}

.unavailable-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-family: "Georgia", serif;
  font-size: 0.85rem;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
}

.room-info {
  padding: 1.5rem;
}

.room-name {
  font-family: "Georgia", serif;
  font-size: 1.5rem;
  font-weight: 400;
  color: #2c2c2c;
  margin-bottom: 0.5rem;
}

.room-excerpt {
  font-family: "Georgia", serif;
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .rooms-page {
    padding: 1rem;
  }

  .page-title {
    font-size: 2rem;
  }

  .rooms-grid {
    grid-template-columns: 1fr;
  }
}
</style>
