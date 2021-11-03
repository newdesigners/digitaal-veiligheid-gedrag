import Vue from 'vue';
import VueLodash from 'vue-lodash';
import random from 'lodash/random';
import map from 'lodash/map';
import debounce from 'lodash/debounce';
 

Vue.use(VueLodash, { name: 'custom', lodash: { map, random, debounce } });