<script setup lang="ts">
const { t } = useI18n();

const activeSection = ref('home');

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

onMounted(() => {
  const sectionIds = navItems.map((item) => item.id);
  const visibleSections = new Set<string>();
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          visibleSections.add(entry.target.id);
        } else {
          visibleSections.delete(entry.target.id);
        }
      }
      // Pick the first visible section in DOM order
      for (const id of sectionIds) {
        if (visibleSections.has(id)) {
          activeSection.value = id;
          break;
        }
      }
    },
    { rootMargin: '-20% 0px -60% 0px' },
  );

  for (const id of sectionIds) {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  }

  onUnmounted(() => observer.disconnect());
});
</script>

<template>
  <div class="landing-page">
    <!-- Main layout with sidebar -->
    <div class="main-layout">
      <!-- Sidebar nav (desktop only) -->
      <nav class="sidebar">
        <ul>
          <li v-for="item in navItems" :key="item.id">
            <a
              :href="`#${item.id}`"
              :class="{ active: activeSection === item.id }"
            >
              {{ t(item.key) }}
            </a>
          </li>
        </ul>
      </nav>

      <!-- Content -->
      <div class="content">
        <!-- Hero -->
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
        <!-- Story -->
        <section id="story" class="section">
          <span class="tagline">{{ t("home.welcome.tagline") }}</span>
          <h2 class="section-title">{{ t("home.welcome.title") }}</h2>
          <div class="section-divider" />
          <p class="lead">{{ t("home.welcome.text1") }}</p>
          <p class="body-text">{{ t("home.welcome.text2") }}</p>
        </section>

        <!-- Rooms -->
        <section id="rooms" class="section section-tinted">
          <span class="tagline">{{ t("home.comfort.tagline") }}</span>
          <h2 class="section-title">{{ t("home.comfort.title") }}</h2>
          <div class="section-divider" />
          <p class="lead">{{ t("home.comfort.text1") }}</p>
          <p class="body-text">{{ t("home.comfort.text2") }}</p>
          <NuxtLink to="/rooms" class="inline-link">
            {{ t("rooms.discover") }}
            <span class="arrow">&rarr;</span>
          </NuxtLink>
        </section>

        <!-- Garden -->
        <section id="garden" class="section">
          <span class="tagline">{{ t("home.outdoor.tagline") }}</span>
          <h2 class="section-title">{{ t("home.outdoor.title") }}</h2>
          <div class="section-divider" />
          <p class="lead">{{ t("home.outdoor.text") }}</p>
        </section>

        <!-- Location -->
        <section id="location" class="section section-tinted">
          <span class="tagline">{{ t("home.location.tagline") }}</span>
          <h2 class="section-title">{{ t("home.location.title") }}</h2>
          <div class="section-divider" />
          <p class="lead">{{ t("home.location.text") }}</p>
        </section>

        <!-- Amenities -->
        <section id="amenities" class="section">
          <span class="tagline">{{ t("home.amenities.tagline") }}</span>
          <h2 class="section-title">{{ t("home.amenities.title") }}</h2>
          <div class="section-divider" />
          <div class="amenities-grid">
            <div class="amenity-item">
              <span class="amenity-icon">&#9676;</span>
              <span>{{ t("home.amenities.beds") }}</span>
            </div>
            <div class="amenity-item">
              <span class="amenity-icon">&#9676;</span>
              <span>{{ t("home.amenities.duvets") }}</span>
            </div>
            <div class="amenity-item">
              <span class="amenity-icon">&#9676;</span>
              <span>{{ t("home.amenities.linens") }}</span>
            </div>
            <div class="amenity-item">
              <span class="amenity-icon">&#9676;</span>
              <span>{{ t("home.amenities.bodycare") }}</span>
            </div>
            <div class="amenity-item">
              <span class="amenity-icon">&#9676;</span>
              <span>{{ t("home.amenities.cooling") }}</span>
            </div>
            <div class="amenity-item">
              <span class="amenity-icon">&#9676;</span>
              <span>{{ t("home.amenities.coffee") }}</span>
            </div>
            <div class="amenity-item">
              <span class="amenity-icon">&#9676;</span>
              <span>{{ t("home.amenities.keybox") }}</span>
            </div>
            <div class="amenity-item">
              <span class="amenity-icon">&#9676;</span>
              <span>{{ t("home.amenities.parking") }}</span>
            </div>
            <div class="amenity-item">
              <span class="amenity-icon">&#9676;</span>
              <span>{{ t("home.amenities.evCharging") }}</span>
            </div>
            <div class="amenity-item">
              <span class="amenity-icon">&#9676;</span>
              <span>{{ t("home.amenities.bus") }}</span>
            </div>
          </div>
        </section>

        <!-- Contact -->
        <section id="contact" class="section section-dark">
          <span class="tagline tagline-light">{{ t("home.contact.tagline") }}</span>
          <h2 class="section-title section-title-light">{{ t("home.contact.title") }}</h2>
          <div class="section-divider section-divider-light" />
          <p class="body-text body-text-light">{{ t("home.contact.text") }}</p>
          <a :href="`mailto:${t('email')}`" class="email-btn">
            {{ t("email") }}
          </a>
        </section>

        <!-- Pricing -->
        <section id="pricing" class="section">
          <span class="tagline">{{ t("pricing.title") }}</span>
          <h2 class="section-title">{{ t("pricing.title") }}</h2>
          <div class="section-divider" />

          <div class="pricing-table-wrapper">
            <table class="pricing-table">
              <thead>
                <tr>
                  <th />
                  <th>{{ t("pricing.normalSeason") }}</th>
                  <th>{{ t("pricing.holidaySeason") }}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ t("pricing.perPersonPerNight") }}</td>
                  <td>59 &euro;</td>
                  <td>89 &euro;</td>
                </tr>
                <tr>
                  <td>{{ t("pricing.secondPerson") }}</td>
                  <td>+ 20 &euro;</td>
                  <td>+ 30 &euro;</td>
                </tr>
                <tr>
                  <td>{{ t("pricing.breakfast") }}</td>
                  <td>7 &euro;</td>
                  <td>10 &euro;</td>
                </tr>
                <tr>
                  <td>{{ t("pricing.touristTax") }}</td>
                  <td colspan="2">1,40 &euro; {{ t("pricing.touristTaxNote") }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="pricing-info">
            <div class="pricing-info-block">
              <h3>{{ t("pricing.holidayPeriods") }}</h3>
              <ul>
                <li>{{ t("pricing.holidayPeriod1") }}</li>
                <li>{{ t("pricing.holidayPeriod2") }}</li>
                <li>{{ t("pricing.holidayPeriod3") }}</li>
                <li>{{ t("pricing.holidayPeriod4") }}</li>
              </ul>
            </div>
            <p class="breakfast-times">{{ t("pricing.breakfastTimes") }}</p>
          </div>
        </section>
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
  max-width: 1200px;
  margin: 0 auto;
}

/* ─── Hero ─── */
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

/* ─── Buttons ─── */
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

/* ─── Main Layout ─── */
.main-layout {
  display: grid;
  grid-template-columns: 160px 1fr;
}

/* ─── Sidebar ─── */
.sidebar {
  position: sticky;
  top: 0;
  align-self: start;
  max-height: 100vh;
  padding: 2.5rem 0 2.5rem 0;
  border-right: 1px solid #f0eeeb;
  overflow-y: auto;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  margin-bottom: 0.15rem;
}

.sidebar a {
  display: block;
  font-size: 0.72rem;
  font-weight: 400;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-decoration: none;
  color: #bbb;
  padding: 0.4rem 0.8rem 0.4rem 1.5rem;
  border-left: 2px solid transparent;
  transition: all 0.25s ease;
}

.sidebar a:hover {
  color: #666;
}

.sidebar a.active {
  color: #2c2c2c;
  border-left-color: #2c2c2c;
}

/* ─── Sections ─── */
.section {
  padding: 4rem 3rem;
  scroll-margin-top: 0;
}

.section-tinted {
  background: #faf8f5;
}

.section-dark {
  background: #1e1e1e;
}

/* ─── Typography ─── */
.tagline {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 400;
  letter-spacing: 3.5px;
  text-transform: uppercase;
  color: #999;
  margin-bottom: 0.8rem;
}

.tagline-light {
  color: rgba(255, 255, 255, 0.5);
}

.section-title {
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 0.5px;
  color: #2c2c2c;
  line-height: 1.3;
  margin-bottom: 0;
}

.section-title-light {
  color: white;
}

.section-divider {
  width: 36px;
  height: 1px;
  background: #ccc;
  margin: 1.2rem 0 1.5rem;
}

.section-divider-light {
  background: rgba(255, 255, 255, 0.3);
}

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

.body-text-light {
  color: rgba(255, 255, 255, 0.7);
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

/* ─── Amenities ─── */
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

/* ─── Contact ─── */
.email-btn {
  display: inline-block;
  margin-top: 1.5rem;
  font-size: 0.95rem;
  font-weight: 300;
  letter-spacing: 1px;
  color: white;
  text-decoration: none;
  padding: 0.8rem 2rem;
  border: 1px solid rgba(255, 255, 255, 0.35);
  transition: all 0.35s ease;
}

.email-btn:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.7);
  transform: translateY(-2px);
}

/* ─── Pricing ─── */
.pricing-table-wrapper {
  overflow-x: auto;
  max-width: 580px;
}

.pricing-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}

.pricing-table th,
.pricing-table td {
  padding: 0.8rem 1rem;
  text-align: left;
  border-bottom: 1px solid #eae7e2;
}

.pricing-table th {
  font-weight: 400;
  color: #2c2c2c;
  background: #faf8f5;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
}

.pricing-table td {
  color: #666;
}

.pricing-table td:first-child {
  color: #2c2c2c;
  font-weight: 400;
}

.pricing-table td:not(:first-child),
.pricing-table th:not(:first-child) {
  text-align: center;
}

.pricing-info {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.8;
  max-width: 580px;
}

.pricing-info-block h3 {
  font-size: 0.95rem;
  font-weight: 400;
  color: #2c2c2c;
  margin-bottom: 0.4rem;
  letter-spacing: 0.5px;
}

.pricing-info-block ul {
  list-style: none;
  padding: 0;
  margin: 0 0 1.2rem;
}

.pricing-info-block li {
  padding: 0.15rem 0;
}

.pricing-info-block li::before {
  content: "\25B8\00a0";
  color: #bbb;
}

.breakfast-times {
  font-style: italic;
  color: #888;
}

/* ─── Responsive ─── */
@media (max-width: 1024px) {
  .landing-page {
    max-width: 100%;
  }

  .hero-text-col {
    padding: 2.5rem 2rem;
  }


  .main-layout {
    grid-template-columns: 1fr;
  }

  .sidebar {
    display: none;
  }

  .section {
    padding: 3.5rem 2rem;
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

  .section {
    padding: 3rem 1.2rem;
  }

  .section-title {
    font-size: 1.6rem;
  }

  .lead {
    font-size: 0.98rem;
  }

  .amenities-grid {
    grid-template-columns: 1fr;
  }

  .amenity-item {
    padding: 0.7rem 0.4rem;
  }

  .email-btn {
    font-size: 0.85rem;
    padding: 0.7rem 1.6rem;
  }

  .pricing-table {
    font-size: 0.85rem;
  }

  .pricing-table th,
  .pricing-table td {
    padding: 0.6rem 0.5rem;
  }
}
</style>
