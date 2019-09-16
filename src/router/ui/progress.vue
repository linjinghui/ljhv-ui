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
      <dd><h3>圆形进度条，支持自定义进度条颜色</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code>// progress 进度百分比
// theme 底色
// themebar 进度条色值
&lt;lv-progress style="width:150px;height:150px;" progress="80" themebar="#16aa6b" type="circle"&gt;&lt;/lv-progress&gt;
</code></pre>
        </section>
        <section style="padding:10px;">
          <lv-progress style="width:150px;height:150px;" progress="80" themebar="#16aa6b" type="circle"></lv-progress>
        </section>
      </dd>
    </dl>

    <dl>
      <dd><h3>长形进度条，支持自定义进度条颜色</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code>&lt;lv-progress style="height:150px;" progress="80" themebar="#16aa6b" type="square"&gt;&lt;/lv-progress&gt;</code></pre>
        </section>
        <section style="padding:10px;">
          <lv-progress style="height:50px;" progress="80" themebar="#16aa6b" type="square"></lv-progress>
        </section>
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
        // 
      };
    },
    mounted: function () {
      // 
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
