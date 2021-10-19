<template>
  <svg width="580" height="560" viewBox="0 0 580 560" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <mask id="shape-mask">
        <path v-if="reverse" d="M580 0L0 29L30 541L513 560L580 0Z" fill="#FFF"/>
        <path v-else d="M0 0L580 29L550 541L67 560L0 0Z" fill="#FFF"/>
      </mask>
    </defs>
    <image width="100%" height="100%" preserveAspectRatio="xMidYMid slice" :href="escapedUrl" mask="url(#shape-mask)" opacity="1"></image>
  </svg>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    reverse: {
      type: Boolean,
    }
  },
  computed: {
    escapedUrl() {
      return this.url.replace(/&/g, "&amp;");
    }
  }
};
</script>
