<template>
  <section class="page container">
      <div class="container page__content">
        <h1>Nieuws pagina</h1>
      </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      stories: [],
    }
  },
  asyncData (context) {
    // TODO: Change version according to the environment;
    let version = context.query._storyblok || context.isDev ? 'draft' : 'published';
    
    return context.app.$storyapi.get('cdn/stories', {
      starts_with: 'news/',
      version: version
    }).then((res) => {
      return res.data
    }).catch((res) => {
      if (!res.response) {
        console.error(res);
        context.error({ statusCode: 404, message: 'Failed to receive content form api' })
      } else {
        console.error(res.response.data);
        context.error({ statusCode: res.response.status, message: res.response.data })
      }
    })
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
};
</script>
