<template>
  <div v-editable="button">
    <!-- External link -->
    <a
      v-if="label && button.linktype === 'url'"
      :href="button.url"
      target="_blank"
      rel="noopener noreferrer"
      class="button"
    >
      <span class="button__label">{{ label }}</span>
      <span class="button__icon" v-if="icon"><Resources :type="icon" /></span>
    </a>

     <!-- Internal link -->
    <NuxtLink
      v-if="label && button.linktype === 'story'"
      :to="button.cached_url"
      class="button"
    >
      <span class="button__label">{{ label }}</span>
      <span class="button__icon" v-if="icon"><Resources :type="icon" /></span>
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
    button: {
      type: Object,
      required: true,
    },
    icon: {
      type: String,
    }
  },
};
</script>
