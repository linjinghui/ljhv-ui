<!-- 
功能介绍：
1、
 -->

<template>
  <div class="weather" :id="id">weather</div>
</template>

<script type="text/babel">
  export default {
    name: 'Weather',
    data: function () {
      return {
        id: 'weather_' + new Date().getTime() + parseInt(Math.random() * 100)
      };
    },
    props: {
      value: {
        default: ''
      }
    },
    watch: {
      value: function (val, val2) {
        if (val && val2 === '') {
          // 第一次加载
        }
      }
    },
    computed: {
      // 
    },
    beforeDestroy: function () {
      // 
    },
    mounted: function () {
      // 
    },
    methods: {
      // 
    }
  };
</script>

<style scoped lang="scss">
  .weather {}
</style>