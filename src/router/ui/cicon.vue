<template>
  <div class="wrap page-theme">
    <h1>css图标</h1>
    <dl>
      <dd><h3>概述</h3></dd>
      <dd>提供了几种常用的纯css3样式图标，通过设置font-size 属性控制大小</dd>
    </dl>
    <dl>
      <dd><h3>图标</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code># -cbdr 表示带边框
# -chr 表示鼠标移过效果
# -crle 表示圆角
# move-loop 表示转圈效果
&lt;i class="cicon-arrow-right-cbdr-crle"&gt;&lt;/i&gt;</code></pre>
        </section>
        <section style="padding:10px;">
          <i class="cicon-sub-chr-cpt"></i>
          <i class="cicon-plus-cpt-chr"></i>
          <i class="cicon-cross-cpt"></i>
          <i class="cicon-cross-crle-chr"></i>
          <i class="cicon-cross-crle-cbdr"></i>
          <i class="cicon-tick"></i>
          <i class="cicon-search-cpt-chr"></i>
          <i class="cicon-search-2-cpt"></i>
          <i class="cicon-play"></i>
          <i class="cicon-triangle-right"></i>
          <i class="cicon-triangle-left"></i>
          <i class="cicon-triangle-top"></i>
          <i class="cicon-triangle-bottom"></i>
          <i class="cicon-arrow-right-cbdr-crle"></i>
          <i class="cicon-arrow-left"></i>
          <i class="cicon-arrow-top"></i>
          <i class="cicon-arrow-bottom"></i>
          <i class="cicon-loading move-loop">
            <span></span><span></span><span></span>
          </i>
          <i class="cicon-exclamation-crle-cbdr"></i>
          <i class="cicon-calendar">
            <span></span>
          </i>
          <i class="cicon-dbarrow-right"></i>
          <i class="cicon-dbarrow-left"></i>
          <i class="cicon-dbarrow-top"></i>
          <i class="cicon-dbarrow-bottom"></i>
          <i class="cicon-list"></i>
        </section>
      </dd>
    </dl>
  </div>
</template>

<script>
  // import {Button} from 'web-base-ui';
  
  export default {
    name: 'Theme',
    components: {
      // cmpButton: Button
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
