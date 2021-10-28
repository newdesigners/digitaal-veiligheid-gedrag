<template>
  <div class="game" v-editable="blok">
    <span class="game__google" v-if="blok.google_play_button" v-html="blok.google_play_button"></span>
    <Link
      class="game__link"
      :label="blok.online_link_label"
      :link="blok.online_link_url"
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