<template>
  <div class="wrap page-theme">
    <h1>表格 - PS:增加排序功能</h1>
    <dl>
      <dd><h3>带排序和滚动条的表格组件，设置表格高度后会自动添加滚动条功能，且表格头固定不动</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code># data：表格数据列表
# order：是否需要排序
# ref：排序方法里面会用到
&lt;lv-table style="height:400px;" :data="dataList" :order="true" ref="rtable"&gt;
  &lt;tr slot="head"&gt;
    # 可以通过设置class="no-order"来关闭本列的排序功能
    &lt;td class="no-order"&gt;序号&lt;/td&gt;
    &lt;td @click="clkOrder('name')"&gt;姓名&lt;/td&gt;
    &lt;td @click="clkOrder('age')"&gt;年龄&lt;/td&gt;
    &lt;td class="no-order"&gt;操作&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr slot="body" slot-scope="props"&gt;
    &lt;td&gt;{props.index}&lt;/td&gt;
    &lt;td&gt;{props.item.name}&lt;/td&gt;
    &lt;td&gt;{props.item.age}&lt;/td&gt;
    &lt;td&gt;
      &lt;lv-button&gt;确定&lt;/lv-button&gt;
    &lt;/td&gt;
  &lt;/tr&gt;
&lt;/lv-table&gt;
&lt;script type="text/babel"&gt;
export default {
  data () {
    return {
      dataList: [
        {
          id: 1,
          name: '名称1',
          age: 10,
          state: 1
        }
      ]
    };
  },
  methods: {
    clkOrder (orderBy) {
      this.$refs.rtable.setOrder(this.dataList, orderBy);
    }
  }
}
&lt;/script&gt;</code></pre>
        </section>
        <section style="padding:10px;">
          <lv-table style="height:400px;" :data="dataList" :order="true" ref="rtable">
            <tr slot="head">
              <td class="no-order">序号</td>
              <td @click="clkOrder('name')">姓名</td>
              <td @click="clkOrder('age')">年龄</td>
              <td class="no-order">操作</td>
            </tr>
            <tr slot="body" slot-scope="props">
              <td>{{props.index}}</td>
              <td>{{props.item.name}}</td>
              <td>{{props.item.age}}</td>
              <td>
                <lv-button>确定</lv-button>
              </td>
            </tr>
          </lv-table>
        </section>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Table, Button} from 'web-base-ui';
  
  export default {
    name: 'Theme',
    components: {
      lvTable: Table,
      lvButton: Button
    },
    data () {
      return {
        dataList: []
      };
    },
    mounted: function () {
      let _this = this;

      setTimeout(function () {
        _this.setData();
      }, 1000);
    },
    methods: {
      parseHtmlStr (htmlstr) {
        console.log(htmlstr.replace(/</g, '&lt;').replace(/>/g, '&gt;'));
      },
      callback (data) {
        console.log('=======callback=======');
        console.log(data);
      },
      setData () {
        var m = 50;
        var n = 0;

        for (var i = 0;i < 20;i++) {
          var random = Math.floor(Math.random() * (m - n + 1) + n);
          
          this.dataList.push({
            id: Math.floor(Math.random() * (m - n + 1) + n),
            name: String.fromCodePoint(Math.round(Math.random() * 20901) + 19968) + ':' + random,
            age: random * 10,
            state: 1
          });
        }
      },
      clkOrder (orderBy) {
        this.$refs.rtable.setOrder(this.dataList, orderBy);
      }
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-theme {}
</style>
