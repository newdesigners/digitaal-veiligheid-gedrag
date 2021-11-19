<template>
  <div class="gallery" v-editable="blok">
    <ImageContent width="1280" height="869" sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw" v-for="image in blok.images" :blok="image" :key="image._uid" />
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