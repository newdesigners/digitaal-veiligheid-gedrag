<template>
  <section
    v-editable="blok"
    class="featured-experience"
  >
  <!-- <pre>{{ blok }}</pre>
  <pre>{{ selectedExperiences }}</pre> -->
    <article class="container container--inner featured-experience__article">
      <div class="featured-experience__experiences">
        <VueSlickCarousel class="featured-experience__slider" ref="carousel" v-bind="slickOptions">
          <Testimonial
            v-for="experience in selectedExperiences"
            :key="experience.uuid"
            :content="experience.content"
          />
          <template #customPaging="page">
            <div><span class="featured-experience__slider-dot"></span></div>
          </template>
        </VueSlickCarousel>
      </div>
    </article>
  </section>
</template>
 
<script>
export default {
  data() {
    return {
      slickOptions: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        dots: true,
        dotsClass: 'featured-experience__slider-dots',
        responsive: [
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