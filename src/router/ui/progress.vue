<template>
  <div class="wrap page-theme">
    <h1>进度条</h1>
    <dl>
      <dd><h3>引入组件</h3></dd>
      <dd v-highlight>
        <pre><code>import {Progress} from 'lv-web-ui';
Vue.component('lvProgress', Progress);</code></pre>
      </dd>
    </dl>
    <dl>
      <dd><h3>长形进度条，支持自定义进度条颜色</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code v-text="code"></code></pre>
        </section>
        <section style="padding:10px;">
          <lv-progress style="height:50px;" progress="80" themebar="#16aa6b" type="square"></lv-progress>
        </section>
      </dd>
    </dl>
    <dl>
      <dd><h3>参数说明</h3></dd>
      <dd class="attribute">
        <table>
          <tr><td>参数</td><td>说明</td><td>必填</td><td>类型</td><td>可选值</td><td>默认值</td></tr>
          <tr><td>progress</td><td>进度百分比</td><td>是</td><td>number</td><td>-</td><td>0</td></tr>
          <tr><td>type</td><td>进度条类型</td><td>-</td><td>string</td><td>circle|cylinder|square</td><td>square</td></tr>
          <tr><td>themebar</td><td>进度条色值</td><td>-</td><td>色值</td><td>-</td><td>-</td></tr>
          <tr><td>theme</td><td>进度条底色</td><td>-</td><td>色值</td><td>-</td><td>#e5e9f2</td></tr>
        </table>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Progress} from '../../../packages/index.js';
  
  export default {
    name: 'Progress',
    components: {
      lvProgress: Progress
    },
    data () {
      return {
        code: ''
      };
    },
    mounted: function () {
      this.code = '<lv-progress style="height:50px;" progress="80" themebar="#16aa6b" type="square"></lv-progress>';
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
