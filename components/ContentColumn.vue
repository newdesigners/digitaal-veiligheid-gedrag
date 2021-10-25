<template>
  <section
    v-editable="blok"
    class="content-col"
  >
    <article class="container container--inner content-col__article" :class="containerWidthStyle">
        <h2 class="content-col__title">{{ blok.title }}</h2>
        <div class="content-col__content">
          <div v-if="blok.column_left.length" class="content-col__column">
            <component
              v-for="blok in blok.column_left"
              :key="blok._uid"
              :blok="blok"
              :is="blok.component"
            />
          </div>
          <div v-if="blok.column_right.length" class="content-col__column">
            <component
              v-for="blok in blok.column_right"
              :key="blok._uid"
              :blok="blok"
              :is="blok.component"
            />
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
    containerWidthStyle() {
      return `content-col__article--${ this.blok.container_width }` 
    }
  }
};
</script>