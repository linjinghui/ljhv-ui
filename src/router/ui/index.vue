<template>
  <div class="wrap page-home">
    <header>
      <h1>
        <router-link to="/navlist"><i class="cicon-list"></i></router-link>        
        LV-WEB-UI 使用文档
      </h1>
    </header>
    <lv-sidenav class="nav" :list="navData" :showAll="true" :showMult="true" :hideArrow="false" background="#545c64" color="#fff"></lv-sidenav>
    <section>
      <lv-routrecord style="margin-left:100px;"></lv-routrecord>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
  import {Sidenav, Routrecord} from '../../../packages/index.js';
  
  export default {
    name: 'Index',
    components: {
      lvSidenav: Sidenav,
      lvRoutrecord: Routrecord
    },
    data () {
      return {
        navData: [
          {
            icon: 'lv-icon-ewm', 
            title: '开始',
            children: [
              { title: '快速上手', path: '/start' },
              { title: '更新日志', path: '', children: [{ title: '快手', path: '/ks', icon: 'lv-icon-ewm' }, { title: '更志', path: '/gz', icon: 'lv-icon-date' }] }
            ]
          },
          {
            icon: 'lv-icon-ewm', 
            title: '全局组件',
            children: [
              { title: '全局设置', path: '/theme' },
              { title: '文本大小', path: '/font' },
              { title: '图标', path: '/cicon' },
              { title: '加载中', path: '/loading' },
              { title: '提示框', path: '/tip' },
              { title: '确认框', path: '/confirm' },
              { title: '弹窗输入框', path: '/prompt' }
            ]
          },
          {
            icon: 'lv-icon-ewm', 
            title: '表单组件',
            children: [
              { title: '按钮', path: '/button' },
              { title: '输入框', path: '/input' },
              { title: '单选框', path: '/radio' },
              { title: '复选框', path: '/checkbox' },
              { title: '开关', path: '/swith' },
              { title: '下拉框', path: '/dropmenu' },
              { title: '日期选择器', path: '/datepicker' },
              { title: '文本域', path: '/textarea' },
              { title: '上传文件', path: '/upload' },
              { title: '表单', path: '/form' }
            ]
          },
          {
            icon: 'lv-icon-ewm', 
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
              { title: '滑块验证码', path: '/slidercode' },
              { title: '树形', path: '/tree' },
              { title: '面包屑', path: '/breadcrumbs' },
              { title: '路由记录', path: '/routrecord' },
              { title: '选择器', path: '/select' },
              // { title: '天气预报-未实现', path: '/weather' },
              { title: '数字键盘', path: '/numberkey' },
              { title: '锁屏', path: '/lock' }
            ]
          }
        ]
      };
    }
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

      > .attribute {
        table {
          table-layout: fixed;
          width: 100%;
          border: solid 1px #ddd;
          tr {
            border-bottom: solid 1px #ddd;
          }
          td {
            padding: 5px;
          }
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

    > .nav {
      float: left;
      // padding-left: 20px;
      width: 220px;
      height: calc(100% - 60px);
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