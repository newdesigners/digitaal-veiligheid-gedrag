<template>
  <section
    v-editable="blok"
    class="text-image"
  >
    <article class="container container--inner text-image__article">
      <div class="text-image__content" :class="{ 'text-image__content--reverse' : blok.reverse }">
        <div class="text-image__copy">
          <component
            v-for="blok in blok.copy"
            :key="blok._uid"
            :blok="blok"
            :is="blok.component"
          />
        </div>
        <div class="text-image__image" v-if="blok.image">
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
};
</script>