import Split from './src/main.vue';

/* istanbul ignore next */
Split.install = function (Vue) {
  Vue.component(Split.name, Split);
};

export default Split;
