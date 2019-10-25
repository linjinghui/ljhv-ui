<template>
  <div class="wrap page-home">
    <header>
      <h1>
        <router-link to="/navlist"><i class="cicon-list"></i></router-link>        
        LV-WEB-UI 使用文档
      </h1>
    </header>
    <nav>
      <lv-sidenav :list="navData" :showAll="true" :showMult="true" :hideArrow="false">
        <router-link slot="item" slot-scope="props" :to="props.item.path" v-if="props.item.path">{{props.item.title}}</router-link>
      </lv-sidenav>
    </nav>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
  import {Sidenav} from '../../../packages/index.js';
  
  export default {
    name: 'Index',
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
              { title: '刻度尺', path: '/rule' },
              { title: '滑块验证码', path: '/slidercode' }
            ]
          }
        ]
      };
    },
    watch: {
      $route (to, from) {
        console.log(to.name);
        console.log(from);
      }
    },
    mounted: function () {
      // 
    },
    methods: {}
  };
</script>

<style lang="scss">
  .page-home > section > div {
    > dl {
      margin-top: 20px;
      line-height: 28px;
      
      > dd {
        padding-left: 20px;
      }

      > .example {
        position: relative;
        display: flex;
        flex-shrink: 0;

        > section {
          width: 40%;
          border: solid 1px #eee;
        }
        > section:first-of-type {
          width: 60%;
        }
      }
    }
  }

  @media (max-width:719px) {
    .page-home {
      > header .cicon-list {
        display: inline-block!important;
      }
      > nav {
        display: none;
      }
      > section {
        width: 100%!important;

        > div > dl > .example {
          flex-wrap: wrap;
          > section {
            margin-bottom: 20px;
            width: 100%!important;
          }
        }
      }
    }
  }
</style>
<style scoped lang="scss">
  .page-home {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #f2f2f2;

    > header {
      padding-left: 20px;
      height: 60px;
      line-height: 60px;
      border-bottom: solid 1px #eee;
      background-color: #fff;

      .cicon-list {
        display: none;
        font-size: 40px;
        cursor: pointer;
      }
    }

    > nav {
      float: left;
      // padding-left: 20px;
      width: 220px;
      height: calc(100% - 60px);
      // line-height: 28px;
      overflow: auto;

      > dl {
        margin-top: 10px;
        > dd {
          padding-left: 10px;
          cursor: pointer;
        }
      }
    }

    > section {
      float: left;
      width: calc(100% - 220px);
      height: calc(100% - 60px);
      background-color: #fff;
      overflow: auto;
      color: #666;
    }
    > section > div {
      padding: 20px;
    }
  }
</style>