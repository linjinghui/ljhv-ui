<template>
  <div class="wrap page-theme">
    <h1>类似title属性的提示</h1>
    <dl>
      <dd><h3>引入组件</h3></dd>
      <dd v-highlight>
        <pre><code>import {Tooltip} from 'lv-web-ui';
Vue.component('lvTooltip', Tooltip);</code></pre>
      </dd>
    </dl>
    <dl>
      <dd><h3>鼠标滑过弹出提示</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code v-text="code"></code></pre>
        </section>
        <section style="padding:10px;">
          <lv-tooltip text="提示内容" :arrow="false" :followCursor="false">
            <i>text支持HTML代码</i>
          </lv-tooltip>
        </section>
      </dd>
    </dl>
    <dl>
      <dd><h3>参数说明</h3></dd>
      <dd class="attribute">
        <table>
          <tr><td>参数</td><td>说明</td><td>必填</td><td>类型</td><td>可选值</td><td>默认值</td></tr>
          <tr><td>text</td><td>提示文本-支持HTML代码</td><td>是</td><td>-</td><td>-</td><td>-</td></tr>
          <tr><td>arrow</td><td>是否显示箭头</td><td>-</td><td>boolean</td><td>-</td><td>true</td></tr>
          <tr><td>followCursor</td><td>是否跟随鼠标</td><td>-</td><td>boolean</td><td>-</td><td>false</td></tr>
        </table>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Tooltip} from '../../../packages/index.js';
  
  export default {
    name: 'Tooltip',
    components: {
      lvTooltip: Tooltip
    },
    data () {
      return {
        code: ''
      };
    },
    mounted: function () {
      this.code = '<lv-tooltip text="提示内容" :arrow="false" :followCursor="false">\n' +
      '  <button>text支持HTML代码</button>\n' +
      '</lv-tooltip>';
    },
    methods: {
      parseHtmlStr (htmlstr) {
        console.log(htmlstr.replace(/</g, '&lt;').replace(/>/g, '&gt;'));
      }
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-theme {}
</style>
