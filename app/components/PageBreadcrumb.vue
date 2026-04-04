<script setup lang="ts">
interface BreadcrumbItem {
  label: string;
  to?: string;
}

defineProps<{
  items: BreadcrumbItem[];
}>();
</script>

<template>
  <nav class="breadcrumb">
    <template v-for="(item, index) in items" :key="index">
      <NuxtLink v-if="item.to" :to="item.to" class="nav-link">
        {{ item.label }}
      </NuxtLink>
      <span v-else class="current">{{ item.label }}</span>
      <span v-if="index < items.length - 1" class="separator">/</span>
    </template>
  </nav>
</template>

<style scoped>
.breadcrumb {
  font-family: "Georgia", serif;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
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
</style>
