<template>
  <div class="testimonial">
    <figure class="testimonial__figure">
      <NuxtImg
        v-if="content.image.filename"
        class="testimonial__image"
        width="240"
        height="250"
        sizes="lg:374px"
        :modifiers="{ smart: true }"
        provider="storyblok"
        :src="content.image.filename"
        :alt="content.image.alt"
      />
    </figure>
    <aside class="testimonial__copy">
      <blockquote class="testimonial__quote">
        <span class="testimonial__quote-mark">“</span><span>{{ content.testimonial }}</span><span>"</span>
      </blockquote>
      <p class="testimonial__name">{{ content.name }}</p>
      <p class="testimonial__title">{{ content.title }}</p>
    </aside>
  </div>
</template>
 
<script>
export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
};
</script>