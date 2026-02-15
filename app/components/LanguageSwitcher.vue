<script setup lang="ts">
const { locale, locales, setLocale } = useI18n();

const selectedLocale = computed({
  get: () => locale.value,
  set: (value: string) => setLocale(value as Parameters<typeof setLocale>[0]),
});
</script>

<template>
  <div class="language-switcher" v-if="locales.length > 1">
    <USelect
      v-model="selectedLocale"
      :items="locales"
      label-key="name"
      value-key="code"
      color="primary"
    />
  </div>
</template>

<style scoped>
.language-switcher {
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 1000;
}

@media (max-width: 768px) {
  .language-switcher {
    top: 1rem;
    right: 1rem;
  }
}
</style>
