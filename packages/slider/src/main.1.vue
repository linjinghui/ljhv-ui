<!--
功能介绍：
1、自定义百分比位置 - percent - 实时返回
2、自定义主题色 - theme
3、禁用 - disabled
4、最大值 - max - 用于tip提示
 -->
<template>
  <div class="wrap-drag" style="position:relative;width:300px;height:300px;border:solid 1px;">
    <div class="bar" v-drag:x style="width:100px;height:50px;border:solid 1px red;"></div>
  </div>
</template>

<script>
  // import Tooltip from '../../tooltip/index.js';
  import drag from '../../../src/directives/drag.js';

  console.log('===', drag);
  export default {
    name: 'Slider',
    components: {},
    props: {},
    data () {
      return {};
    },
    computed: {},
    directives: {
      drag
    },
    beforeDestroy: function () {
      // 
    },
    mounted: function () {
      // 
    },
    methods: {}
  };
</script>

<style type="text/css" scoped>
  .slider {
    position: relative;
    width: 100%;
    user-select: none;
    overflow: hidden;
    opacity: 1!important;
  }
  </style>