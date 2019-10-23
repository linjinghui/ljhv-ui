<template>
  <div class="wrap page-theme">
    <h1>加载更多</h1>
    <dl>
      <dd><h3>引入组件</h3></dd>
      <dd v-highlight>
        <pre><code>import {More} from 'lv-web-ui';
Vue.component('lvMore', More);</code></pre>
      </dd>
    </dl>
    <dl>
      <dd><h3>当组件出现在可视范围之内时，会自动触发callback回调（status为nomore的时候不会再触发）</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code>// wrapId 滚动层ID，默认document
// status 加载栏状态 more | loading | nomore
// @callback 加载中回调
&lt;lv-more wrapId="wrapmore" :status="status" @callback="callback"&gt;&lt;/lv-more&gt;
&lt;script type="text/babel"&gt;
export default {
  methods: {
    callback: function (data) {
      var _this = this;

      // 设置状态为加载中
      this.status = 'loading';
      // 构建列表数据
      setTimeout(function () {
        var _arr = [];
        var i = _this.arr.length;

        for (i = 0;i &lt; 20;i++) {
          _arr[_arr.length] = i;
        }
        _this.arr = _this.arr.concat(_arr);
        // 设置状态为还有更多，或者没有更多
        _this.status = _this.arr.length > 50 ? 'nomore' : 'more';
      }, 1500);
    }
  }
}
&lt;/script&gt;</code></pre>
        </section>
        <section id="wrapmore" style="padding:10px;height:300px;overflow:auto;">
          <ul>
            <li v-for="(item) in arr" :key="item">item-{{item}}</li>
          </ul>
          <lv-more wrapId="wrapmore" :status="status" @callback="callback"></lv-more>
        </section>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {More} from '../../../packages/index.js';
  
  export default {
    name: 'More',
    components: {
      lvMore: More
    },
    data () {
      return {
        status: 'more',
        arr: []
      };
    },
    mounted: function () {
      // 
    },
    methods: {
      parseHtmlStr (htmlstr) {
        console.log(htmlstr.replace(/</g, '&lt;').replace(/>/g, '&gt;'));
      },
      callback: function (data) {
        console.log('===callback===');
        var _this = this;

        this.status = 'loading';
        setTimeout(function () {
          var _arr = [];
          var i = _this.arr.length;

          for (i = 0;i < 20;i++) {
            _arr[_arr.length] = i;
          }
          _this.arr = _this.arr.concat(_arr);
          _this.status = _this.arr.length > 50 ? 'nomore' : 'more';
        }, 1500);
      }
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-theme {}
</style>
