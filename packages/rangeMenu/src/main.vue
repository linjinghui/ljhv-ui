<!--
功能介绍：
1、可通过模版自定义显示内容
例如 <template slot-scope="props">{{ props.item.name +  props.item.age}}</template>
 -->

<template>
  <vperfect-scrollbar class="rangeMenu" :settings="{wheelSpeed:0.5}">
    <a v-for="(item,index) in list" :key="'rm_item_'+index" class="item">
      <slot :item="item">{{item}}</slot>
      <i class="lv-icon-x" @click="clk_del(index)" v-if="!disabled&&!item.disabled"></i>
    </a>
    <a class="add theme-c" @click="clk_add" v-if="!disabled">添加</a>
  </vperfect-scrollbar>
</template>

<script type="text/babel">
  import Button from '../../button/src/main.vue';
  import VuePerfectScrollbar from 'vue-perfect-scrollbar';

  export default {
    name: 'RangeMenu',
    components: {
      lvButton: Button,
      'vperfect-scrollbar': VuePerfectScrollbar
    },
    data: function () {
      return {
        id: 'rangeMenu_' + new Date().getTime() + parseInt(Math.random() * 100)
      };
    },
    props: {
      list: {
        default: function () {
          return [];
        }
      },
      disabled: {
        default: false
      }
    },
    methods: {
      emtVal: function (val) {
        this.$emit('update:list', val);
      },
      clk_add: function () {
        this.$emit('add');
      },
      clk_del: function (index) {
        let data = '';

        try {
          data = JSON.parse(JSON.stringify(this.list));
          data.splice(index, 1);
          this.emtVal(data);
        } catch (e) {
          //
        }
      }
    }
  };
</script>

<style scoped lang="scss">
  .rangeMenu {
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    align-items: center;
    max-height: 210px;
    padding-left: 5px;
    padding-bottom: 5px;
    border: solid 1px #ddd;
    border-radius: 4px;
    font-size: 14px;
    user-select: none;
    
    > a {
      display: inline-flex;
      flex-shrink: 0;
      flex-wrap: wrap;
      align-items: center;
      margin-top: 5px;
      margin-right: 5px;
      padding: 0 5px;
      border-radius: 4px;
      cursor: default;

      > .lv-icon-x {
        margin-left: 5px;
        font-size: 16px;
        cursor: pointer;
      }
      > .lv-icon-x:hover {
        color: #c0c4cc;
      }
    }
    > .item {
      color: #909399;
      background-color: rgba(240, 242, 245, 1);
    }
    > .item:hover {
      background-color: rgba(240, 242, 245, 0.85);
    }
    > .add:hover {
      opacity: 0.85;
      cursor: pointer;
    }
  }
</style>