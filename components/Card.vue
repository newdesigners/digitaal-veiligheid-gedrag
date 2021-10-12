<template>
  <NuxtLink :to="link" class="card">
    <h3 class="pt-2 pb-4 text-2xl font-bold"> {{ content.title }}</h3>
    <p class="pb-6 leading-relaxed">{{ content.excerpt }}</p>
  </NuxtLink>
</template>
 
<script>
export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>