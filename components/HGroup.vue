<template>
  <div class="h-group" v-editable="blok">
    <p class="h-group__pre-title">{{ blok.pre_title }}</p>
    <h2 class="h-group__title">{{ blok.title }}</h2>
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