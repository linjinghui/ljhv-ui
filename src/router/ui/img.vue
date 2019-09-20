<template>
  <div class="wrap page-theme">
    <h1>图片带预览功能</h1>
    <dl>
      <dd><h3>引入组件</h3></dd>
      <dd v-highlight>
        <pre><code>import {Img} from 'lv-web-ui';
Vue.component('lvImg', Img);</code></pre>
      </dd>
    </dl>
    <dl>
      <dd><h3>可自定义占位图片和错误图片</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code># alt 
# width 图片宽
# height 图片高度
# autoWh 是否自动原始宽高，默认false
# preview 是否开启图片预览功能，默认false
# container 图片预览区域 可不传。用于多图片预览。
# src 真实图片地址
# defSrc 默认图片地址
# errSrc 错误图片地址
&lt;lv-img width="100px" :preview="true" src="https://s2s2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2028726140,2813284699&
fm=173&app=49&f=JPEG?w=640&h=639&s=A0C2944FC01267DE408C8CB70300C001"&gt;&lt;/lv-img&gt;
</code></pre>
        </section>
        <section style="padding:10px;">
          <lv-img width="100px" :preview="true" src="https://s2s2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2028726140,2813284699&fm=173&app=49&f=JPEG?w=640&h=639&s=A0C2944FC01267DE408C8CB70300C001"></lv-img>
        </section>
      </dd>
    </dl>
    <dl>
      <dd><h3>多图片预览功能，需要设置container</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code>&lt;section class="img-container"&gt;
  &lt;lv-img width="100px" :preview="true" container="img-container" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2028726140,2813284699&fm=173&app=49&f=JPEG?w=640&h=639&s=A0C2944FC01267DE408C8CB70300C001"&gt;&lt;/lv-img&gt;
  &lt;lv-img width="100px" :preview="true" container="img-container" src="http://pic25.nipic.com/20121112/9252150_150552938000_2.jpg"&gt;&lt;/lv-img&gt;
&lt;/section&gt;</code></pre>
        </section>
        <section style="padding:10px;" class="img-container">
          <lv-img width="100px" :preview="true" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2028726140,2813284699&fm=173&app=49&f=JPEG?w=640&h=639&s=A0C2944FC01267DE408C8CB70300C001" container="img-container"></lv-img>
          <lv-img width="100px" :preview="true" src="http://pic25.nipic.com/20121112/9252150_150552938000_2.jpg" container="img-container"></lv-img>
        </section>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Img} from '../../../packages/index.js';
  
  export default {
    name: 'Img',
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
