<template>
  <div class="gallery" v-editable="blok">
    <ImageContent v-for="image in blok.images" :blok="image" :key="image._uid" />
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