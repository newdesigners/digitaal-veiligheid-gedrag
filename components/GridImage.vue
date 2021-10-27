<template>
  <div v-editable="blok">
    <figure class="grid-image__figure">
      <NuxtImg
        class="grid-image__image"
        :modifiers="{ smart: true }"
        provider="storyblok"
        :src="blok.image.filename"
        :alt="blok.image.alt"
        loading="lazy"
      />
    </figure>
  </div>
</template>
 
<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>