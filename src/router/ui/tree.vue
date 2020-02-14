<template>
  <div class="wrap page-theme">
    <h1>树形</h1>
    <dl>
      <dd><h3>引入组件</h3></dd>
      <dd v-highlight>
        <pre><code>import {Tree} from 'lv-web-ui';
Vue.component('lvTree', Tree);</code></pre>
      </dd>
    </dl>
    <dl>
      <dd><h3>表单复选框，带多种功能参数定义</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code v-text="code"></code></pre>
        </section>
        <section style="padding:10px;">
          <lv-tree style="width:300px;height:400px;" :nodes="treeData" :setting="setting" @onClick="clkLine"></lv-tree>
        </section>
      </dd>
    </dl>
    <dl>
      <dd><h3>参数说明</h3></dd>
      <dd class="attribute">
        <table>
          <tr><td>参数</td><td>说明</td><td>必填</td><td>类型</td><td>可选值</td><td>默认值</td></tr>
          <tr><td>nodes</td><td>树形数据</td><td>是</td><td>array</td><td>-</td><td><a href="http://www.treejs.cn/v3/demo.php#_101" target="_blank">参考文档</a></td></tr>
          <tr><td>setting</td><td>配置项</td><td>-</td><td>object</td><td>-</td><td><a href="http://www.treejs.cn/v3/api.php" target="_blank">参考文档</a></td></tr>
          <tr><td>@事件</td><td>事件</td><td>-</td><td>object</td><td>-</td><td><a href="http://www.treejs.cn/v3/api.php" target="_blank">参考文档</a></td></tr>
        </table>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Tree} from '../../../packages/index.js';
  
  export default {
    name: 'Tree',
    components: {
      lvTree: Tree
    },
    data () {
      return {
        treeData: [],
        setting: {
          check: {
            enable: true
          },
          view: {
            // showIcon: false,
            showLine: false
          }
        },
        code: ''
      };
    },
    watch: {
      selected: function (val) {
        console.log('selected=', val);
      }
    },
    mounted: function () {
      var _this = this;

      setTimeout(function () {
        _this.treeData = [
          { id: 1, pid: 0, name: '随意勾选 1', open: true, iconSkin: 'lv-icon-ewm ' },
          { id: 11, pid: 1, name: '随意勾选 1-1', open: true, iconSkin: 'lv-icon-ewm ', children: [{ id: 110, pid: 110, name: '随意勾选 110', iconSkin: 'diy01111' }, { id: 111, pid: 111, name: '随意勾选 111' }] },
          { id: 111, pid: 11, name: '随意勾选 1-1-1', iconSkin: 'lv-icon-ewm ' },
          { id: 112, pid: 11, name: '随意勾选 1-1-2', iconSkin: 'lv-icon-ewm ' },
          { id: 12, pid: 1, name: '随意勾选 1-2', open: true, children: [{ id: 120, pid: 120, name: '随意勾选 120' }, { id: 121, pid: 121, name: '随意勾选 121' }] },
          { id: 121, pid: 12, name: '随意勾选 1-2-1', iconSkin: 'lv-icon-ewm ' },
          { id: 122, pid: 12, name: '随意勾选 1-2-2', iconSkin: 'lv-icon-ewm ' },
          { id: 2, pid: 0, name: '随意勾选 2', checked: true, open: true, iconSkin: 'lv-icon-ewm ' },
          { id: 21, pid: 2, name: '随意勾选 2-1', iconSkin: 'lv-icon-ewm ' },
          { id: 22, pid: 2, name: '随意勾选 2-2', open: true, iconSkin: 'lv-icon-ewm ' },
          { id: 221, pid: 22, name: '随意勾选 2-2-1', checked: true, iconSkin: 'lv-icon-ewm ' },
          { id: 222, pid: 22, name: '随意勾选 2-2-2', iconSkin: 'lv-icon-ewm ' },
          { id: 23, pid: 2, name: '随意勾选 2-3', iconSkin: 'lv-icon-ewm ' }
        ];
      }, 1000);
      this.code = '<lv-tree style="width:300px;height:400px;" :nodes="treeData" :setting="setting" @onClick="clkLine"></lv-tree>';
    },
    methods: {
      clkLine: function (a, b, c) {
        console.log(a, b, c);
      }
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-theme {}
</style>
