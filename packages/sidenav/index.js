import Sidenav from './src/main.vue';

/* istanbul ignore next */
Sidenav.install = function (Vue) {
  Vue.component(Sidenav.name, Sidenav);
};

export default Sidenav;
