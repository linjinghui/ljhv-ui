import Rule from './src/main.vue';

/* istanbul ignore next */
Rule.install = function (Vue) {
  Vue.component(Rule.name, Rule);
};

export default Rule;
