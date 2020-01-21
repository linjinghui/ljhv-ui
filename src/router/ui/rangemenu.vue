<template>
  <div class="wrap page-theme">
    <h1>区域菜单</h1>
    <dl>
      <dd><h3>引入组件</h3></dd>
      <dd v-highlight>
        <pre><code>import {Rangemenu} from 'lv-web-ui';
Vue.component('lvRangemenu', Rangemenu);</code></pre>
      </dd>
    </dl>
    <dl>
      <dd><h3>区域菜单，可自定义菜单内容</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code v-text="code"></code></pre>
        </section>
        <section style="padding:10px;">
          <lv-rangemenu :list.sync="list" @add="add"></lv-rangemenu>
        </section>
      </dd>
    </dl>
    <dl>
      <dd><h3>参数说明</h3></dd>
      <dd class="attribute">
        <table>
          <tr><td>参数</td><td>说明</td><td>必填</td><td>类型</td><td>可选值</td><td>默认值</td></tr>
          <tr><td>list</td><td>绑定值</td><td>是</td><td>array</td><td>-</td><td>列表数组, 数组中也可以通过设置disabled属性来控制单项的禁用、启用</td></tr>
          <tr><td>disabled</td><td>禁用</td><td>-</td><td>boolean</td><td>-</td><td>false</td></tr>
          <tr><td>@add</td><td>点击添加按钮的回调</td><td>是</td><td>function</td><td>-</td><td>-</td></tr>
        </table>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {RangeMenu} from '../../../packages/index.js';
  
  export default {
    name: 'Rangemenu',
    components: {
      lvRangemenu: RangeMenu
    },
    data () {
      return {
        code: '',
        list: ['淡淡的', '嗖嗖嗖', 'vvvv', '密麻麻'],
        list2: [
          {
            name: 'name0',
            age: 10,
            disabled: true
          }
        ]
      };
    },
    watch: {
      list (val) {
        console.log('==watch list==');
        console.log(val);
      }
    },
    mounted: function () {
      this.code = '<lv-rangemenu :list.sync="list2" @add="add2" :disabled="false">\n' +
      '  <template slot-scope="props">{{props.item.name}}</template>\n' +
      '</lv-rangemenu>';
    },
    methods: {
      parseHtmlStr (htmlstr) {
        console.log(htmlstr.replace(/</g, '&lt;').replace(/>/g, '&gt;'));
      },
      add () {
        this.list.push('item' + this.list.length);
      },
      add2 () {
        this.list2.push({
          'name': 'name' + this.list2.length,
          'age': this.list2.length
        });
      }
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-theme {}
</style>
