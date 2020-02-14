import Weather from './src/main.vue';

/* istanbul ignore next */
Weather.install = function (Vue) {
  Vue.component(Weather.name, Weather);
};

export default Weather;
