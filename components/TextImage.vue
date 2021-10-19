<template>
  <section
    v-editable="blok"
    class="text-image"
  >
    <article class="container container--inner text-image__article">
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
            <SlantedImage class="text-image__src" url="https://images.unsplash.com/photo-1634607416888-1912b1256d5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1941&q=80" />
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