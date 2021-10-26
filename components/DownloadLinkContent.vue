<template>
  <div v-editable="blok">
    <Link
      class="link-content"
      :label="blok.link_label"
      :link="{}"
      :download="blok.file"
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