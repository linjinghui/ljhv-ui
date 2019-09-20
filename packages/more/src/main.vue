<!-- 
功能介绍：
1、
 -->

<template>
  <p class="wrap-more" :id="id" v-html="status==='more'?'加载更多':status==='loading'?'加载中...':'没有更多数据'"></p>
</template>

<script type="text/babel">
  export default {
    name: 'More',
    data: function () {
      return {
        id: 'more_' + new Date().getTime() + parseInt(Math.random() * 100),
        timer: ''
      };
    },
    props: {
      status: {
        // more | loading | nomore
        default: 'more'
      },
      wrapId: ''
    },
    watch: {},
    beforeDestroy: function () {
      clearInterval(this.timer);
    },
    mounted: function () {
      var _this = this;

      this.timer = setInterval(function () {
        var wrap = document.getElementById(_this.wrapId) || document.documentElement;
        var dom = document.getElementById(_this.id);
        // 元素顶端到可见区域顶端的距离
        var top = dom.getBoundingClientRect().top - wrap.getBoundingClientRect().top;
        // 浏览器可见区域高度。
        var se = wrap.clientHeight;

        if (top <= se) {
          _this.status === 'more' && _this.$emit('callback');
        }
      }, 1000);
    },
    methods: {}
  };
</script>

<style scoped lang="scss">
  .wrap-more {
    display: block;
    padding: 10px;
    text-align: center;
  }
</style>