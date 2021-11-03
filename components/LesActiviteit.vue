<template>
  <article class="lessons__single" v-editable="blok">
    <h3 class="lessons__single-title">{{ blok.title }}</h3>
    <p class="lessons__single-body">{{ blok.description }}</p>
    <component
      v-for="blok in blok.file"
      :key="blok._uid"
      :blok="blok"
      :is="blok.component"
    />
  </article>
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