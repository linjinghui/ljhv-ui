<template>
  <div class="wrap page-theme">
    <h1>单选框</h1>
    <dl>
      <dd><h3>引入组件</h3></dd>
      <dd v-highlight>
        <pre><code>import {Radio} from 'lv-web-ui';
Vue.component('lvRadio', Radio);</code></pre>
      </dd>
    </dl>
    <dl>
      <dd><h3>带确认选中功能的单选框</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code v-text="code"></code></pre>
        </section>
        <section style="padding:10px;">
          <lv-radio v-model="food" :disabled="true" val="1">男</lv-radio>
          <lv-radio v-model="food" val="2" :before="beforeClk">女</lv-radio>
        </section>
      </dd>
    </dl>
    <dl>
      <dd><h3>参数说明</h3></dd>
      <dd class="attribute">
        <table>
          <tr><td>参数</td><td>说明</td><td>必填</td><td>类型</td><td>可选值</td><td>默认值</td></tr>
          <tr><td>v-model/value</td><td>绑定值</td><td>是</td><td>boolean|array|number|string</td><td>-</td><td>如果传入的是数组，则表示多选</td></tr>
          <tr><td>disabled</td><td>禁用</td><td>-</td><td>boolean</td><td>-</td><td>false</td></tr>
          <tr><td>val</td><td>选中后回填的值</td><td>是</td><td>boolean|number|string</td><td>-</td><td>-</td></tr>
          <tr><td>before</td><td>选中前执行的函数</td><td>-</td><td>function</td><td>-</td><td>-</td></tr>
        </table>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Radio} from '../../../packages/index.js';
  
  export default {
    name: 'Radio',
    components: {
      lvRadio: Radio
    },
    data () {
      return {
        food: '',
        code: ''
      };
    },
    watch: {
      food: function (val) {
        console.log('food=', val);
      }
    },
    mounted: function () {
      this.code = 'beforeClk: function (callback) {\n' +
      '  if (window.confirm(\'确认选中？\')) {\n' +
      '    callback();\n' +
      '  }\n' +
      '}\n' + 
        '<lv-radio v-model="food" :disabled="true" val="1" :before="beforeClk">男</lv-radio>';
    },
    methods: {
      beforeClk: function (callback) {
        if (window.confirm('确认选中？')) {
          callback();
        }
      }
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-theme {}
</style>
