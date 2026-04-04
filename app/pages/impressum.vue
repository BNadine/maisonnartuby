<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <div class="impressum-page">
    <header class="page-header">
      <PageBreadcrumb
:items="[
        { label: t('rooms.backToHome'), to: '/' },
        { label: t('footer.impressum') },
      ]" />
      <h1 class="page-title">{{ t("footer.impressum") }}</h1>
    </header>

    <div class="impressum-content">
      <section class="impressum-section">
        <h2>{{ t("impressum.operator") }}</h2>
        <p>{{ t("title") }}</p>
        <p>{{ t("address1") }}</p>
        <p>{{ t("address2") }}</p>
      </section>

      <section class="impressum-section">
        <h2>{{ t("impressum.contact") }}</h2>
        <p>
          {{ t("impressum.emailLabel") }}:
          <a :href="`mailto:${t('email')}`">{{ t("email") }}</a>
        </p>
        <p>
          {{ t("impressum.websiteLabel") }}:
          <a href="https://www.maisonnartuby.fr">{{ t("website") }}</a>
        </p>
      </section>

      <section class="impressum-section">
        <h2>{{ t("impressum.disclaimer") }}</h2>
        <p>{{ t("impressum.disclaimerText") }}</p>
      </section>
    </div>

    <SiteFooter />
  </div>
</template>

<style scoped>
.impressum-page {
  min-height: 100vh;
  background: #faf8f5;
  padding: 2rem;
}

.page-header {
  max-width: 700px;
  margin: 0 auto 2rem;
  padding-top: 1rem;
}

.page-title {
  font-family: "Georgia", serif;
  font-size: 2.5rem;
  font-weight: 300;
  letter-spacing: 2px;
  color: #2c2c2c;
  margin-top: 1rem;
}

.impressum-content {
  max-width: 700px;
  margin: 0 auto;
}

.impressum-section {
  margin-bottom: 2rem;
}

.impressum-section h2 {
  font-family: "Georgia", serif;
  font-size: 1.2rem;
  font-weight: 400;
  color: #2c2c2c;
  margin-bottom: 0.75rem;
}

.impressum-section p {
  font-family: "Georgia", serif;
  font-size: 1rem;
  line-height: 1.8;
  color: #555;
}

.impressum-section a {
  color: var(--ui-color-primary-700);
  text-decoration: none;
  transition: color 0.2s ease;
}

.impressum-section a:hover {
  color: var(--ui-color-primary-500);
}

@media (max-width: 768px) {
  .impressum-page {
    padding: 1rem;
  }

  .page-title {
    font-size: 2rem;
  }
}
</style>
