<template>
  <div class="testimonial">
    <figure class="testimonial__figure">
      <NuxtImg
        v-if="content.image.filename"
        class="testimonial__image"
        width="840"
        height="450"
        sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw"
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
      <p class="testimonial__title">{{ content.title.name }}</p>
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