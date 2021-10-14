<template>
  <section
    v-editable="blok"
    class="news-preview"
  >
    <article class="container container--inner news-preview__article">
      <h2 class="news-preview__title">{{ blok.title }}</h2>
      <div class="news-preview__posts">
        <ul class="news-preview__list">
          <VueSlickCarousel v-bind="slickOptions">
            <li class="news-preview__list-item" v-for="singleNews in selectedNews" :key="singleNews._uid">
              <Card v-if="singleNews.content" :link="singleNews.full_slug" :content="singleNews.content" /> 
            </li>
          </VueSlickCarousel>
        </ul>
      </div>
      <Link class="news-preview__link" :label="blok.link_label" :link="blok.link_url" />
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
    selectedNews() {
      // Load reference data/content from store
      const news = this.$store.state.news.news.filter((n) => {
        return this.blok.news.includes(n.uuid)
      })
 
      // Enable the ordering of the article previews
      news.sort((a, b) => {
        return this.blok.news.indexOf(a.uuid) - this.blok.news.indexOf(b.uuid);
      })

      return news;
    },
  },
};
</script>