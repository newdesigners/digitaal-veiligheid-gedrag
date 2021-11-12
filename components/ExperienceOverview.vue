<template>
  <section
    v-editable="blok"
    class="experience-overview"
  >
    <article class="container container--inner experience-overview__article">
      <aside class="experience-overview__filters">
        <span class="experience-overview__filters-label">Sorteer op</span>
        <DropdownSelect 
          @getCategory="handleGetCategory"
          :options="categories"
        />
      </aside>
      <vue-masonry-wall
        :items="suggestions"
        :options="{
          width: 600,
          padding: {
            default: 20
          }
        }"
        :ssr="{ columns: 2 }"
        @append="append"
      > 
        <template v-slot:default="{ item }">
          <div class="experience-overview__single">
            <Testimonial :content="item.content" />
          </div>
        </template>
      </vue-masonry-wall>
    </article>
  </section>
</template>
 
<script>
export default {
  data() {
    return {
      suggestions: [],
      categories: [],
      selectedCategory: {},
      perPage: 8,
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
    async fetchSuggestions(page = 1) {
      console.log(this.selectedCategory);
      const version = process.env.NODE_ENV !== 'production' ? 'draft' : 'published';
      const res = await this.$storyapi.get('cdn/stories', {
        starts_with: 'ervaringen/',
        version,
        per_page: this.perPage,
        is_startpage: 0,
        filter_query: {
          title: {
            in: this.selectedCategory,
          },
        },
        page,
      });
      this.pageCount = Math.ceil(res.total / this.perPage);
      console.log(res.data.stories);
      return res.data.stories;
    },
    async fetchCategories() {
      const version = process.env.NODE_ENV !== 'production' ? 'draft' : 'published';
      const res = await this.$storyapi.get('cdn/stories', {
        starts_with: 'categories/ervaringen/',
        version,
      });
      res.data.stories.unshift({ name: 'Alle' });
      return res.data.stories;
    },
    async handleGetCategory(category) {
      this.selectedCategory = category.uuid;
      this.suggestions = await this.fetchSuggestions();
    },
    async append() {
      if(this.currentPage > this.pageCount) return;
      this.currentPage++;
      this.suggestions = this.suggestions.concat(await this.fetchSuggestions(this.currentPage));
    },
  },
};
</script>