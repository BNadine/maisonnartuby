<script setup lang="ts">
const { t } = useI18n();

const navItems = [
  { id: 'home', key: 'home.nav.home' },
  { id: 'story', key: 'home.nav.story' },
  { id: 'rooms', key: 'home.nav.rooms' },
  { id: 'garden', key: 'home.nav.garden' },
  { id: 'location', key: 'home.nav.location' },
  { id: 'amenities', key: 'home.nav.amenities' },
  { id: 'contact', key: 'home.nav.contact' },
  { id: 'pricing', key: 'home.nav.pricing' },
];
</script>

<template>
  <div class="landing-page">
    <div class="main-layout">
      <HomeSidebar :nav-items="navItems" />

      <div class="content">
        <HomeHero />

        <!-- Story -->
        <SectionBlock id="story" :tagline="t('home.welcome.tagline')" :title="t('home.welcome.title')">
          <p class="lead">{{ t("home.welcome.text1") }}</p>
          <p class="body-text">{{ t("home.welcome.text2") }}</p>
        </SectionBlock>

        <!-- Rooms -->
        <SectionBlock id="rooms" :tagline="t('home.comfort.tagline')" :title="t('home.comfort.title')" variant="tinted">
          <p class="lead">{{ t("home.comfort.text1") }}</p>
          <p class="body-text">{{ t("home.comfort.text2") }}</p>
          <NuxtLink to="/rooms" class="inline-link">
            {{ t("rooms.discover") }}
            <span class="arrow">&rarr;</span>
          </NuxtLink>
        </SectionBlock>

        <!-- Garden -->
        <SectionBlock id="garden" :tagline="t('home.outdoor.tagline')" :title="t('home.outdoor.title')">
          <p class="lead">{{ t("home.outdoor.text") }}</p>
        </SectionBlock>

        <!-- Location -->
        <SectionBlock id="location" :tagline="t('home.location.tagline')" :title="t('home.location.title')" variant="tinted">
          <p class="lead">{{ t("home.location.text") }}</p>
        </SectionBlock>

        <HomeAmenities />
        <HomeContact />
        <HomePricing />
      </div>
    </div>
  </div>
</template>

<style>
body,
html {
  margin: 0;
  padding: 0;
}
</style>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.landing-page {
  width: 100%;
  min-height: 100vh;
  overflow-x: clip;
}

/* ─── Main Layout ─── */
.main-layout {
  display: grid;
  grid-template-columns: max(160px, calc((100vw - 1200px) / 2 + 160px)) 1fr;
}

.content {
  border-left: 1px solid #f0eeeb;
}

/* ─── Typography ─── */
.lead {
  font-size: 1.05rem;
  font-weight: 300;
  line-height: 1.9;
  color: #444;
  margin-bottom: 1rem;
  max-width: 580px;
}

.body-text {
  font-size: 0.98rem;
  font-weight: 300;
  line-height: 1.85;
  color: #666;
  margin-bottom: 0.8rem;
  max-width: 580px;
}

.inline-link {
  display: inline-block;
  margin-top: 1.2rem;
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #2c2c2c;
  text-decoration: none;
  padding-bottom: 3px;
  border-bottom: 1px solid #ccc;
  transition: all 0.3s ease;
}

.inline-link:hover {
  border-color: #2c2c2c;
}

.inline-link .arrow {
  display: inline-block;
  transition: transform 0.3s ease;
  margin-left: 4px;
}

.inline-link:hover .arrow {
  transform: translateX(4px);
}

/* ─── Responsive ─── */
@media (max-width: 1024px) {
  .main-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .lead {
    font-size: 0.98rem;
  }
}

@media print {
  .main-layout {
    grid-template-columns: 1fr;
  }

  .content {
    border-left: none;
  }
}
</style>
