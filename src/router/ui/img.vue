<template>
  <div class="wrap page-theme">
    <h1>图片带预览功能</h1>
    <dl>
      <dd><h3>引入组件</h3></dd>
      <dd v-highlight>
        <pre><code>import {Img, ImgGroup} from 'lv-web-ui';
Vue.component('lvImg', Img);
Vue.component('lvImgGroup', ImgGroup)</code></pre>
      </dd>
    </dl>
    <dl>
      <dd><h3>可自定义占位图片和错误图片</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code v-text="code1"></code></pre>
        </section>
        <section style="padding:10px;">
          <lv-img width="100px" :preview="true" src="https://s2s2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2028726140,2813284699&fm=173&app=49&f=JPEG?w=640&h=639&s=A0C2944FC01267DE408C8CB70300C001"></lv-img>
        </section>
      </dd>
    </dl>
    <dl>
      <dd><h3>多图片预览功能</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code v-text="code2"></code></pre>
        </section>
        <lv-img-group :preview="true">
          <lv-img width="100px" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2028726140,2813284699&fm=173&app=49&f=JPEG?w=640&h=639&s=A0C2944FC01267DE408C8CB70300C001"></lv-img>
          <lv-img width="100px" src="http://pic25.nipic.com/20121112/9252150_150552938000_2.jpg"></lv-img>
        </lv-img-group>
      </dd>
    </dl>
    <dl>
      <dd><h3>参数说明</h3></dd>
      <dd class="attribute">
        <table>
          <tr><td>参数</td><td>说明</td><td>必填</td><td>类型</td><td>可选值</td><td>默认值</td></tr>
          <tr><td>alt</td><td>图片描述</td><td>是</td><td>string</td><td>-</td><td>-</td></tr>
          <tr><td>src</td><td>图片地址</td><td>是</td><td>string</td><td>-</td><td>-</td></tr>
          <tr><td>defSrc</td><td>默认图片</td><td>-</td><td>string</td><td>-</td><td><img src="../../../packages/img/images/default.png" width="50px"></td></tr>
          <tr><td>errSrc</td><td>错误图片</td><td>-</td><td>string</td><td>-</td><td><img src="../../../packages/img/images/404.png" width="50px"></td></tr>
          <tr><td>width</td><td>图片宽度</td><td>-</td><td>string</td><td>-</td><td>-</td></tr>
          <tr><td>height</td><td>图片高度</td><td>-</td><td>string</td><td>-</td><td>-</td></tr>
          <tr><td>autoWh</td><td>自动原始宽高</td><td>-</td><td>boolean</td><td>-</td><td>false</td></tr>
          <tr><td>preview</td><td>开启预览功能</td><td>-</td><td>boolean</td><td>-</td><td>false</td></tr>
        </table>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Img, ImgGroup} from '../../../packages/index.js';
  
  export default {
    name: 'Img',
    components: {
      lvImg: Img,
      lvImgGroup: ImgGroup
    },
    data () {
      return {
        code1: '',
        code2: ''
      };
    },
    mounted: function () {
      this.code1 = '<lv-img width="100px" :preview="true" src="https://s2s2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2028726140,2813284699&fm=173&app=49&f=JPEG?w=640&h=639&s=A0C2944FC01267DE408C8CB70300C001"></lv-img>\n';
      this.code2 = '<lv-img-group :preview="true">\n' +
      '  <lv-img width="100px" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2028726140,2813284699&fm=173&app=49&f=JPEG?w=640&h=639&s=A0C2944FC01267DE408C8CB70300C001"></lv-img>\n' +
      '  <lv-img width="100px" src="http://pic25.nipic.com/20121112/9252150_150552938000_2.jpg"></lv-img>\n' +
      '</lv-img-group>';
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
