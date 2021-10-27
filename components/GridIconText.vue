<template>
  <div v-editable="blok">
    <div class="grid-icon-text__icon">
      <Resources v-if="blok.icon" :type="blok.icon" />
    </div>
    <p class="grid-icon-text__description">{{ blok.description }}</p>
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