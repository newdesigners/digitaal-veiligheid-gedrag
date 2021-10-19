<template>
  <div class="featured-link" v-editable="blok">
    <p v-if="fileName" class="featured-link__title">{{ fileName }}</p>
    <Button
      v-if="blok.file.filename"
      class="featured-link__button"
      :button="blok.button_url"
      icon="download"
      :label="blok.button_label"
      :download="blok.file"
      />
    <Button
      v-if="blok.button_url.url || blok.button_url.cached_url"
      class="featured-link__button"
      :button="blok.button_url"
      icon="download"
      :label="blok.button_label"
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
  computed: {
    fileName() {
      if(this.blok.file.filename) {
        return this.blok.file.title ? this.blok.file.title : this.blok.text;
      } else {
        return this.blok.text;
      }
    },
  }
};
</script>