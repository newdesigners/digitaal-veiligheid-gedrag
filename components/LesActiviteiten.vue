<template>
  <section
    v-editable="blok"
    class="lessons"
  >
    <article class="container container--inner lessons__article">
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