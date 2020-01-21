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
          <pre><code class="html" v-text="code"></code></pre>
        </section>
        <section style="padding:10px;">
          <i class="lv-icon-arrow-bottom-2"></i>
          <i class="lv-icon-arrow-top-2"></i>
          <i class="lv-icon-arrow-left-2"></i>
          <i class="lv-icon-arrow-right-2"></i>
          <i class="lv-icon-point-2"></i>
          <i class="lv-icon-user"></i>
          <i class="lv-icon-eye"></i>
          <i class="lv-icon-ewm"></i>
          <i class="lv-icon-arrow-left"></i>
          <i class="lv-icon-arrow-right"></i>
          <i class="lv-icon-arrow-top"></i>
          <i class="lv-icon-arrow-bottom"></i>
          <i class="lv-icon-tick"></i>
          <i class="lv-icon-top"></i>
          <i class="lv-icon-point"></i>
          <i class="lv-icon-ling"></i>
          <i class="lv-icon-x"></i>
          <i class="lv-icon-loading move-loop"></i>
          <i class="lv-icon-eye-close"></i>
          <i class="lv-icon-pwd"></i>
          <i class="lv-icon-x-2"></i>
          <i class="lv-icon-date"></i>
        </section>
      </dd>
    </dl>
  </div>
</template>

<script>
  export default {
    name: 'Theme',
    data () {
      return {
        code: ''
      };
    },
    mounted: function () {
      this.code = '<i class="lv-icon-x-2"></i>';
    },
    methods: {}
  };
</script>

<style scoped lang="scss">
  [class*=lv-icon] {
    font-size: 40px;
  }
</style>
