<template>
  <div class="base-pagination">
    <button
      class="base-pagination__button"
      :class="{ 'base-pagination__button--disable': isPreviousButtonDisabled }"
      @click="previousPage"
    >
      Previous
    </button>
    <!-- <pre>{{ paginationTriggers }}</pre> -->
    <BasePaginationTrigger
      v-for="paginationTrigger in paginationTriggers"
      :class="{ 'base-pagination__description--current': paginationTrigger === currentPage }"
      :key="paginationTrigger"
      :pageNumber="paginationTrigger"
      class="base-pagination__description"
      @loadPage="onLoadPage"
    />
    <button
      class="base-pagination__button"
      :class="{'base-pagination__button--disable': isNextButtonDisabled }"
      @click="nextPage"
    >
      Next
    </button>
  </div>
</template>

<script>
export default {
  props: {
    visiblePagesCount: {
      type: Number,
      default: 5
    },
    currentPage: {
      type: Number,
      required: true,
    },
    pageCount: {
      type: Number,
      required: true,
    },
  },
  computed: {
    isPreviousButtonDisabled() {
      return this.currentPage === 1;
    },
    isNextButtonDisabled() {
      return this.currentPage === this.pageCount;
    },
    paginationTriggers() {
      const currentPage = this.currentPage;
      const pageCount = this.pageCount;
      const visiblePagesCount = this.visiblePagesCount;
      const visiblePagesThreshold = (visiblePagesCount - 1) / 2;
      const pagintationTriggersArray = Array(this.visiblePagesCount - 1).fill(0);

      if(currentPage <= visiblePagesThreshold + 1) {
        pagintationTriggersArray[0] = 1;
        const pagintationTriggers = pagintationTriggersArray.map((paginationTrigger, index) => {
          return pagintationTriggersArray[0] + index;
        });
        pagintationTriggers.push(pageCount);
        return pagintationTriggers;
      }

      if(currentPage >= pageCount - visiblePagesThreshold + 1) {
        const pagintationTriggers = pagintationTriggersArray.map((paginationTrigger, index) => { return pageCount - index });
        pagintationTriggers.reverse().unshift(1);
        return pagintationTriggers;
      }

      // pagintationTriggersArray[0] = currentPage - visiblePagesThreshold + 1;
      // const pagintationTriggers = pagintationTriggersArray.map((paginationTrigger, index) => { return pagintationTriggersArray[0] + index });
      // pagintationTriggers.unshift(1);
      // pagintationTriggers[pagintationTriggers.length - 1] = pageCount;
      // return pagintationTriggers;
    },
  },
  methods: {
    nextPage() {
      this.$emit('nextPage', 'next');
    },
    previousPage() {
      this.$emit('previousPage', 'previous');
    },
    onLoadPage() {
      this.$emit('loadPage', page);
    },
  },
};
</script>
