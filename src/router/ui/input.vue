<template>
  <div class="wrap page-theme">
    <h1>输入框</h1>
    <dl>
      <dd><h3>引入组件</h3></dd>
      <dd v-highlight>
        <pre><code>import {Input} from 'lv-web-ui';
Vue.component('lvInput', Input);</code></pre>
      </dd>
    </dl>
    <dl>
      <dd><h3>带清空按钮的输入框，支持规则校验，自定义左右小图标</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code v-text="code"></code></pre>
        </section>
        <section style="padding:10px;">
          <lv-input v-model="name" type="text">
            <p slot="left" style="padding:0 10px;">姓名：</p>
            <i class="icon lv-icon-top" slot="right"></i>
          </lv-input>
        </section>
      </dd>
    </dl>
    <dl>
      <dd><h3>参数说明</h3></dd>
      <dd class="attribute">
        <table>
          <tr><td>参数</td><td>说明</td><td>必填</td><td>类型</td><td>可选值</td><td>默认值</td></tr>
          <tr><td>v-model/value</td><td>绑定值</td><td>否</td><td>string</td><td>-</td><td>-</td></tr>
          <tr><td>type</td><td>表单type属性</td><td>-</td><td>string</td><td>text|password其他原生input的type值</td><td>text</td></tr>
          <tr><td>name</td><td>表单name属性</td><td>-</td><td>string</td><td>-</td><td>-</td></tr>
          <tr><td>placeholder</td><td>占位文本</td><td>-</td><td>string</td><td>-</td><td>-</td></tr>
          <tr><td>maxlength</td><td>内容长度</td><td>否</td><td>number</td><td>-</td><td>-</td></tr>
          <tr><td>readonly</td><td>是否只读</td><td>否</td><td>boolean</td><td>-</td><td>false</td></tr>
          <tr><td>nopaste</td><td>是否不允许粘贴</td><td>否</td><td>boolean</td><td>-</td><td>false</td></tr>
          <tr><td>autofocus</td><td>是否自动聚焦</td><td>否</td><td>boolean</td><td>-</td><td>false</td></tr>
          <tr><td>disabled</td><td>是否禁用</td><td>否</td><td>boolean</td><td>-</td><td>false</td></tr>
          <tr><td>clear</td><td>是否需要清除按钮</td><td>否</td><td>boolean</td><td>-</td><td>true</td></tr>
        </table>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Input} from '../../../packages/index.js';
  
  export default {
    name: 'Input',
    components: {
      lvInput: Input
    },
    data () {
      return {
        name: 'ssss',
        code: ''
      };
    },
    watch: {
      name: function (data) {
        console.log(data);
      }
    },
    mounted: function () {
      this.code = '<lv-input v-model="name" type="text"> \n' +
      '  <p slot="left" style="padding:0 10px;">姓名：</p> \n' +
      '  <i class="icon lv-icon-top" slot="right"></i> \n' +
      '</lv-input>';
    },
    methods: {
      cbk_search (data) {
        console.log('==search==', data);
      },
      cbk_enter (data) {
        console.log('==enter==', data);
      }
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-theme {}
</style>
