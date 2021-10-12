<template>
  <section
    v-editable="blok"
    class="news-preview"
  >
    <article class="container news-preview__article">
      <h2 class="news-preview__title">{{ blok.title }}</h2>
      <div class="news-preview__posts">
        <ul class="news-preview__list">
          <li class="news-preview__list-item" v-for="singleNews in selectedNews" :key="singleNews._uid">
            <!-- <pre>{{ singleNews }}</pre> -->
            <Card v-if="singleNews.content" :link="singleNews.full_slug" :content="singleNews.content" /> 
          </li>
        </ul>
      </div>
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