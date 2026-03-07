<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <footer class="site-footer">
    <NuxtLink to="/impressum" class="footer-link">
      {{ t("footer.impressum") }}
    </NuxtLink>
  </footer>
</template>

<style scoped>
.site-footer {
  text-align: center;
  padding: 2rem;
  font-family: "Georgia", serif;
  font-size: 0.9rem;
  color: #999;
}

.footer-link {
  color: #999;
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: var(--ui-color-primary-600);
}
</style>
