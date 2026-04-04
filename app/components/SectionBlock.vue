<script setup lang="ts">
defineProps<{
  tagline: string;
  title: string;
  variant?: 'default' | 'tinted' | 'dark';
}>();
</script>

<template>
  <section
    :class="[
      'section',
      variant === 'tinted' && 'section-tinted',
      variant === 'dark' && 'section-dark',
    ]"
  >
    <span :class="['tagline', variant === 'dark' && 'tagline-light']">
      {{ tagline }}
    </span>
    <h2 :class="['section-title', variant === 'dark' && 'section-title-light']">
      {{ title }}
    </h2>
    <div :class="['section-divider', variant === 'dark' && 'section-divider-light']" />
    <slot />
  </section>
</template>

<style scoped>
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

@media (max-width: 1024px) {
  .section {
    padding: 3.5rem 2rem;
  }
}

@media (max-width: 768px) {
  .section {
    padding: 3rem 1.2rem;
  }

  .section-title {
    font-size: 1.6rem;
  }
}

@media print {
  .section-dark {
    background: none;
  }

  .tagline-light {
    color: #999;
  }

  .section-title-light {
    color: #2c2c2c;
  }

  .section-divider-light {
    background: #ccc;
  }
}
</style>
