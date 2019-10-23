<template>
  <div class="wrap page-theme">
    <h1>侧边导航</h1>
    <dl>
      <dd><h3>引入组件</h3></dd>
      <dd v-highlight>
        <pre><code>import {Sidenav} from 'lv-web-ui';
Vue.component('lvSidenav', Sidenav);</code></pre>
      </dd>
    </dl>
    <dl>
      <dd><h3>可根据路由地址自动识别激活项</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code>// list 列表数据，格式：[{title: '导航名称', path: '跳转地址', children: ''}]
// showAll: 是否显示所有节点
// showMult: 是否展开多个节点
// hideArrow: 是否隐藏箭头
&lt;lv-sidenav :list="navData" :showAll="false" :showMult="true" :hideArrow="false"&gt;&lt;/lv-sidenav&gt;
&lt;script type="text/babel"&gt;
export default {
  data () {
    return {
      navData: [{
        title: '开始',
        children: [
          { title: '快速上手', path: '/start' },
          { title: '更新日志', path: '/log' }
        ]
      }]
    };
  },
  methods: {
    xxx () {}
  }
}
&lt;/script&gt;</code></pre>
        </section>
        <section style="padding:10px;">
          <div style="width:240px;height:400px;border:solid 1px;">
            <lv-sidenav :list="navData" :showAll="false" :showMult="true" :hideArrow="false"></lv-sidenav>
          </div>
        </section>
      </dd>
    </dl>
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
