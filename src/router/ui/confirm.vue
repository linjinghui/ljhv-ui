<template>
  <div class="wrap page-theme">
    <h1>确认框</h1>
    <dl>
      <dd><h3>全局确认框，支持自定义内容</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code v-text="code"></code></pre>
        </section>
        <section style="padding:10px;">
          <lv-button @click="clkBtn">确认框</lv-button>
        </section>
      </dd>
    </dl>
    <dl>
      <dd><h3>参数说明</h3></dd>
      <dd class="attribute">
        <table>
          <tr><td>参数</td><td>说明</td><td>必填</td><td>类型</td><td>可选值</td><td>默认值</td></tr>
          <tr><td>show</td><td>显示、隐藏</td><td>是</td><td>boolean</td><td>-</td><td>false</td></tr>
          <tr><td>modal</td><td>是否模态窗口</td><td>否</td><td>boolean</td><td>-</td><td>false</td></tr>
          <tr><td>align</td><td>对齐</td><td>否</td><td>string</td><td>left|center</td><td>left</td></tr>
          <tr><td>headText</td><td>标题</td><td>否</td><td>string</td><td>-</td><td>-</td></tr>
          <tr><td>content</td><td>内容</td><td>否</td><td>string</td><td>-</td><td>-</td></tr>
          <tr><td>modalClick</td><td>遮罩层点击关闭弹窗</td><td>否</td><td>boolean</td><td>-</td><td>false</td></tr>
          <tr><td>icon</td><td>小图标</td><td>否</td><td>string</td><td>success|warning|error</td><td>-</td></tr>
          <tr><td>buttons</td><td>按钮数组，传参参考button组件</td><td>否</td><td>array</td><td>-</td><td>[{ theme: 'line', text: '取消' }, { text: '确定' }]</td></tr>
          <tr><td>callback</td><td>弹窗回调事件</td><td>-</td><td>function</td><td>-</td><td>-</td></tr>
        </table>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Button, Dialog} from '../../../packages/index.js';
  
  export default {
    name: 'Theme',
    components: {
      lvButton: Button,
      lvDialog: Dialog
    },
    data () {
      return {
        code: ''
      };
    },
    mounted: function () {
      this.code = 'this.$confirm({\n' +
      '  show: true,\n' +
      '  headText: "投票",\n' +
      '  content: "你今天还能为其他未投过票的参选者投<font style="color: red;">1</font>票",\n' +
      '  modalClick: false,\n' +
      '  icon: "error",\n' +
      '  callback: function (data) {\n' +
      '    _this.$confirm({ show: false });\n' +
      '  }\n' +
      '});';
    },
    methods: {
      clkBtn () {
        var _this = this;

        this.$confirm({
          show: true,
          headText: '投票',
          content: ' 你今天还能为其他未投过票的参选者投<font style="color: red;">1</font>票',
          modalClick: false,
          // success|warning|error
          icon: 'error',
          callback: function (data) {
            _this.$confirm({ show: false });
            console.log('======confirm callback=====');
            console.log(data);
          }
        });
      },
      callbackDialog (data) {
        console.log('=======callbackDialog========');
        console.log(data);
        this.optionDialog.show = false;
      }
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-theme {}
</style>
