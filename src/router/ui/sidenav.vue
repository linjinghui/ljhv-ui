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
           <pre><code v-text="code"></code></pre>
        </section>
        <section style="padding:10px;">
          <div style="width:240px;height:400px;border:solid 1px;">
            <lv-sidenav background="red" color="#fff" :list="navData" :showAll="false" :showMult="true" :hideArrow="false"></lv-sidenav>
          </div>
        </section>
      </dd>
    </dl>
    <dl>
      <dd><h3>参数说明</h3></dd>
      <dd class="attribute">
        <table>
          <tr><td>参数</td><td>说明</td><td>必填</td><td>类型</td><td>可选值</td><td>默认值</td></tr>
          <tr><td>list</td><td>导航列表数据</td><td>是</td><td>array</td><td>-</td><td>{icon, title, path, children}</td></tr>
          <tr><td>openAll</td><td>是否打开所有</td><td>-</td><td>boolean</td><td>-</td><td>false</td></tr>
          <tr><td>showArrow</td><td>是否显示箭头</td><td>-</td><td>boolean</td><td>-</td><td>true</td></tr>
          <tr><td>showMix</td><td>是否显示最小化按钮</td><td>-</td><td>boolean</td><td>-</td><td>true</td></tr>
          <tr><td>forward</td><td>是否继承地址栏参数</td><td>-</td><td>boolean</td><td>-</td><td>false</td></tr>
          <tr><td>type</td><td>跳转类型</td><td>是</td><td>string</td><td>hash|href</td><td>hash</td></tr>
          <tr><td>color</td><td>文本色</td><td>-</td><td>色值(#333|red|rgba)</td><td>-</td><td>-</td></tr>
          <tr><td>background</td><td>背景色</td><td>-</td><td>色值(#333|red|rgba)</td><td>-</td><td>-</td></tr>
        </table>
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
        code: '',
        navData: [
          {
            title: '开始',
            children: [
              { title: '快速上手', path: '/start', icon: 'lv-icon-ewm' },
              { title: '更新日志', path: '', icon: 'lv-icon-date', children: [{ title: '快手', path: '/ks', icon: 'lv-icon-ewm' }, { title: '更志', path: '/gz', icon: 'lv-icon-date' }] }
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
      this.code = '<lv-sidenav background="red" color="#fff" :list="navData" :showAll="false" :showMult="true" :hideArrow="false"></lv-sidenav>';
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-theme {}
</style>
