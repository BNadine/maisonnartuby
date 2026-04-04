<script setup lang="ts">
const { t } = useI18n();

const amenityKeys = [
  'home.amenities.beds',
  'home.amenities.duvets',
  'home.amenities.linens',
  'home.amenities.bodycare',
  'home.amenities.cooling',
  'home.amenities.coffee',
  'home.amenities.keybox',
  'home.amenities.parking',
  'home.amenities.evCharging',
  'home.amenities.bus',
];
</script>

<template>
  <SectionBlock id="amenities" :tagline="t('home.amenities.tagline')" :title="t('home.amenities.title')">
    <div class="amenities-grid">
      <div v-for="key in amenityKeys" :key="key" class="amenity-item">
        <span class="amenity-icon">&#9676;</span>
        <span>{{ t(key) }}</span>
      </div>
    </div>
  </SectionBlock>
</template>

<style scoped>
.amenities-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  max-width: 580px;
}

.amenity-item {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  font-weight: 300;
  color: #555;
  border-bottom: 1px solid #f0eeeb;
}

.amenity-icon {
  color: #bbb;
  font-size: 0.5rem;
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .amenities-grid {
    grid-template-columns: 1fr;
  }

  .amenity-item {
    padding: 0.7rem 0.4rem;
  }
}
</style>
