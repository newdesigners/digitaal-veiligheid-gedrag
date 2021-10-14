<template>
  <div v-editable="link">
    <!-- External link -->
    <a
      v-if="label && link.linktype === 'url'"
      :href="link.url"
      target="_blank"
      rel="noopener noreferrer"
      class="link"
    >
      <span class="link__label">{{ label }}</span>
      <span v-if="icon"><Resources type="chevron-right" /></span>
    </a>

     <!-- Internal link -->
    <NuxtLink
      v-if="label && link.linktype === 'story'"
      :to="link.cached_url"
      class="link"
    >
      <span class="link__label">{{ label }}</span>
      <span v-if="icon"><Resources type="chevron-right" /></span>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    link: {
      type: Object,
      required: true,
    },
    icon: {
      type: Boolean,
      default: true,
    }
  },
};
</script>
