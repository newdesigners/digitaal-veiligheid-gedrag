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
import { createSEOMeta } from '~/assets/js/utils/seo';

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

    if(context.store.state.experiences.loaded !== '1') {
      let experiencesRefRes = await context.app.$storyapi.get(`cdn/stories/`, { starts_with: 'ervaringen/', version: version, resolve_relations: 'experience.title' });
      context.store.commit('experiences/setExperiences', experiencesRefRes.data.stories);
      context.store.commit('experiences/setLoaded', '1');
    }
  },
  head() {
    const url = '';
    // const url = this.story.full_slug;
    const seo = this.story.content.seo;
    const title = this.story.content.seo.title = this.story.content.seo.title ? this.story.content.seo.title : `Digitale Veilig Gedrag | ${ this.story.name }`;
    return {
      title,
      meta: createSEOMeta({
        url,
        seo
      })
    }
  },
}
</script>