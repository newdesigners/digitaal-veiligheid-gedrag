<template>
  <section
    v-editable="blok"
    class="text-image"
  >
    <article class="container container--inner text-image__article">
      <pre>{{blok.copy}}</pre>
      <div class="text-image__content">
        <div class="text-image__copy">
          <component
            v-for="blok in blok.copy"
            :key="blok._uid"
            :blok="blok"
            :is="blok.component"
          />
        </div>
        <div class="text-image__image">
          <figure class="text-image__figure">

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