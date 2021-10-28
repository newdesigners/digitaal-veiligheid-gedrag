<template>
  <section
    v-editable="blok"
    class="resources-content"
  >
    <article class="container container--inner resources-content__article">
      <pre>{{ blok }}</pre>
      <h2 class="resources-content__title">{{ blok.title }}</h2>
      <component
        v-for="blok in blok.sources"
        :key="blok._uid"
        :blok="blok"
        :is="blok.component"
      />
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