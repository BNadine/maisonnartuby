<script setup lang="ts">
const { isEnabled, toggle } = useFeatureFlags();
</script>

<template>
  <div class="features-page">
    <header class="page-header">
      <nav class="breadcrumb">
        <NuxtLink to="/" class="nav-link">Home</NuxtLink>
        <span class="separator">/</span>
        <span class="current">Features</span>
      </nav>
      <h1 class="page-title">Feature Flags</h1>
    </header>

    <div class="flags-list">
      <div v-for="flag in AVAILABLE_FLAGS" :key="flag.key" class="flag-item">
        <label class="flag-label">
          <span class="flag-name">{{ flag.label }}</span>
          <span class="flag-key">{{ flag.key }}</span>
        </label>
        <button
          :class="['toggle-button', { active: isEnabled(flag.key) }]"
          @click="toggle(flag.key)"
        >
          {{ isEnabled(flag.key) ? "ON" : "OFF" }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.features-page {
  min-height: 100vh;
  background: #faf8f5;
  padding: 2rem;
}

.page-header {
  max-width: 600px;
  margin: 0 auto 2rem;
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
  font-size: 2.5rem;
  font-weight: 300;
  letter-spacing: 2px;
  color: #2c2c2c;
  margin-top: 1rem;
}

.flags-list {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.flag-item {
  background: white;
  border-radius: 8px;
  padding: 1.25rem 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.flag-label {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.flag-name {
  font-family: "Georgia", serif;
  font-size: 1.1rem;
  color: #2c2c2c;
}

.flag-key {
  font-family: monospace;
  font-size: 0.85rem;
  color: #999;
}

.toggle-button {
  font-family: "Georgia", serif;
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 1px;
  padding: 0.5rem 1.25rem;
  border-radius: 6px;
  border: 2px solid #ddd;
  background: white;
  color: #999;
  cursor: pointer;
  transition: all 0.2s ease;
}

.toggle-button.active {
  border-color: var(--ui-color-primary-500);
  background: var(--ui-color-primary-600);
  color: white;
}

.toggle-button:hover {
  border-color: var(--ui-color-primary-400);
}
</style>
