<template>
  <section
    v-editable="blok"
    class="page-intro"
    :style="blok.background_image ? { background: `linear-gradient(89.96deg, #233343 -25.57%, rgba(35, 51, 67, 0) 112.46%), url(${ mImage })` } : ``"
  >
    <article class="container container--inner page-intro__article">
      <h1 class="page-intro__title">{{ blok.title }}</h1>
      <p class="page-intro__description">{{ blok.description }}</p>
      <Button
        class="page-intro__button"
        :button="blok.button_url"
        :icon="blok.button_icon"
        :label="blok.button_text"
      />
    </article>
  </section>
</template>
 
<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  methods: {
    transformImage(image, option) {
      if (!image) return "";
      if (!option) return image;
      
      let service = '/m/';
      return image + service + option;
    },
  },
  computed: {
    mImage() {
      if(!this.blok.background_image.filename) return;
      return this.transformImage(this.blok.background_image.filename, '1280x0/smart/');
    }
  }
};
</script>