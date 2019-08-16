<template>
  <div class="wrap page-theme">
    <h1>主题色</h1>
    <dl>
      <dd><h3>通过全局CSS设置主题色</h3></dd>
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
