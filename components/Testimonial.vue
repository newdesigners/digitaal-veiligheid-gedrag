<template>
  <div class="testimonial">
    <!-- TODO: IMAGE FOR TESTIMONIAL -->
    <blockquote class="testimonial__quote">
      <span class="testimonial__quote-mark">“</span><span>{{ content.testimonial }}</span><span>"</span>
    </blockquote>
    <p class="testimonial__name">{{ content.name }}</p>
    <p class="testimonial__title">{{ content.title }}</p>
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