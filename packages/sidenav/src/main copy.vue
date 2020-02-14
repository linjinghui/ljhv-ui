<!-- 
功能介绍：
1、
 -->

<template>
  <vperfect-scrollbar class="scroll-sidenar" :settings="settings">
    <vtree :nodes="menu" :setting="setting"></vtree>
  </vperfect-scrollbar>
</template>

<script type="text/babel">
  import vtree from 'vue-giant-tree';
  import VuePerfectScrollbar from 'vue-perfect-scrollbar';

  export default {
    name: 'Sidenar',
    components: {
      vtree,
      'vperfect-scrollbar': VuePerfectScrollbar
    },
    props: {
      // 菜单数据
      menu: {
        type: Array,
        default: function () {
          return [];
        }
      },
      setting: {
        type: Object,
        default: function () {
          return {
            view: {
              // showIcon: false,
              showLine: false
            }
          };
        }
      }
    },
    data: function () {
      return {};
    },
    watch: {},
    mounted: function () {
      // 
    },
    methods: {}
  };
</script>

<style lang="scss">
  .scroll-sidenar {
    line-height: initial;
    
    .ztree .button.bottom_close:before, .ztree .button.bottom_open:before, .ztree .button.center_close:before, .ztree .button.center_open:before, .ztree .button.noline_close:before, .ztree .button.noline_open:before, .ztree .button.root_close:before, .ztree .button.root_open:before, .ztree .button.roots_close:before, .ztree .button.roots_open:before {
      position: absolute;
      top: 5px;
      left: 5px;
      content: '';
      width: 6px;
      height: 6px;
      transition: transform .3s ease;
      transform: rotate(45deg);
      transform-origin: 75% 75%;
      border: solid 1px #666;
      border-left: 0;
      border-top: 0;
    }
    .ztree .button.bottom_open:before, .ztree .button.center_open:before, .ztree .button.noline_open:before, .ztree .button.root_open:before, .ztree .button.roots_open:before {
      transform: rotate(225deg);
    }
    .button.switch {
      float: right;
    }
    li {
      padding: 5px 0;
    }
  }
</style>
<style scoped lang="scss">
  .scroll-sidenar {
    width: 100%;
    height: 100%;
  }
  .wrap-sidenar {}
</style>