<template>
  <div class="h-group" v-editable="blok">
    <p class="h-group__pre-title">{{ blok.pre_title }}</p>
    <h1 v-if="isIntro" class="h-group__title">{{ blok.title }}</h1>
    <h2 v-else class="h-group__title">{{ blok.title }}</h2>
  </div>
</template>
 
<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
    isIntro: {
      type: Boolean,
      default: false,
    },
  },
};
</script>