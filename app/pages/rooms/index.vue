<script setup lang="ts">
const { t } = useI18n();
const { getAllRooms } = useRooms();

const rooms = getAllRooms();
</script>

<template>
  <div class="rooms-page">
    <header class="page-header">
      <nav class="breadcrumb">
        <NuxtLink to="/" class="nav-link">
          {{ t("rooms.backToHome") }}
        </NuxtLink>
        <span class="separator">/</span>
        <span class="current">{{ t("rooms.title") }}</span>
      </nav>
      <h1 class="page-title">{{ t("rooms.title") }}</h1>
    </header>

    <div class="rooms-grid">
      <NuxtLink
        v-for="room in rooms"
        :key="room.slug"
        :to="`/rooms/${room.slug}`"
        class="room-card"
      >
        <div class="room-image-wrapper">
          <img
            :src="room.images[0]"
            :alt="t(room.nameKey)"
            class="room-image"
            loading="lazy"
          />
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

.breadcrumb {
  font-family: "Georgia", serif;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
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

.room-image-wrapper {
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
}

.room-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.room-card:hover .room-image {
  transform: scale(1.05);
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
