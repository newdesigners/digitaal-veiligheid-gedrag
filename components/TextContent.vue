<template>
  <div class="text-content" v-editable="blok">
    <h3 class="text-content__title">{{ blok.title }}</h3>
    <p class="text-content__body">{{ blok.body }}</p>
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