<template>
  <div class="wrap page-theme">
    <h1>图片 - ps:需要支持自定义默认图片</h1>
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
          <lv-img src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2028726140,2813284699&fm=173&app=49&f=JPEG?w=640&h=639&s=A0C2944FC01267DE408C8CB70300C001" containerClass="img-container"></lv-img>
        </section>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Img} from 'web-base-ui';
  
  export default {
    name: 'Theme',
    components: {
      lvImg: Img
    },
    data () {
      return {
        // 
      };
    },
    mounted: function () {
      // 
    },
    methods: {
      parseHtmlStr (htmlstr) {
        console.log(htmlstr.replace(/</g, '&lt;').replace(/>/g, '&gt;'));
      }
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-theme {}
</style>
