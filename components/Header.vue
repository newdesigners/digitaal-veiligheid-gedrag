<template>
  <header ref="header" class="header" :class="{ 'header--open' : isActive }">
      <div class="container header__container">
        <NuxtLink to="/" @click.native="onClose">
          <Logo />
        </NuxtLink>
        <div class="header__nav">
          <ul class="header__nav-list" @click="onClose">
            <li v-for="item in mainRoutes" :key="item.text" class="header__nav-list-item">
              <NuxtLink :to="item.link" class="header__nav-link">{{ item.text }}</NuxtLink>
            </li>
          </ul>
        </div>
        <aside class="header__nav-button">
          <tasty-burger-button
            ref="hamburger"
            type="spin"
            :active="isActive"
            :color="color"
            :active-color="activeColor"
            :size="size"
            @toggle="onToggle"
            />
        </aside>
      </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      size: "xs",
      color: "#F2F2F2",
      activeColor: "#F2F2F2F2"
    };
  },
  methods: {
    onToggle(active) {
      this.isActive = active;
    },
    onClose() {
      this.isActive = false;
    },
  },
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