<template>
  <div class="wrap page-log">
    <h1>更新日志</h1>
    <!-- <dl>
      <dt><h3>1.2.5<small> 2018-08-17</small></h3></dt>
      <dd>1、修改 yd-lightbox 显示方式。</dd>
      <dd>2、修改 yd-lightbox 显示方式。</dd>
    </dl> -->
  </div>
</template>

<script>
  // import {Button} from 'web-base-ui';
  
  export default {
    name: 'Log',
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
  .page-log {
    > dl {
      > dt > h3:before {
        content: '* ';
        color: #ff5500;
      }
    }
  }
</style>
