<!--
功能介绍：
1、
 -->

<template>
  <vperfect-scrollbar class="vtree" :settings="{wheelSpeed:0.5}">
    <vtree :nodes="nodes" :setting="setting" v-on="$listeners"></vtree>
  </vperfect-scrollbar>
</template>

<script type="text/babel">
  import vtree from 'vue-giant-tree';
  import VuePerfectScrollbar from 'vue-perfect-scrollbar';

  export default {
    name: 'Vtree',
    props: {
      nodes: {
        type: Array,
        default: function () {
          return [];
        }
      },
      setting: {
        type: Array,
        default: function () {
          return {};
        }
      }
    },
    components: {
      'vtree': vtree,
      'vperfect-scrollbar': VuePerfectScrollbar
    }
  };
</script>

<style lang="scss">
  .vtree {
    line-height: 30px;
  }
  .vtree .button.chk:after {
    top: 0px!important;
    left: 3px!important;
  }
  .vtree .button.checkbox_true_part:after, .ztree .button.checkbox_true_part_focus:after {
    top: 5px!important;
    left: 2px!important;
    width: 8px!important;
  }
</style>