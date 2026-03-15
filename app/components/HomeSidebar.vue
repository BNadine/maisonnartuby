<script setup lang="ts">
const { t } = useI18n();

const props = defineProps<{
  navItems: { id: string; key: string }[];
}>();

const activeSection = defineModel<string>('activeSection', { default: 'home' });

onMounted(() => {
  const sectionIds = props.navItems.map((item) => item.id);
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
</template>

<style scoped>
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

@media (max-width: 1024px) {
  .sidebar {
    display: none;
  }
}
</style>
