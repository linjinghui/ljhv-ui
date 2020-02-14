<!-- 
面包屑
功能介绍：
1、name, hash -->

<template>
  <ul class="breadcumbs">
    <template v-for="(item,index) in list">
      <li :key="item.name+'_bdc'" :class="{'active':item.hash||item.href,'theme-c':(item.hash||item.href)&&item.hover}" @mouseenter="mouseEnter(item)" @mouseleave="mouseLeave(item)" @click="clkItem(item)">{{item.name}}</li>
      <li :key="item.name+'_bdc_spt'" class="separator" :class="separatorClass?('icon '+separatorClass):''" v-if="index<list.length-1">{{separator}}</li>
    </template>
  </ul>
</template>

<script type="text/babel">
  export default {
    name: 'Breadcrumbs',
    data: function () {
      return {
        id: 'btn_' + new Date().getTime() + parseInt(Math.random() * 100)
      };
    },
    props: {
      list: {
        default: function () {
          return [];
        }
      },
      // 分隔符
      separator: {
        default: function () {
          return '';
        }
      },
      // 分隔符样式
      separatorClass: {
        default: function () {
          return '';
        }
      },
      // 是否继承地址栏参数
      forward: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      mouseEnter: function (data) {
        this.$set(data, 'hover', true);
      },
      mouseLeave: function (data) {
        this.$set(data, 'hover', false);
      },
      clkItem: function (data) {
        var paramstr = location.href.split('?')[1];
        var pth = data.hash || data.href;

        if (this.forward && paramstr) {
          pth += (pth.indexOf('?') === -1 ? '?' : '&') + paramstr;
        }
        if (data.href) {
          location.href = pth;
        } else if (data.hash) {
          location.hash = pth;
        }
      }
    }
  };
</script>

<style scoped lang="scss">
  .breadcumbs {
    position: relative;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    overflow: hidden;
    user-select: none;
    line-height: initial;
    padding: 6px 0;
    font-size: 14px;

    > li {
      display: flex;
      flex-shrink: 0;
      align-items: center;

      > i {
        display: inline-block;
        margin-right: 5px;
      }
    }

    > li.active {
      font-weight: bold;
      cursor: pointer;
    }

    .separator {
      padding-left: 10px;
      padding-right: 10px;
      color: #ccc;
      font-size: 50%;
    }
    .separator.icon {
      padding-left: 6px;
      padding-right: 6px;
    }
  }
</style>