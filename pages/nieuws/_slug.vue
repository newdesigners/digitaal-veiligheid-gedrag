<template>
  <section class="page container">
    <div class="page__content">
      <Post :blok="story" />
    </div>
  </section>
</template>

<script>
import { createSEOMeta } from '~/assets/js/utils/seo.js';

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
    // Load the JSON from the API
    let version = context.query._storyblok || context.isDev ? 'draft' : 'published';
 
    return context.app.$storyapi.get(`cdn/stories/nieuws/${ context.params.slug }`, {
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
  },
  head() {
    if(this.story.content.seo) {
      const url = this.story.full_slug;
      const seo = this.story.content.seo;
      const title = this.story.content.seo.title = this.story.content.seo.title ? this.story.content.seo.title : `Digitale Veilig Gedrag | ${ this.story.content.title }`;
      this.story.content.seo.description = this.story.content.seo.description ? this.story.content.seo.description : this.story.content.excerpt;
      return {
        title,
        meta: createSEOMeta({
          url,
          seo,
        }),
      };
    }
  },
};
</script>