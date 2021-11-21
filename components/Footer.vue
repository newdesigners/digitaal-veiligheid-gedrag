<template>
  <footer ref="footer" class="footer">
        <div class="container footer__container">
            <div class="container footer__content">
                <NuxtLink class="footer__link--logo" to="/">
                    <Logo />
                </NuxtLink>
            <div class="footer__nav">
                <ul class="footer__nav-list">
                    <li v-for="item in mainRoutes" :key="item.text" class="footer__nav-list-item">
                        <NuxtLink :to="item.link" class="footer__nav-link">{{ item.text }}</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
        <aside class="container footer__legal">
            <Resources type="hhs-logo-en" class="footer__legal-logo" />
            <div class="footer__legal-content">
                <a class="footer__legal-link" href="/">Privacy</a>
                <a class="footer__legal-link" href="/">Tip aan de redactie</a>
            </div>
        </aside>
      </div>
  </footer>
</template>

<script>
export default {
  computed: {
    mainRoutes() {
        return [
          { link: "/onderzoek", text: "Het onderzoek" },
          { link: "/lesactiviteiten", text: "Lesactiviteiten" },
          { link: "/doe-de-test", text: "Doe de test" },
          { link: "/ervaringen", text: "Ervaringen" },
          { link: "/contact", text: "Contact" },
        ]
    },
  },
};
</script>