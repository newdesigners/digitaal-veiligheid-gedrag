<template>
  <section
    v-editable="blok"
    class="page-title"
  >
    <header :class="`page-title__header page-title__header--${ blok.text_align }`">
      <p class="page-title__pre-title">{{ blok.pre_title }}</p>
      <h1 class="page-title__title">{{ blok.title }}</h1>
    </header>
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
};
</script>