<template>
  <div class="wrap page-theme">
    <h1>选择器</h1>
    <dl>
      <dd><h3>引入组件</h3></dd>
      <dd v-highlight>
        <pre><code>import {Select} from 'lv-web-ui';
Vue.component('lvSelect', Select);</code></pre>
      </dd>
    </dl>
    <dl>
      <dd><h3>表单复选框，带多种功能参数定义</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code v-text="code"></code></pre>
        </section>
        <section style="padding:10px;">
          <lv-select :list="list" @click="clkSelect">
            <i id="123">下拉选择器</i>
          </lv-select>
        </section>
      </dd>
    </dl>
    <dl>
      <dd><h3>参数说明</h3></dd>
      <dd class="attribute">
        <table>
          <tr><td>参数</td><td>说明</td><td>必填</td><td>类型</td><td>可选值</td><td>默认值</td></tr>
          <tr><td>list</td><td>列表数据</td><td>是</td><td>array</td><td>-</td><td>-</td></tr>
          <tr><td>trigger</td><td>触发方式</td><td>-</td><td>string</td><td>click|hover</td><td>click</td></tr>
          <tr><td>@click</td><td>点击回调的函数</td><td>-</td><td>function</td><td>-</td><td>-</td></tr>
        </table>
      </dd>
    </dl><dl>
      <dd><h3>list 参数说明</h3></dd>
      <dd class="attribute">
        <table>
          <tr><td>参数</td><td>说明</td><td>必填</td><td>类型</td><td>可选值</td><td>默认值</td></tr>
          <tr><td>icon</td><td>图标样式名</td><td>-</td><td>string</td><td>-</td><td>-</td></tr>
          <tr><td>name</td><td>触发方式</td><td>是</td><td>string</td><td>-</td><td>-</td></tr>
        </table>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Select} from '../../../packages/index.js';
  
  export default {
    name: 'Select',
    components: {
      lvSelect: Select
    },
    data () {
      return {
        list: [
          { name: '下拉1', icon: 'lv-icon-ewm' },
          { name: '下拉2' },
          { name: '下拉3', icon: 'lv-icon-ewm' }
        ],
        code: ''
      };
    },
    watch: {
      selected: function (val) {
        console.log('selected=', val);
      }
    },
    mounted: function () {
      this.code = '<lv-select :list="list" @click="clkSelect">\n' +
      '  <i id="123">下拉选择器</i>\n' +
      '</lv-select>';
    },
    methods: {
      clkSelect: function (data) {
        console.log('==clkSelect==', data);
      }
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-theme {}
</style>
