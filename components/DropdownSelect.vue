<template>
  <div class="dropdown-select" v-click-outside="closeDropdown" :class="{ 'dropdown-select--open' : isOpen }">
    <div class="dropdown-select__selected" @click="open">
      <div class="dropdown-select__value">{{ selected ? selected : this.default }}</div>
      <button type="submit" class="button button--input"><Resources class="dropdown-select__button" type="chevron-top" /></button>
    </div>
    <ul v-if="options" class="dropdown-select__options">
      <li class="dropdown-select__item" :class="{ 'dropdown-select__item--selected' : selected === item }" v-for="(item, index) in options" :key="index" @click="select(item)">{{ item }}</li>
    </ul>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      isOpen: false,
      selected: '',
    }
  },
  props: {
    default: {
      type: String,
      default: 'Alle',
    },
    options: {
      type: Array,
      required: true,
    },
  },
  methods: {
    open(){
      this.isOpen = !this.isOpen;
    },
    select(i) {
      this.selected = i;
      this.closeDropdown();
    },
    closeDropdown() {
      this.isOpen = false;
    },
  },
};
</script>