<template>
  <div class="wrap page-theme">
    <h1>刻度尺</h1>
    <dl>
      <dd><h3>引入组件</h3></dd>
      <dd v-highlight>
        <pre><code>import {Rule} from 'lv-web-ui';
Vue.component('lvRule', Rule);</code></pre>
      </dd>
    </dl>
    <dl>
      <dd><h3>适合移动端使用的刻度尺组件</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code>// maxNum: 传入最大刻度数字
// minNum: 传入最小刻度数字
// stepNum: 每一个刻度代表多少数字
// stepWidth: 每一个刻度的宽
// setSliderItemNum: 初始化刻度尺刻度数量
// sliderItemStep: 每隔多少隔显示长刻度
// sliderItemValueIsHidden: 短刻度下面的标度是否显示
// sliderItemLongValueIsHidden: 长刻度下面的标度是否显示
// sliderItemValueTextAlign: 设置标度居中方式
// sliderGuide: 设置指针是否显示
// animatedClassName: 动画className
// unit: 单位
// ignorePoint: 是否忽视小数点
&lt;lv-rule :minNum="4" :maxNum="20" :sliderItemStep="20" :stepNum="0.05" :stepWidth="5" unit="%" :ignorePoint="true" @callback="callback"&gt;&lt;/lv-rule&gt;
</code></pre>
        </section>
        <section style="position:relative;padding:10px;">
          <lv-rule :minNum="4" :maxNum="20" :sliderItemStep="20" :stepNum="0.05" :stepWidth="5" unit="%" :ignorePoint="true" @callback="callback"></lv-rule>
          {{val}}
        </section>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Rule} from '../../../packages/index.js';
  
  export default {
    name: 'Rule',
    components: {
      lvRule: Rule
    },
    data () {
      return {
        val: ''
      };
    },
    mounted: function () {
      // 
    },
    methods: {
      parseHtmlStr (htmlstr) {
        console.log(htmlstr.replace(/</g, '&lt;').replace(/>/g, '&gt;'));
      },
      callback (data) {
        this.val = data;
      }
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-theme {}
</style>
