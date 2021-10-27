<template>
  <figure v-editable="blok" class="image__figure aspect-w-16 aspect-h-9">
    <NuxtImg
      v-if="blok.image.filename"
      class="image__image aspect-w-16 aspect-h-9"
      :modifiers="{ smart: true }"
      provider="storyblok"
      :src="blok.image.filename"
      :alt="blok.image.alt"
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
  },
};
</script>