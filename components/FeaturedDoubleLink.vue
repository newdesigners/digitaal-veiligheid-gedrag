<template>
  <div class="featured-double-link" v-editable="blok">
    <FeaturedLink v-for="b in blok.featured" :key="b.uuid" :blok="b" />
    <component
      v-for="blok in blok.link"
      :key="blok._uid"
      :blok="blok"
      :is="blok.component"
    />
  </div>
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