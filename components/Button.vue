<template>
  <div v-editable="button">
    <!-- External link -->
    <a
      v-if="label && button.linktype === 'url' && !download"
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
      v-if="label && button.linktype === 'story' && !download"
      :to="button.cached_url"
      class="button"
    >
      <span class="button__label">{{ label }}</span>
      <span class="button__icon" v-if="icon"><Resources :type="icon" /></span>
    </NuxtLink>

    <!-- Download link -->
    <a
      v-if="download"
      :href="download.filename"
      target="_blank"
      rel="noopener noreferrer"
      class="button button--wide"
      download
    >
      <span class="button__label">{{ label }}</span>
      <span class="button__icon" v-if="icon"><Resources :type="icon" /></span>
    </a>
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
    },
    download: {
      type: Object,
    }
  },
};
</script>
