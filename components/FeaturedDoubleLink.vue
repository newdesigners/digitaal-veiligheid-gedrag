<template>
  <div class="featured-double-link" v-editable="blok">
    <pre>
      {{ blok }}
    </pre>
    <FeaturedLink v-for="b in blok.featured" :key="b.uuid"
      :blok="b"
    />
    <LinkContent v-for="b in blok.link" :key="b.uuid"
      :blok="b"
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