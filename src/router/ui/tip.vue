<template>
  <div class="wrap page-theme">
    <h1>提示框</h1>
    <dl>
      <dd><h3>带4种主题的提示框, 3秒后自动消失</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code>&lt;lv-button @click="clkBtn"&gt;提示框&lt;/lv-button&gt;
&lt;script type="text/babel"&gt;
export default {
  methods: {
    clkBtn () {
      this.$tip({
        text: '提示内容',
        # 显示隐藏，默认3秒后消失
        show: true,
        # 文本位置，left: 左侧(默认), center: 居中
        textAlign: 'left',
        # 主题 success(默认)|info|warning|danger
        theme: 'danger'
      });
    }
  }
}
&lt;/script&gt;</code></pre>
        </section>
        <section style="padding:10px;">
          <lv-button @click="clkBtn">提示框</lv-button>
        </section>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Button} from 'web-base-ui';
  
  export default {
    name: 'Theme',
    components: {
      lvButton: Button
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
      clkBtn () {
        this.$tip({
          text: '提示内容',
          show: true,
          // left|center
          textAlign: 'left',
          // success|info|warning|danger, 移动端不支持：info
          theme: 'success'
        });
      }
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-theme {}
</style>
