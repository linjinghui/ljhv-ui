<template>
  <div class="wrap page-theme">
    <h1>穿梭框</h1>
    <dl>
      <dd><h3>引入组件</h3></dd>
      <dd v-highlight>
        <pre><code>import {Shuttle} from 'lv-web-ui';
Vue.component('lvShuttle', Shuttle);</code></pre>
      </dd>
    </dl>
    <dl>
      <dd><h3></h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code>&lt;lv-shuttle v-model="option.selected" v-bind="option" @callback="callback"&gt;&lt;/lv-shuttle&gt;
&lt;script type="text/babel"&gt;
export default {
  data () {
    return {
      option: {
        // 数据
        data: [{ 'id': 1, 'name': 'name1', 'disabled': false }],
        // 两侧标题
        titles: ['title1', 'title2'],
        // 已选中数据下标，不允许重复
        selected: [4, 3, 2]
      }
    };
  },
  methods: {
    callback: function (data) {
      console.log('=======callback========');
      console.log(data);
    }
  }
}
&lt;/script&gt;</code></pre>
        </section>
        <section style="padding:10px;height:300px;">
          <lv-shuttle v-model="option.selected" v-bind="option" @callback="callback"></lv-shuttle>
        </section>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Shuttle} from '../../../packages/index.js';
  
  export default {
    name: 'Shuttle',
    components: {
      lvShuttle: Shuttle
    },
    data () {
      return {
        option: {
          // 完整数据
          data: [],
          // 两侧标题
          titles: ['title1', 'title2'],
          // 已选中数据下标，不允许重复
          selected: [4, 3, 2]
        }
      };
    },
    mounted: function () {
      this.setData();
    },
    methods: {
      parseHtmlStr (htmlstr) {
        console.log(htmlstr.replace(/</g, '&lt;').replace(/>/g, '&gt;'));
      },
      setData: function () {
        let _this = this;

        this.option.data = [];
        setTimeout(function () {
          for (var i = 0;i < 50;i++) {
            _this.option.data.push({
              'id': i,
              'name': 'name' + i,
              'disabled': false
            });
          }
          _this.option.data[4].disabled = true;
          _this.option.data[24].disabled = true;
        }, 1000);
      },
      callback: function (data) {
        console.log('=======callback========');
        console.log(data);
      }
    }
  };
</script>

