<template>
  <svg width="580" height="560" viewBox="0 0 580 560" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <mask v-if="reverse" id="shape-mask-reverse">
        <path d="M580 0L0 29L30 541L513 560L580 0Z" fill="#FFF"/>
      </mask>
      <mask v-else id="shape-mask">
        <path  d="M0 0L580 29L550 541L67 560L0 0Z" fill="#FFF"/>
      </mask>
    </defs>
    <image width="100%" height="100%" preserveAspectRatio="xMidYMid slice" :href="escapedUrl" :mask="maskUrl" opacity="1"></image>
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
      default: false,
    },
  },
  methods: {
    transformImage(image, option) {
      if (!image) return "";
      if (!option) return image;
      
      let service = '/m/';
      return image + service + option;
    },
  },
  computed: {
    escapedUrl() {
      return this.transformImage(this.url, '1160x0/smart/').replace(/&/g, "&amp;");
    },
    maskUrl() {
      return this.reverse ? 'url(#shape-mask-reverse)' : 'url(#shape-mask)';
    }
  },
};
</script>
