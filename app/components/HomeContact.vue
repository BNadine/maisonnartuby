<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <SectionBlock id="contact" :tagline="t('home.contact.tagline')" :title="t('home.contact.title')" variant="dark">
    <p class="body-text">{{ t("home.contact.text") }}</p>
    <a :href="`mailto:${t('email')}`" class="email-btn">
      {{ t("email") }}
    </a>
  </SectionBlock>
</template>

<style scoped>
.body-text {
  font-size: 0.98rem;
  font-weight: 300;
  line-height: 1.85;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.8rem;
  max-width: 580px;
}

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

@media (max-width: 768px) {
  .email-btn {
    font-size: 0.85rem;
    padding: 0.7rem 1.6rem;
  }
}
</style>
