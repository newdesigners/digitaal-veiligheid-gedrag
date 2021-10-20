<template>
  <section
    v-editable="blok"
    class="featured-experience"
  >
  <!-- <pre>{{ blok }}</pre>
  <pre>{{ selectedExperiences }}</pre> -->
    <article class="container container--inner featured-experience__article">
      <div class="featured-experience__experiences">
        <div class="featured-experience__list">
          <Testimonial
            class="featured-experience__list-item"
            v-for="experience in selectedExperiences"
            :key="experience.uuid"
            :content="experience.content"
          />
        </div>
      </div>
    </article>
  </section>
</template>
 
<script>
import Testimonial from './Testimonial.vue';
export default {
  components: { Testimonial },
  data() {
    return {
      slickOptions: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        dots: false,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 767,
            settings: 'slick',
          },
          {
            breakpoint: 9999,
            settings: 'unslick'
          },
        ],
      },
    }
  },
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  computed: {
    selectedExperiences() {
      // Load reference data/content from store
      const experiences = this.$store.state.experiences.experiences.filter((e) => {
        return this.blok.experiences.includes(e.uuid);
      });
 
      // Enable the ordering of the article previews
      experiences.sort((a, b) => {
        return this.blok.experiences.indexOf(a.uuid) - this.blok.experiences.indexOf(b.uuid);
      });

      return experiences;
    },
  },
};
</script>