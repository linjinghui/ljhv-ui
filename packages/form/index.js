import Form from './src/main.vue';

/* istanbul ignore next */
Form.install = function (Vue) {
  Vue.component(Form.name, Form);
};

export default Form;
