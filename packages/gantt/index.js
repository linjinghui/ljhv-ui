import Gantt from './src/main.vue';

/* istanbul ignore next */
Gantt.install = function (Vue) {
  Vue.component(Gantt.name, Gantt);
};

export default Gantt;
