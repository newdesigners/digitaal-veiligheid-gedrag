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
            <input class="input input--icon" type="text" placeholder="Zoeken..." name="query"/>
            <button type="submit" class="button button--input"><Resources type="search" /></button>
          </div>
          <DropdownSelect default="Kies een categorie" :options="['Audi', 'BMW', 'Citroen', 'Ford']" />
        </div>
      </header>
      <LesActiviteit :blok="lesson.content" v-for="lesson in lessons" :key="lesson.uuid" />
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
    lessons() {
      return this.$store.state.lessons.lessons.filter((l) => {
        return l.full_slug !== 'lesactiviteiten/';
      });;
    },
  },
};
</script>