<template>
  <section class="page container">
    <div class="page__content">
      <component
        v-if="story.content.component"
        :key="story.content._uid"
        :blok="story.content"
        :is="story.content.component"
      />
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      story: { content: {} },
    };
  },
  mounted () {
    this.$storybridge(() => {
      const storyblokInstance = new StoryblokBridge();
 
      // Use the input event for instant update of content
      storyblokInstance.on('input', (event) => {
        console.log(this.story.content);
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content;
        }
      });
 
      // Use the bridge to listen the events
      storyblokInstance.on(['published', 'change'], (event) => {
        // window.location.reload()
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true,
        })
      });
    });
  },
  asyncData (context) {
    // // This what would we do in real project
    const version = context.query._storyblok || context.isDev ? 'draft' : 'published';
    const fullSlug = (context.route.path == '/' || context.route.path == '') ? 'home' : context.route.path;
    console.log(fullSlug);
    // Load the JSON from the API - loadig the home content (index page)
    return context.app.$storyapi.get(`cdn/stories/${ fullSlug }`, {
      version: version
    }).then((res) => {
      return res.data
    }).catch((res) => {
      if (!res.response) {
        console.error(res);
        context.error({ statusCode: 404, message: 'Failed to receive content form api' });
      } else {
        console.error(res.response.data);
        context.error({ statusCode: res.response.status, message: res.response.data });
      }
    });
  },
  async fetch(context) {
    // TODO: Change version according to the environment;
    let version = context.query._storyblok || context.isDev ? 'draft' : 'published';
    // Loading reference data - News in our case
    if(context.store.state.news.loaded !== '1') {
      let newsRefRes = await context.app.$storyapi.get(`cdn/stories/`, { starts_with: 'nieuws/', version: version });

      context.store.commit('news/setNews', newsRefRes.data.stories);
      context.store.commit('news/setLoaded', '1');
    }

    //TODO: NOT SURE IF THIS IS NEEDED SINCE WE ARE GETTING THE LESSONS DIRECTLY IN THE COMPONENT ITSELF; THIS IS BAD IF WE ARE GETTING ALL THE LESSONS AND ITS LIKE 100 PAGES; WE ARE GETTING DATA THAT ARENT EVEN SHOWN;

    if(context.store.state.lessons.loaded !== '1') {
      let lessonsRefRes = await context.app.$storyapi.get(`cdn/stories/`, { starts_with: 'lesactiviteiten/', version: version });

      context.store.commit('lessons/setLessons', lessonsRefRes.data.stories);
      context.store.commit('lessons/setLoaded', '1');
    }
  },
};
</script>
