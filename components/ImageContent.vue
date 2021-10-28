<template>
  <figure v-editable="blok" class="image__figure">
    <NuxtImg
      v-if="blok.image.filename"
      class="image__image"
      :modifiers="{ smart: true }"
      provider="storyblok"
      :src="blok.image.filename"
      :alt="blok.image.alt"
      :sizes="sizes"
      loading="lazy"
    />
  </figure>
</template>
 
<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
    sizes: {
      type: String,
      default: '',
    }
  },
};
</script>