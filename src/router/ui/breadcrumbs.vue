<template>
  <div class="wrap page-theme">
    <h1>面包屑</h1>
    <dl>
      <dd><h3>引入组件</h3></dd>
      <dd v-highlight>
        <pre><code>import {Breadcrumbs} from 'lv-web-ui';
Vue.component('lvBreadcrumbs', Breadcrumbs);</code></pre>
      </dd>
    </dl>
    <dl>
      <dd><h3>表单复选框，带多种功能参数定义</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code v-text="code"></code></pre>
        </section>
        <section style="padding:10px;">
          <lv-breadcrumbs :list="list" separator="/" :forward="true"></lv-breadcrumbs>
          <!-- <lv-breadcrumbs :list="list" separator-class="lv-icon-arrow-right"></lv-breadcrumbs> -->
        </section>
      </dd>
    </dl>
    <dl>
      <dd><h3>参数说明</h3></dd>
      <dd class="attribute">
        <table>
          <tr><td>参数</td><td>说明</td><td>必填</td><td>类型</td><td>可选值</td><td>默认值</td></tr>
          <tr><td>list</td><td>列表数据</td><td>是</td><td>array</td><td>-</td><td>[]</td></tr>
          <tr><td>separator</td><td>分隔符</td><td>与separator-class 2选1</td><td>string</td><td>-</td><td>-</td></tr>
          <tr><td>separator-class</td><td>分隔符样式名</td><td>与separator 2选1</td><td>string</td><td>-</td><td>-</td></tr>
          <tr><td>forward</td><td>跳转时候是否继承地址栏参数</td><td>-</td><td>boolean</td><td>-</td><td>false</td></tr>
        </table>
      </dd>
    </dl>
    <dl>
      <dd><h3>list 参数说明</h3></dd>
      <dd class="attribute">
        <table>
          <tr><td>参数</td><td>说明</td><td>必填</td><td>类型</td><td>可选值</td><td>默认值</td></tr>
          <tr><td>name</td><td>名称</td><td>是</td><td>string</td><td>-</td><td>-</td></tr>
          <tr><td>hash</td><td>hash跳转地址</td><td>-</td><td>string</td><td>-</td><td>-</td></tr>
          <tr><td>href</td><td>href跳转地址</td><td>-</td><td>string</td><td>-</td><td>-</td></tr>
        </table>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Breadcrumbs} from '../../../packages/index.js';
  
  export default {
    name: 'Checkbox',
    components: {
      lvBreadcrumbs: Breadcrumbs
    },
    data () {
      return {
        list: [
          { name: '首页', hash: '/index' },
          { name: '欢迎', href: '/home' },
          { name: '产品', hash: '' }
        ],
        code: ''
      };
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
