<template>
  <div class="base-pagination">
    <div class="base-pagination" v-if="pageCount !== 1">
      <button
        class="base-pagination__button"
        :class="{ 'base-pagination__button--disable': isPreviousButtonDisabled }"
        @click="previousPage"
      >
        <Resources
          class="base-pagination__button-src"
          type="chevron-right" /> 
      </button>
      <BasePaginationTrigger
        v-for="paginationTrigger in paginationTriggers"
        :class="{ 'base-pagination__trigger--current': paginationTrigger === currentPage }"
        :key="paginationTrigger"
        :pageNumber="paginationTrigger"
        class="base-pagination__trigger"
        @loadPage="onLoadPage"
      />
      <button
        class="base-pagination__button"
        :class="{'base-pagination__button--disable': isNextButtonDisabled }"
        @click="nextPage"
      >
        <Resources
          class="base-pagination__button-src"
          type="chevron-right"
        /> 
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visiblePagesCount: 5,
    }
  },
  props: {
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
      if(this.pageCount) {
        const currentPage = this.currentPage;
        const pageCount = this.pageCount;
        let visiblePagesCount = this.visiblePagesCount;
        visiblePagesCount = pageCount <= this.visiblePagesCount ? pageCount : visiblePagesCount;
        
        const visiblePagesThreshold = 2;
        const pagintationTriggersArray = Array(visiblePagesCount - 1).fill(0);

        if(currentPage <= visiblePagesThreshold + 1) {
          pagintationTriggersArray[0] = 1;
          const pagintationTriggers = pagintationTriggersArray.map((p, index) => {
            return pagintationTriggersArray[0] + index;
          });
          pagintationTriggers.push(pageCount);
          return pagintationTriggers;
        }

        if(currentPage >= pageCount - visiblePagesThreshold + 1) {
          const pagintationTriggers = pagintationTriggersArray.map((p, index) => {
            return pageCount - index;
          });
          pagintationTriggers.reverse().unshift(1);
          return pagintationTriggers;
        }

        pagintationTriggersArray[0] = currentPage - visiblePagesThreshold + 1
        const pagintationTriggers = pagintationTriggersArray.map((p, index) => {
          return pagintationTriggersArray[0] + index
        });
        pagintationTriggers.unshift(1);
        pagintationTriggers[pagintationTriggers.length - 1] = pageCount;
        return pagintationTriggers;
      }
    },
  },
  methods: {
    nextPage() {
      if(this.isNextButtonDisabled) return;
      this.$emit('nextPage');
    },
    previousPage() {
      if(this.isPreviousButtonDisabled) return;
      this.$emit('previousPage');
    },
    onLoadPage(value) {
      this.$emit('loadPage', value);
    },
  },
};
</script>
