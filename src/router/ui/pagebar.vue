<template>
  <div class="wrap page-theme">
    <h1>分页工具</h1>
    <dl>
      <dd><h3>引入组件</h3></dd>
      <dd v-highlight>
        <pre><code>import {Pagebar} from 'lv-web-ui';
Vue.component('lvPagebar', Pagebar);</code></pre>
      </dd>
    </dl>
    <dl>
      <dd><h3>常规分页</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code v-text="code"></code></pre>
        </section>
        <section style="padding:10px;">
          <lv-pagebar :simple="false" :pageNum.sync="index" :pageSize.sync="pageSize" :totalSize="101" :sizes="sizes" :lenth="8" @pagination="callback"></lv-pagebar>
        </section>
      </dd>
    </dl>
    <dl>
      <dd><h3>参数说明</h3></dd>
      <dd class="attribute">
        <table>
          <tr><td>参数</td><td>说明</td><td>必填</td><td>类型</td><td>可选值</td><td>默认值</td></tr>
          <tr><td>pageNum</td><td>当前页</td><td>是</td><td>number</td><td>-</td><td>-</td></tr>
          <tr><td>pageSize</td><td>每页显示记录数</td><td>是</td><td>number</td><td>-</td><td>20</td></tr>
          <tr><td>totalSize</td><td>总记录数</td><td>是</td><td>number</td><td>-</td><td>1</td></tr>
          <tr><td>sizes</td><td>分页下拉选项</td><td>-</td><td>array</td><td>-</td><td>[ { id: 10, name: '10条/页' }, { id: 20, name: '20条/页' }, { id: 40, name: '40条/页' }, { id: 80, name: '80条/页' }, { id: 100, name: '100条/页' } ]</td></tr>
          <tr><td>simple</td><td>是否简版</td><td>-</td><td>boolean</td><td>-</td><td>false</td></tr>
          <tr><td>lenth</td><td>中间页码个数</td><td>-</td><td>number</td><td>-</td><td>5</td></tr>
          <tr><td>@pagination</td><td>回调函数</td><td>-</td><td>function</td><td>-</td><td>-</td></tr>
        </table>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Pagebar} from '../../../packages/index.js';
  
  export default {
    name: 'Pagebar',
    components: {
      lvPagebar: Pagebar
    },
    data () {
      return {
        code: '',
        index: 1,
        index2: 1,
        pageSize: 10,
        sizes: [
          { id: 10, name: '10条/页' },
          { id: 20, name: '20条/页' }
        ]
      };
    },
    watch: {
      index2 (val) {
        console.log('index2', val);
      }
    },
    mounted: function () {
      this.code = '<lv-pagebar :simple="false" :pageNum.sync="index" :pageSize.sync="pageSize" :totalSize="101" :sizes="sizes" :lenth="8" @pagination="callback"></lv-pagebar>';
    },
    methods: {
      parseHtmlStr (htmlstr) {
        console.log(htmlstr.replace(/</g, '&lt;').replace(/>/g, '&gt;'));
      },
      callback (data) {
        console.log(this.index, this.pageSize);
      }
    }
  };
</script>
