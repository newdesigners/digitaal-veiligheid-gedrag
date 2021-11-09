<template>
  <NuxtLink :to="`/${ link }`" class="card">
    <!-- <pre>{{ content.featured_image }}</pre> -->
    <figure class="card__figure">
      <NuxtImg
        v-if="content.featured_image.filename"
        class="card__image"
        format="webp"
        width="240"
        height="250"
        sizes="lg:374px"
        :modifiers="{ smart: true }"
        provider="storyblok"
        :src="content.featured_image.filename"
        :alt="content.featured_image.alt"
      />
    </figure>
    <h3 class="card__title">{{ content.title }}</h3>
    <p class="card__excerpt" v-snip:js="5">{{ content.excerpt }}</p>
  </NuxtLink>
</template>
 
<script>
export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>