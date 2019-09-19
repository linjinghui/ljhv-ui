<template>
  <div class="wrap page-theme">
    <h1>侧边栏</h1>
    <dl>
      <dd><h3>引入组件</h3></dd>
      <dd v-highlight>
        <pre><code>import {Sidebar} from 'lv-web-ui';
Vue.component('lvSidebar', Sidebar);</code></pre>
      </dd>
    </dl>
    <dl>
      <dd><h3>可自定义装配头尾</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code>&lt;lv-sidebar v-model="show" modal="false" @callback_sroll="callback_sroll"&gt;
  &lt;p slot="title" class="title"&gt;标题&lt;/p&gt;
  &lt;ul slot="content"&gt;
    &lt;li v-for="i in 50" :key="i"&gt;内容{{i}}&lt;/li&gt;
  &lt;/ul&gt;
  &lt;template slot="footer"&gt;
    &lt;lv-button style="padding:0 10px;line-height:34px;" theme="line" @click="show=false"&gt;取消&lt;/lv-button&gt;
    &lt;lv-button style="padding:0 10px;line-height:34px;"&gt;确定&lt;/lv-button&gt;
  &lt;/template&gt;
&lt;/lv-sidebar&gt;
&lt;script type="text/babel"&gt;
export default {
  data () {
    return {
      show: false
    };
  },
  methods: {
    callback_sroll: function (data) {
      console.log(data);
      if (data === 'top') {
        // 滚动条滚动到顶部
      } else if (data === 'end') {
        // 滚动条滚动到底部
      }
    }
  }
}
&lt;/script&gt;</code></pre>
        </section>
        <section style="padding:10px;">
          <lv-button @click="show=!show">show\hide</lv-button>
          <lv-sidebar v-model="show" modal="false" @callback_sroll="callback_sroll">
            <p slot="title" class="title">标题</p>
            <ul slot="content">
              <li v-for="i in 50" :key="i">内容{{i}}</li>
            </ul>
            <template slot="footer">
              <lv-button style="padding:0 10px;line-height:34px;" theme="line" @click="show=false">取消</lv-button>
              <lv-button style="padding:0 10px;line-height:34px;">确定</lv-button>
            </template>
          </lv-sidebar>
        </section>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Sidebar, Button} from '../../../packages/index.js';
  
  export default {
    name: 'Sidebar',
    components: {
      lvButton: Button,
      lvSidebar: Sidebar
    },
    data () {
      return {
        show: false
      };
    },
    mounted: function () {
      // 
    },
    methods: {
      parseHtmlStr (htmlstr) {
        console.log(htmlstr.replace(/</g, '&lt;').replace(/>/g, '&gt;'));
      },
      callback_sroll: function (data) {
        console.log(data);
        if (data === 'top') {
          // 滚动条滚动到顶部
        } else if (data === 'end') {
          // 滚动条滚动到底部
        }
      }
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-theme {}
</style>
