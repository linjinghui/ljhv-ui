import Lock from './src/main.vue';

/* istanbul ignore next */
Lock.install = function (Vue) {
  Vue.component(Lock.name, Lock);
};

export default Lock;
