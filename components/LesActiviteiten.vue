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
          <DropdownSelect default="Kies een categorie" :options="['Audi', 'BMW', 'Citroen', 'Ford']" />
        </div>
      </header>
      <div class="lessons__posts">
        <!-- total {{ total }}
        <pre>{{ suggestions }}</pre> -->
        <div v-if="suggestions.length === 0 && saerchInput !== ''" class="lessons__error">
          <h3 class="lessons__error-title">Geen resultaten gevonden :(</h3>
        </div>
        <LesActiviteit :blok="lesson.content" v-for="lesson in suggestions" :key="lesson.uuid" />
      </div>
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
      total: 0,
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
  // computed: {
  //   lessons() {
  //     return this.$store.state.lessons.lessons.filter((l) => {
  //       return l.full_slug !== 'lesactiviteiten/';
  //     });;
  //   },
  // },
  methods: {
    onInputChange: debounce(async function() {
      this.suggestions = await this.fetchSuggestions();
    }, 
    300),
    async fetchSuggestions() {
      const version = process.env.NODE_ENV !== 'production' ? 'draft' : 'published';
      const res = await this.$storyapi.get('cdn/stories', {
        starts_with: 'lesactiviteiten/',
        version,
        search_term: this.searchInput,
        per_page: 6,
        is_startpage: 0,
        // page: 2
      });
      this.total = res.total;
      console.log(res);
      return res.data.stories;
    },
    onInputBlur() {
      setTimeout(() => (this.suggestions = []), 300)
    },
  },
};
</script>