<template>
  <section
    v-editable="blok"
    class="news"
  >
    <article class="container container--inner news__article">
      <div class="news__posts">
        <ul class="card__posts-list">
          <li class="card__posts-list-item" v-for="singleNews in suggestions" :key="singleNews.uuid">
            <Card :link="singleNews.full_slug" :content="singleNews.content" />
          </li>
        </ul>
      </div>
      <footer class="lessons__pagination">
        <BasePagination
          v-if="suggestions"
          :current-page="currentPage"
          :page-count="pageCount"
          class="articles-list__pagination"
          @nextPage="pageChangeHandle('next')"
          @previousPage="pageChangeHandle('previous')"
          @loadPage="pageChangeHandle"
        />
      </footer>
    </article>
  </section>
</template>
 
<script>
export default {
  data() {
    return {
      searchInput: '',
      suggestions: [],
      categories: [],
      selectedCategory: {},
      perPage: 9,
      pageCount: 0,
      currentPage: 1,
    }
  },
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  async mounted() {
    this.suggestions = await this.fetchSuggestions();
  },
  methods: {
    async fetchSuggestions(page = 1) {
      const version = process.env.NODE_ENV !== 'production' ? 'draft' : 'published';
      const res = await this.$storyapi.get('cdn/stories', {
        starts_with: 'nieuws/',
        version,
        per_page: this.perPage,
        is_startpage: 0,
        filter_query: {
          categories: {
            in_array: this.selectedCategory,
          },
        },
        page,
      });
      this.pageCount = Math.ceil(res.total / this.perPage);

      return res.data.stories;
    },
    async pageChangeHandle(value) {
      switch (value) {
        case 'next':
          this.currentPage += 1;
          break;
        case 'previous':
          this.currentPage -= 1;
          break;
        default:
          this.currentPage = value;
      };
      this.suggestions = await this.fetchSuggestions(this.currentPage);
    },
  },
};
</script>