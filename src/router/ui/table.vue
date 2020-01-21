<template>
  <div class="wrap page-theme">
    <h1>表格 - PS:增加排序功能</h1>
    <dl>
      <dd><h3>引入组件</h3></dd>
      <dd v-highlight>
        <pre><code>import {Table} from 'lv-web-ui';
Vue.component('lvTable', Table);</code></pre>
      </dd>
    </dl>
    <dl>
      <dd><h3>带排序和滚动条的表格组件，设置表格高度后会自动添加滚动条功能，且表格头固定不动</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code v-text="code"></code></pre>
        </section>
        <section style="padding:10px;">
          <lv-table style="height:400px;" :list="dataList" :dragSort="true" :fixLastColumn="true" :totalRow="true" @sort="callback"
            :pageNum.sync="pageNum" :pageSize.sync="pageSize" :totalSize="totalSize" @pagination="pagination">
            <template slot="head">
              <td>序号</td>
              <td>姓名</td>
              <td data-order="age">年龄</td>
              <td>操作</td>
            </template>
            <template slot="body" slot-scope="props">
              <td>{{props.index}}</td>
              <td>{{props.item.name}}</td>
              <td>{{props.item.age}}</td>
              <td>
                <lv-button>确定</lv-button>
              </td>
            </template>
          </lv-table>
        </section>
      </dd>
    </dl>
    <dl>
      <dd><h3>参数说明</h3></dd>
      <dd class="attribute">
        <table>
          <tr><td>参数</td><td>说明</td><td>必填</td><td>类型</td><td>可选值</td><td>默认值</td></tr>
          <tr><td>list</td><td>表格列表数据</td><td>是</td><td>array</td><td>-</td><td>-</td></tr>
          <tr><td>dragSort</td><td>是否拖拽排序</td><td>-</td><td>boolean</td><td>-</td><td>false</td></tr>
          <tr><td>fixLastColumn</td><td>是否固定最后一列</td><td>-</td><td>boolean</td><td>-</td><td>false</td></tr>
          <tr><td>totalRow</td><td>是否统计</td><td>-</td><td>boolean</td><td>-</td><td>false</td></tr>
          <tr><td>pageNum</td><td>当前页</td><td>是</td><td>number</td><td>-</td><td>-</td></tr>
          <tr><td>pageSize</td><td>每页显示记录数</td><td>是</td><td>number</td><td>-</td><td>20</td></tr>
          <tr><td>totalSize</td><td>总记录数,总记录数大于0才会显示分页</td><td>是</td><td>number</td><td>-</td><td>1</td></tr>
          <tr><td>lenth</td><td>中间页码个数</td><td>-</td><td>number</td><td>-</td><td>5</td></tr>
          <tr><td>@pagination</td><td>回调函数</td><td>-</td><td>function</td><td>-</td><td>-</td></tr>
        </table>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Table, Button} from '../../../packages/index.js';
  
  export default {
    name: 'Table',
    components: {
      lvTable: Table,
      lvButton: Button
    },
    data () {
      return {
        code: '',
        dataList: [],
        pageNum: 1,
        pageSize: 40,
        totalSize: 1
      };
    },
    mounted: function () {
      let _this = this;

      setTimeout(function () {
        _this.setData();
      }, 1000);
      this.code = '<lv-table style="height:400px;" :list="dataList" :dragSort="true" :fixLastColumn="true" :totalRow="true" @sort="callback"\n' +
      '  :pageNum.sync="pageNum" :pageSize.sync="pageSize" :totalSize="totalSize" @pagination="pagination">\n' +
      '  <template slot="head">\n' +
      '    <td>序号</td>\n' +
      '    <td>姓名</td>\n' +
      '    <td data-order="age">年龄</td>\n' +
      '    <td>操作</td>\n' +
      '  </template>\n' +
      '  <template slot="body" slot-scope="props">\n' +
      '    <td>{{props.index}}</td>\n' +
      '    <td>{{props.item.name}}</td>\n' +
      '    <td>{{props.item.age}}</td>\n' +
      '    <td>\n' +
      '      <lv-button>确定</lv-button>\n' +
      '    </td>\n' +
      '  </template>\n' +
      '</lv-table>';
    },
    methods: {
      callback (data) {
        console.log('=======callback=======');
        console.log(data);
        var _this = this;
        var temp = JSON.parse(JSON.stringify(this.dataList));
        var result = confirm('是否排序？');

        if (!result) {
          this.dataList = [];
          setTimeout(function () {
            _this.dataList = temp;
          }, 100);
        }
      },
      setData () {
        var m = 50;
        var n = 0;

        for (var i = 0;i < 20;i++) {
          var random = Math.floor(Math.random() * (m - n + 1) + n);
          
          this.dataList.push({
            id: Math.floor(Math.random() * (m - n + 1) + n),
            name: String.fromCodePoint(Math.round(Math.random() * 20901) + 19968) + ':' + i,
            age: random * 10,
            state: 1
          });
        }
      },
      pagination (data) {
        console.log('==pagination==', data);
        console.log(this.pageNum, this.pageSize);
      }
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-theme {}
</style>
