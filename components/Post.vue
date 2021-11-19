<template>
  <article class="container container--inner post">
    <div class="post__intro">
      <h1 class="post__title">{{ post.title }}</h1>
    </div>
    <figure class="post__figure" v-if="post.featured_image">
      <NuxtPicture
        v-if="post.featured_image.filename"  
        class="post__image"
        width="1280"
        height="800"
        sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
        :modifiers="{ smart: true }"
        provider="storyblok"
        loading="lazy"
        :src="post.featured_image.filename"
        :alt="post.featured_image.alt"
      />
    </figure>
    <div class="container prose lg:prose-lg xl:prose-xl rich-text-renderer post__body">
      <rich-text-renderer class="rich-text-renderer" v-if="post.body" :document="post.body" />
    </div>
    <aside class="post__read-more">
      <h2 class="post__read-more-title">Lees ook</h2>
      <ul class="card__posts-list">
        <li class="card__posts-list-item" v-for="p in readMorePosts" :key="p.uuid">
          <Card v-if="p.content" :link="p.full_slug" :content="p.content" /> 
        </li>
      </ul>
    </aside>
  </article>
</template>
 
<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    }
  },
  computed: {
    post() {
      return this.blok.content;
    },
    readMorePosts() {
      return this.$store.state.news.news.filter((p) => {
        return p.uuid !== this.blok.uuid && p.full_slug !== 'nieuws/';
      }).slice(0, 3);
    },
  },
};
</script>