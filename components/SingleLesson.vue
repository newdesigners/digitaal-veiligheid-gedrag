<template>
  <div>
      <div v-if="latestLesson">
        <Lesson v-for="lesson in latestLesson" :key="lesson.uid" :blok="lesson.content" />
      </div>
      <Link :link="blok.link_url" :label="blok.link_label" />
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      latestLesson: {},
    }
  },
  async mounted() {
      let newsRefRes = await this.$storyapi.get(`cdn/stories/`, {
        starts_with: 'lesactiviteiten/',
        version: 'draft',
        is_startpage: 0,
        by_uuids: this.blok.lesson,
        per_page: 1,
      });
   
      this.latestLesson = newsRefRes.data.stories;
      console.log(this.latestLesson);
  },
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  methods: {
  }
};
</script>