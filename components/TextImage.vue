<template>
  <section
    v-editable="blok"
    class="text-image"
  >
    <article class="container container--inner text-image__article">
      <div class="text-image__content" :class="{ 'text-image__content--reverse' : blok.reverse, 'text-image__content--intro' : blok.introduction }">
        <div class="text-image__copy">
          <component
            :isIntro="ownBlok.introduction"
            v-for="blok in blok.copy"
            :key="blok._uid"
            :blok="blok"
            :is="blok.component"
          />
        </div>
        <div class="text-image__image" v-if="blok.image.filename">
          <figure class="text-image__figure">
            <SlantedImage :reverse="blok.reverse" class="text-image__src" :url="blok.image.filename" />
          </figure>
        </div>
      </div>
    </article>
  </section>
</template>
 
<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ownBlok() {
      return this.blok;
    },
  },
};
</script>