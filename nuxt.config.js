import axios from 'axios';

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'digitaal-veilig-gedrag',
    htmlAttrs: {
      lang: 'nl-Nl',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-tasty-burgers.js', mode: 'client' },
    { src: '~/plugins/vue-slick-carousel.js', mode: 'client'  },
    { src: '~/plugins/vue-composition-api.js',  },
    { src: '~/plugins/storyblok-rich-text-renderer.js', mode: 'client' },
    { src: '~/plugins/vue-snip.js', mode: 'client' },
    { src: '~/plugins/outside-click-directive.js', mode: 'client' },
    { src: '~/plugins/vue-lodash.js', mode: 'client' },
    { src: '~/plugins/vue-masonry-wall.js', },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/image',
    [
      'storyblok-nuxt',
      {
        accessToken: process.env.STORYBLOK_SPACE_TOKEN,
        cacheProvider: 'memory',
      }
    ],
  ],
  
  // Options for @nuxtjs/google-fonts
  googleFonts: {
    families: {
      Roboto: [400, 500],
      Poppins: [600, 700, 900],
    },
    display: 'swap',
    useStylesheet: true,
  },
  image: {
    storyblok: {
      baseURL: 'https://img2.storyblok.com',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        'postcss-nested': {}
      }
    },
  },
  generate: {
    fallback: true,
    routes: function (callback) {
      console.log('Generating routes');
      const token = process.env.STORYBLOK_SPACE_TOKEN;
      const version = 'published';
      let cache_version = 0;
   
      let toIgnore = ['home', 'en/settings'];
      
       // other routes that are not in Storyblok with their slug.
      let routes = ['/']; // adds / directly
   
       // Load space and receive latest cache version key to improve performance
      axios.get(`https://api.storyblok.com/v1/cdn/spaces/me?token=${token}`).then((space_res) => {
   
         // timestamp of latest publish
        cache_version = space_res.data.space.version;
   
         // Call for all Links using the Links API: https://www.storyblok.com/docs/Delivery-Api/Links
        axios.get(`https://api.storyblok.com/v1/cdn/links?token=${token}&version=${version}&cv=${cache_version}&per_page=100`).then((res) => {
          Object.keys(res.data.links).forEach((key) => {
            if(!toIgnore.includes(res.data.links[key].slug)) {
              routes.push('/' + res.data.links[key].slug);
            }
          });
   
          callback(null, routes);
        });
      });
    }
  },
}
