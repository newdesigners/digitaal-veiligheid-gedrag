<template>
  <article class="post">
    <!-- <pre>{{ blok }}</pre> -->
    <div class="container post__intro">
      <h1 class="post__title">{{ blok.title }}</h1>
    </div>
    <figure class="container post__figure">
      <NuxtPicture
        v-if="blok.featured_image.filename"  
        class="post__image"
        width="280"
        height="175"
        sizes="sm:280px md:688px lg:944px xl:1200px"
        format="webp"
        :modifiers="{ smart: true }"
        provider="storyblok"
        loading="lazy"
        :src="blok.featured_image.filename"
        :alt="blok.featured_image.alt"
      />
    </figure>
    <div class="container prose lg:prose-lg xl:prose-xl rich-text-renderer post__body">
      <rich-text-renderer class="rich-text-renderer" v-if="blok.body" :document="blok.body" />
    </div>
    <aside class="container post__read-more">
      <h2 class="post__read-more-title">Lees ook</h2>
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
};
</script>