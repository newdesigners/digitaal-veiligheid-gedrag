<template>
  <div v-editable="blok">
    <Link
      class="link-content"
      :label="blok.link_label"
      :link="blok.link_url"
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