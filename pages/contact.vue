<template>
  <section class="page container">
    <div class="page__content">
      <article class="container container--inner contact__article">
        <header class="contact__header">
          <p class="contact__pre-title">Digitaal Veilig Gedrag in het Basisonderwijs</p>
          <h1 class="contact__title">Contact</h1>
        </header>
        <div class="contact__form">
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            class="form"
            action="/bedankt"
          >
            <div class="contact__form-inputs">
              <input 
                type="hidden"
                name="form-name"
                value="contact"
              />

              <div class="form__group form__group--half">
                <label for="naam" class="form__label">
                  <span>Naam</span>
                  <sup>*</sup>
                </label>
                <input
                  type="text"
                  name="naam"
                  id="naam"
                  class="form__input"
                  required
                />
              </div>

              <div class="form__group form__group--half">
                <label for="email" class="form__label">
                  <span>E-mailadres</span>
                  <sup>*</sup>
                  </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="form__input"
                  required
                />
              </div>

              <div class="form__group">
                <label for="onderwerp" class="form__label">
                  <span>Onderwerp</span>
                  <sup>*</sup>
                </label>
                <input
                  type="text"
                  name="onderwerp"
                  id="onderwerp"
                  class="form__input"
                  required
                />
              </div>

              <div class="form__group">
                <label for="bericht" class="form__label">
                  <span>Bericht</span>
                  <sup>*</sup>
                </label>
                <textarea
                  name="bericht"
                  id="bericht"
                  cols="18"
                  rows="10"
                  class="form__input"
                  required
                ></textarea>
              </div>
            </div>
            <div class="form__submit">
              <button type="submit" class="link">
                <span>Verzend</span>
                <Resources type="chevron-right" />
              </button>
            </div>
          </form>
        </div>
      </article>
    </div>
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
    ownBlok() {
      return this.blok;
    }
  }
};
</script>
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
  },
};
</script>
