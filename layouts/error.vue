<template>
  <section class="page container">
    <div class="page__content">
      <article class="container container--inner error__article">
        <div v-if="error.statusCode === 404">
          <h1 class="error-page__title" v-if="error.statusCode === 404">404</h1>
          <h2 class="error-page__title-sub">Pagina niet gevonden</h2>
          <NuxtLink class="link" to="/">Terug naar home pagina</NuxtLink>
        </div>
        <div v-else>
          <h1 class="error-page__title">Er is een fout opgetreden</h1>
          <h2 class="error-page__title-sub">Neem contact met een beheerder</h2>
          <a class="link" href="mailto:newdesigners@hhs.nl">Stuur een berichtje naar Digitaal Veilig Gedrag</a>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error',
};
</script>