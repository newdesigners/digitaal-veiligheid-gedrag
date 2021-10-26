<template>
  <div v-editable="link">
    <!-- External link -->
    <a
      v-if="link && label && link.linktype === 'url'"
      :href="link.url"
      target="_blank"
      rel="noopener noreferrer"
      class="link"
    >
      <span class="link__label">{{ label }}</span>
      <span v-if="icon"><Resources :type="icon" /></span>
    </a>

     <!-- Internal link -->
    <NuxtLink
      v-if="label && link.linktype === 'story'"
      :to="link.cached_url"
      class="link"
    >
      <span class="link__label">{{ label }}</span>
      <span v-if="icon"><Resources :type="icon" /></span>
    </NuxtLink>
    
    <!-- Download link -->
    <a
      v-if="download"
      :href="download.filename"
      target="_blank"
      rel="noopener noreferrer"
      class="link"
      download
    >
      <span class="link__label">{{ label }}</span>
      <span class="link__icon" v-if="icon"><Resources type="download" /></span>
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
    link: {
      type: Object,
      default() {
        return {
          linktype: '',
        };
      },
    },
    icon: {
      type: String,
      default: 'chevron-right',
    },
    download: {
      type: Object,
    },
  },
};
</script>
