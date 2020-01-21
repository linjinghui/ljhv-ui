<!-- 
功能介绍：
1、
 -->

<template>
  <div :id="id" class="lv-mask" @click="clk"></div>
</template>

<script type="text/babel">
  export default {
    name: 'Mask',
    data: function () {
      return {
        id: 'mask_' + new Date().getTime() + parseInt(Math.random() * 100)
      };
    },
    methods: {
      clk: function () {
        this.$emit('click'); 
      }
    }
  };
</script>

<style scoped lang="scss">
  .lv-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
  }
</style>