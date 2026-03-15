<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <header id="home" class="hero">
    <div class="hero-text-col">
      <span class="hero-tagline">{{ t("home.heroSubtext") }}</span>
      <h1 class="hero-title">{{ t("title") }}</h1>
      <p class="hero-subtitle">{{ t("home.heroText") }}</p>
      <div class="hero-divider" />
      <p class="hero-address">{{ t("address1") }} &middot; {{ t("address2") }}</p>
      <p class="hero-email">
        <a :href="`mailto:${t('email')}`">{{ t("email") }}</a>
      </p>
      <div class="hero-actions">
        <NuxtLink to="/rooms" class="btn btn-primary">
          {{ t("rooms.discover") }}
        </NuxtLink>
        <a :href="`mailto:${t('email')}`" class="btn btn-ghost">
          {{ t("home.contactUs") }}
        </a>
      </div>
    </div>
  </header>
  <div class="hero-separator" />
</template>

<style scoped>
.hero {
  overflow: hidden;
}

.hero-text-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2.5rem 3rem 2.5rem 2.5rem;
}

.hero-tagline {
  display: inline-block;
  font-size: 0.75rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #999;
  margin-bottom: 0.8rem;
}

.hero-title {
  font-size: 2.8rem;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.15;
  color: #2c2c2c;
  margin-bottom: 0.6rem;
}

.hero-subtitle {
  font-size: 1.1rem;
  font-weight: 300;
  font-style: italic;
  color: #666;
  line-height: 1.5;
}

.hero-divider {
  width: 36px;
  height: 1px;
  background: #ccc;
  margin: 1.2rem 0;
}

.hero-address {
  font-size: 0.85rem;
  font-weight: 300;
  color: #999;
  letter-spacing: 0.3px;
  margin-bottom: 0.2rem;
}

.hero-email a {
  font-size: 0.85rem;
  font-weight: 300;
  color: #999;
  text-decoration: none;
  transition: color 0.3s ease;
}

.hero-email a:hover {
  color: #2c2c2c;
}

.hero-actions {
  display: flex;
  gap: 0.8rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
}

.hero-separator {
  border-top: 1px solid #eee;
}

/* Buttons */
.btn {
  font-size: 0.78rem;
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  padding: 0.75rem 1.6rem;
  transition: all 0.35s ease;
  display: inline-block;
  cursor: pointer;
}

.btn-primary {
  background: #2c2c2c;
  color: white;
  border: none;
}

.btn-primary:hover {
  background: #444;
  transform: translateY(-2px);
}

.btn-ghost {
  background: transparent;
  color: #2c2c2c;
  border: 1px solid #ccc;
}

.btn-ghost:hover {
  border-color: #2c2c2c;
  transform: translateY(-2px);
}

@media (max-width: 1024px) {
  .hero-text-col {
    padding: 2.5rem 2rem;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .hero-tagline {
    font-size: 0.68rem;
  }

  .hero-text-col {
    padding: 2rem 1.5rem;
  }

  .btn {
    font-size: 0.75rem;
    padding: 0.7rem 1.4rem;
  }
}
</style>
