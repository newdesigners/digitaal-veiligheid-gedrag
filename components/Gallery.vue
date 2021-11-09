<template>
  <div class="gallery" v-editable="blok">
    <ImageContent width="690" height="468" sizes="xs:350px sm:580px md:690px" v-for="image in blok.images" :blok="image" :key="image._uid" />
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