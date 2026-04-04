<script setup lang="ts">
const { t } = useI18n();

const heroRef = ref<HTMLElement | null>(null);
const parallaxY = ref(0);

onMounted(() => {
  const onScroll = () => {
    if (heroRef.value) {
      parallaxY.value = window.scrollY * 0.3;
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onUnmounted(() => window.removeEventListener('scroll', onScroll));
});
</script>

<template>
  <header id="home" ref="heroRef" class="hero">
    <div class="hero-bg" :style="{ transform: `translateY(${parallaxY}px)` }" />
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
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: flex-end;
  clip-path: inset(0 -100vw 0 0);
}

.hero-bg {
  position: absolute;
  top: -15%;
  bottom: 0;
  left: 0;
  right: calc(-100vw + 100%);
  background: url("/maison-nartuby.jpeg") center / cover no-repeat;
  will-change: transform;
}

.hero-bg::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
}


.hero-text-col {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2.5rem 3rem 30% 2.5rem;
}

.hero-tagline {
  display: inline-block;
  font-size: 0.75rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.8rem;
}

.hero-title {
  font-size: 2.8rem;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.15;
  color: #fff;
  margin-bottom: 0.6rem;
}

.hero-subtitle {
  font-size: 1.1rem;
  font-weight: 300;
  font-style: italic;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.5;
}

.hero-divider {
  width: 36px;
  height: 1px;
  background: rgba(255, 255, 255, 0.6);
  margin: 1.2rem 0;
}

.hero-address {
  font-size: 0.85rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: 0.3px;
  margin-bottom: 0.2rem;
}

.hero-email a {
  font-size: 0.85rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  transition: color 0.3s ease;
}

.hero-email a:hover {
  color: #fff;
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
  background: #fff;
  color: #2c2c2c;
  border: none;
}

.btn-primary:hover {
  background: rgba(255, 255, 255, 0.85);
  transform: translateY(-2px);
}

.btn-ghost {
  background: transparent;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.btn-ghost:hover {
  border-color: #fff;
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
