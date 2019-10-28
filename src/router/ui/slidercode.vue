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
           <pre><code> // width: 宽度，默认310
// height: 高度，默认155
// imgUrl: 背景图片地址， 不传，默认从https://picsum.photos上随机获取图片
// success: 验证成功回调
// fail: 验证失败回调
// refresh: 刷新回调
&lt;lv-slidercode ref="slidercode" :width="400" :height="200" imgUrl="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2353873632,2644143944&fm=26&gp=0.jpg" @success="cbkSuccess" @fail="cbkFail" @refresh="cbkRefresh"&gt;&lt;/lv-slidercode&gt;
&lt;script type="text/babel"&gt;
export default {
  data () {
    return {};
  },
  methods: {
    cbkSuccess () {
      console.log('==success==');
      // 手动刷新
      // this.$refs.slidercode.fresh();
    },
    cbkFail () {
      console.log('==fail==');
    },
    cbkRefresh () {
      console.log('==refresh==');
    }
  }
}
&lt;/script&gt;</code></pre>
        </section>
        <section style="padding:10px;">
          <lv-slidercode ref="slidercode" :width="400" :height="200" imgUrl="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2353873632,2644143944&fm=26&gp=0.jpg" @success="cbkSuccess" @fail="cbkFail" @refresh="cbkRefresh"></lv-slidercode>
        </section>
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
        // 
      };
    },
    mounted: function () {
      // 
    },
    methods: {
      parseHtmlStr (htmlstr) {
        console.log(htmlstr.replace(/</g, '&lt;').replace(/>/g, '&gt;'));
      },
      cbkSuccess () {
        console.log('==success==');
        // this.$refs.slidercode.fresh();
      },
      cbkFail () {
        console.log('==fail==');
      },
      cbkRefresh () {
        console.log('==refresh==');
      }
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-theme {}
</style>
