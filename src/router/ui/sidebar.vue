<template>
  <div class="wrap page-theme">
    <h1>侧边栏 - ps:需要自动装配头、中、尾</h1>
    <dl>
      <dd><h3>xxxx</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code>&lt;script type="text/babel"&gt;
export default {
  data () {
    return {};
  },
  methods: {
    xxx () {}
  }
}
&lt;/script&gt;</code></pre>
        </section>
        <section style="padding:10px;">
          <lv-sidebar v-model="show" @callback_sroll="callback_sroll">
            <!-- <p slot="title" class="title">标题</p>
            <ul slot="content">
              <li v-for="i in 50" :key="i">内容{{i}}</li>
            </ul>
            <template slot="footer">
              <lv-button style="padding:0 10px;line-height:34px;" theme="line" @click="show=false">取消</lv-button>
              <lv-button style="padding:0 10px;line-height:34px;">确定</lv-button>
            </template> -->
            阿萨德飒沓撒多
          </lv-sidebar>
        </section>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Sidebar, Button} from 'web-base-ui';
  
  export default {
    name: 'Sidebar',
    components: {
      lvButton: Button,
      lvSidebar: Sidebar
    },
    data () {
      return {
        show: true
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
