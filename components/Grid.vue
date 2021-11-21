<template>
  <div class="grid__items" v-editable="blok">
    <component
      v-for="blok in blok.items"
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