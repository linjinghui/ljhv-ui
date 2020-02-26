<template>
  <div class="wrap page-theme">
    <h1>滑块验证码</h1>
    <dl>
      <dd><h3>引入组件</h3></dd>
      <dd v-highlight>
        <pre><code>import {SliderCode} from 'lv-web-ui';
Vue.component('lvSliderCode', SliderCode);</code></pre>
      </dd>
    </dl>
    <dl>
      <dd><h3>滑块验证码，可设置宽、高、背景图片</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code v-text="code"></code></pre>
        </section>
        <section style="padding:10px;">
          <lv-slidercode :width="400" :height="200" imgUrl="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2353873632,2644143944&fm=26&gp=0.jpg" @success="cbkSuccess" @error="cbkFail"></lv-slidercode>
        </section>
      </dd>
    </dl>
    <dl>
      <dd><h3>参数说明</h3></dd>
      <dd class="attribute">
        <table>
          <tr><td>参数</td><td>说明</td><td>必填</td><td>类型</td><td>可选值</td><td>默认值</td></tr>
          <tr><td>width</td><td>宽度</td><td>-</td><td>number</td><td>-</td><td>-</td></tr>
          <tr><td>height</td><td>高度</td><td>-</td><td>number</td><td>-</td><td>-</td></tr>
          <tr><td>cw</td><td>裁剪区宽度</td><td>-</td><td>number</td><td>-</td><td>60</td></tr>
          <tr><td>ch</td><td>裁剪区高度</td><td>-</td><td>number</td><td>-</td><td>60</td></tr>
          <tr><td>imgUrl</td><td>背景图片地址</td><td>-</td><td>string</td><td>-</td><td>-</td></tr>
          <tr><td>@success</td><td>验证成功回调</td><td>-</td><td>function</td><td>-</td><td>-</td></tr>
          <tr><td>@error</td><td>验证失败回调</td><td>-</td><td>function</td><td>-</td><td>-</td></tr>
        </table>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {SliderCode} from '../../../packages/index.js';
  
  export default {
    name: 'Slidercode',
    components: {
      lvSlidercode: SliderCode
    },
    data () {
      return {
        code: ''
      };
    },
    mounted: function () {
      this.code = '<lv-slidercode :width="400" :height="200" imgUrl="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2353873632,2644143944&fm=26&gp=0.jpg" @success="cbkSuccess" @error="cbkFail"></lv-slidercode>';
    },
    methods: {
      cbkSuccess () {
        console.log('==success==');
        // this.$refs.slidercode.fresh();
      },
      cbkFail () {
        console.log('==fail==');
      }
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-theme {}
</style>
