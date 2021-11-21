<template>
  <section
    v-editable="blok"
    class="lessons"
  >
    <article class="container container--inner lessons__article">
      <header class="lessons__header">
        <h2 class="lessons__title">{{ blok.title }}</h2>
        <div class="lessons__filters">
          <div class="input__group">
            <input 
              class="input input--icon"
              type="text"
              @input="onInputChange"
              v-model="searchInput"
              placeholder="Zoeken..."
              name="query"
            />
            <button type="submit" class="button button--input"><Resources type="search" /></button>
          </div>
          <DropdownSelect 
            @getCategory="handleGetCategory"
            :options="categories"
          />
        </div>
      </header>
      <div class="lessons__posts">
        <div v-if="suggestions.length === 0 && (searchInput !== '' || selectedCategory !== undefined)" class="error-filter">
          <h3 class="error-filter__title">Geen resultaten gevonden :(</h3>
        </div>
        <div v-if="suggestions.length === 0 && searchInput === '' && selectedCategory === undefined" class="error-filter">
          <h3 class="error-filter__title">Lessen worden geladen...</h3>
        </div>
        <Lesson :blok="lesson.content" v-for="lesson in suggestions" :key="lesson.id" />
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
import debounce from 'lodash/debounce';

export default {
  data() {
    return {
      searchInput: '',
      suggestions: [],
      categories: [],
      selectedCategory: undefined,
      perPage: 7,
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
    this.categories = await this.fetchCategories();
  },
  methods: {
    onInputChange: debounce(async function() {
      this.suggestions = await this.fetchSuggestions();
    },
    400),
    async fetchSuggestions(page = 1) {
      const version = process.env.NODE_ENV !== 'production' ? 'draft' : 'published';
      const res = await this.$storyapi.get('cdn/stories', {
        starts_with: 'lesactiviteiten/',
        version,
        search_term: this.searchInput,
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
    async fetchCategories() {
      const version = process.env.NODE_ENV !== 'production' ? 'draft' : 'published';
      const res = await this.$storyapi.get('cdn/stories', {
        starts_with: 'categories/lesactiviteiten/',
        version,
      });
      res.data.stories.unshift({ name: 'Alle' });
      return res.data.stories;
    },
    async handleGetCategory(category) {
      this.selectedCategory = category.uuid;
      this.suggestions = await this.fetchSuggestions();
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