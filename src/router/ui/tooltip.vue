<template>
  <div class="wrap page-theme">
    <h1>类似title属性的提示</h1>
    <dl>
      <dd><h3>鼠标滑过弹出提示</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code># text 提示文本
# theme 背景色值
# position 显示位置，right|bottom|left|top
&lt;lv-tooltip text="提示内容" theme="#16aa6b" position="right"&gt;
  &lt;button&gt;滑过显示提示文本&lt;/button&gt;
&lt;/lv-tooltip&gt;
export default {}
&lt;/script&gt;</code></pre>
        </section>
        <section style="padding:10px;">
          <lv-tooltip text="提示内容" theme="#16aa6b" position="right">
            <button>滑过显示提示文本</button>
          </lv-tooltip>
        </section>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Tooltip} from 'web-base-ui';
  
  export default {
    name: 'Theme',
    components: {
      lvTooltip: Tooltip
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
