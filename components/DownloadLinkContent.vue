<template>
  <div v-editable="blok">
    <Link
      class="link-content"
      :label="blok.file_label"
      :download="blok.file"
      icon="download"
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