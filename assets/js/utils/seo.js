export const createSEOMeta = (data) => [
  { 
    hid: 'description', 
    name: 'description',
    content: data.seo.description ? data.seo.description : undefined,
  },
  { hid: 'og:title', 
    property: 'og:title',
    content: data.seo.og_title ? data.seo.og_title : data.seo.title,
  },
  {
    hid: 'og:description',
    property: 'og:description',
    content: data.seo.og_description ? data.seo.og_description : data.seo.description ? data.seo.description : undefined,
  },
  { hid: 'og:image',
    property: 'og:image',
    content: data.seo.og_image ? data.seo.og_image : undefined,
  },
  {
    hid: 'og:url',
    property: 'og:url',
    content: process.env.HOST_NAME + '/' + data.url,
  },
  {
    hid: 'twitter:card',
    name: 'twitter:card',
    content: 'summary',
  },
  {
    hid: 'twitter:title',
    name: 'twitter:title',
    content: data.seo.twitter_title ? data.seo.twitter_title : data.seo.title,
  },
  {
    hid: 'twitter:description',
    name: 'twitter:description',
    content: data.seo.twitter_description ? data.seo.twitter_description : data.seo.description ? data.seo.description : undefined,
  },
  {
    hid: 'twitter:image',
    name: 'twitter:image',
    content: data.seo.twitter_image ? data.seo.twitter_image : data.seo.og_image ?  data.seo.og_image : undefined,
  },
];