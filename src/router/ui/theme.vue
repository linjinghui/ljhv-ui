<template>
  <div class="wrap page-theme">
    <h1>全局通用</h1>
    <dl>
      <dd><h3>主题色</h3></dd>
      <dd>通过全局CSS设置主题色</dd>
      <dd v-highlight>
        <pre><code># 以下设置主题色为绿色
.theme-c {
  color: #16aa6b;
}
.theme-b {
  color: #fff;
  background-color: #16aa6b;
}
.theme-bc {
  border-color: #16aa6b;
}</code></pre>
      </dd>
    </dl>
    <dl>
      <dd><h3>位置对齐</h3></dd>
      <dd>通过给元素添加class设置位置。center-hv|水平、垂直居中,center-h|水平居中,center-v|垂直居中</dd>
      <dd class="example">
        <section v-highlight>
           <pre><code>&lt;div class="center-hv" style="width:200px;height:30px;"&gt;center-hv|水平、垂直居中&lt;/div&gt;
&lt;div class="center-v" style="width:140px;height:30px;"&gt;center-v|垂直居中&lt;/div&gt;
&lt;div class="center-h" style="width:140px;height:30px;"&gt;center-h|水平居中&lt;/div&gt;</code></pre>
        </section>
        <section style="position:relative;padding:10px;height:200px;">
          <div class="center-hv theme-b" style="width:200px;height:30px;line-height:30px;text-align:center;">center-hv|水平、垂直居中</div>
          <div class="center-v theme-b" style="width:140px;height:30px;line-height:30px;text-align:center;">center-v|垂直居中</div>
          <div class="center-h theme-b" style="width:140px;height:30px;line-height:30px;text-align:center;">center-h|水平居中</div>
        </section>
      </dd>
    </dl>
    <dl>
      <dd><h3>内容不可选中</h3></dd>
      <dd>通过给元素添加class="no-select", 设置元素不可被选中</dd>
      <dd class="example">
        <section v-highlight>
           <pre><code>&lt;p class="no-select"&gt;内容不可选中&lt;/p&gt;</code></pre>
        </section>
        <section style="position:relative;padding:10px;">
          <p class="no-select">内容不可选中</p>
        </section>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Button} from 'web-base-ui';
  
  export default {
    name: 'Theme',
    components: {
      lvButton: Button
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
      xxx: function () {
        // 
      }
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-theme {}
</style>
