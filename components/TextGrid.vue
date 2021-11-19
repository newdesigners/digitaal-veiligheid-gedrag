<template>
  <section
    v-editable="blok"
    class="text-grid"
  >
    <pre>{{ blok }}</pre>
    <article class="container container--inner text-grid__article" :class="{ 'text-grid__article--highlight': blok.highlight }">
      <h2 class="">{{ blok.title }}</h2>
      <p>{{ blok.description }}</p>
      <aside>
        <Grid :blok="grid" v-for="grid in blok.grid" :key="grid._uid" />
      </aside>
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