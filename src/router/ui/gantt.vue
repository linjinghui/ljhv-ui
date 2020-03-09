<template>
  <div class="wrap page-theme">
    <h1>甘特图</h1>
    <dl>
      <dd><h3>引入组件</h3></dd>
      <dd v-highlight>
        <pre><code>import {Gantt} from 'lv-web-ui';
Vue.component('lvGantt', Gantt);</code></pre>
      </dd>
    </dl>
    <dl>
      <dd><h3>表单复选框，带多种功能参数定义</h3></dd>
      <dd class="example">
        <section v-highlight style="display:none;">
           <pre><code v-text="code"></code></pre>
        </section>
        <section style="padding:10px;">
          <lv-gantt style="width:1000px;"></lv-gantt>
        </section>
      </dd>
    </dl>
    <dl>
      <dd><h3>参数说明</h3></dd>
      <dd class="attribute">
        <table>
          <tr><td>参数</td><td>说明</td><td>必填</td><td>类型</td><td>可选值</td><td>默认值</td></tr>
          <tr><td>v-model/value</td><td>绑定值</td><td>是</td><td>boolean|array|number|string</td><td>-</td><td>如果传入的非是数组，则表示单选</td></tr>
          <tr><td>disabled</td><td>禁用</td><td>-</td><td>boolean</td><td>-</td><td>false</td></tr>
          <tr><td>val</td><td>选中后回填的值</td><td>是</td><td>boolean|number|string</td><td>-</td><td>-</td></tr>
          <tr><td>before</td><td>选中前执行的函数</td><td>-</td><td>function</td><td>-</td><td>-</td></tr>
        </table>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Gantt} from '../../../packages/index.js';
  
  export default {
    name: 'Gantt',
    components: {
      lvGantt: Gantt
    },
    data () {
      return {
        selected: [],
        code: ''
      };
    },
    watch: {
      selected: function (val) {
        console.log('selected=', val);
      }
    },
    mounted: function () {
      this.code = 'beforeClk: function (callback) {\n' +
      '  if (window.confirm(\'确认选中？\')) {\n' +
      '    callback();\n' +
      '  }\n' +
      '}\n' + 
        '<lv-checkbox v-model="selected" val="2" :before="beforeClk">游泳</lv-checkbox>';
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
