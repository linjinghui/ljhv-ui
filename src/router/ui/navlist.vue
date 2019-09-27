<template>
  <div class="wrap page-sidenav">
    <lv-sidenav :list="navData" :showAll="true" :showMult="true" :hideArrow="false">
      <router-link slot="item" slot-scope="props" :to="props.item.path" v-if="props.item.path">{{props.item.title}}</router-link>
    </lv-sidenav>
  </div>
</template>

<script>
  import {Sidenav} from '../../../packages/index.js';
  
  export default {
    name: 'Sidenav',
    components: {
      lvSidenav: Sidenav
    },
    data () {
      return {
        navData: [
          {
            title: '开始',
            children: [
              { title: '快速上手', path: '/start' },
              { title: '更新日志', path: '/log' }
            ]
          },
          {
            title: '全局组件',
            children: [
              { title: '全局设置', path: '/theme' },
              { title: '文本大小', path: '/font' },
              { title: '图标', path: '/cicon' },
              { title: '确认框', path: '/confirm' },
              { title: '加载中', path: '/loading' },
              { title: '提示框', path: '/tip' }
            ]
          },
          {
            title: '表单组件',
            children: [
              { title: '按钮', path: '/button' },
              { title: '输入框', path: '/input' },
              { title: '单选框', path: '/radio' },
              { title: '复选框', path: '/checkbox' },
              { title: '开关', path: '/swith' },
              { title: '下拉框', path: '/dropmenu' },
              { title: '日期选择器', path: '/datepicker' },
              { title: '文本域', path: '/textarea' }
            ]
          },
          {
            title: '组件',
            children: [
              { title: '表格', path: '/table' },
              { title: '滑块', path: '/slider' },
              { title: '菜单', path: '/menu' },
              { title: '进度条', path: '/progress' },
              { title: 'title提示', path: '/tooltip' },
              { title: '区域菜单', path: '/rangemenu' },
              { title: '侧边栏', path: '/sidebar' },
              { title: '图片', path: '/img' },
              { title: '穿梭框', path: '/shuttle' },
              { title: '分页工具', path: '/pagebar' },
              { title: '富文本编辑器', path: '/editor' },
              { title: '加载更多', path: '/loadmore' },
              { title: '侧边导航', path: '/sidenav' },
              { title: '刻度尺', path: '/rule' }
            ]
          }
        ]
      };
    },
    mounted: function () {
      // 
    },
    methods: {
      parseHtmlStr (htmlstr) {
        console.log(htmlstr.replace(/</g, '&lt;').replace(/>/g, '&gt;'));
      }
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-theme {}
</style>
