<template>
  <div class="wrap page-theme">
    <h1>弹窗输入框</h1>
    <dl>
      <dd><h3>引入组件</h3></dd>
      <dd v-highlight>
        <pre><code>import {Prompt} from 'lv-web-ui';
Vue.component('lvPrompt', Prompt);</code></pre>
      </dd>
    </dl>
    <dl>
      <dd><h3>表单复选框，带多种功能参数定义</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code v-text="code"></code></pre>
        </section>
        <section style="padding:10px;">
          <lv-button @click="clkPrompt">弹窗输入框</lv-button>
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
          <tr><td>modalClick</td><td>遮罩层点击关闭弹窗</td><td>否</td><td>boolean</td><td>-</td><td>false</td></tr>
          <tr><td>label</td><td>输入框label名称</td><td>否</td><td>string</td><td>-</td><td>-</td></tr>
          <tr><td>maxlength</td><td>输入框长度</td><td>否</td><td>number</td><td>-</td><td>-</td></tr>
          <tr><td>placeholder</td><td>输入框占位内容</td><td>否</td><td>string</td><td>-</td><td>-</td></tr>
          <tr><td>initVal</td><td>输入框初始值</td><td>否</td><td>string</td><td>-</td><td>-</td></tr>
          <tr><td>buttons</td><td>按钮数组，传参参考button组件</td><td>否</td><td>array</td><td>-</td><td>[{ theme: 'line', text: '取消' }, { text: '确定' }]</td></tr>
          <tr><td>callback</td><td>弹窗回调事件</td><td>-</td><td>function</td><td>-</td><td>-</td></tr>
        </table>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Button} from '../../../packages/index.js';
  
  export default {
    name: 'Prompt',
    components: {
      lvButton: Button
    },
    data () {
      return {
        selected: [],
        code: ''
      };
    },
    watch: {
      selected: function (val) {
        console.log('selected=', val);
      }
    },
    mounted: function () {
      this.code = 'this.$prompt({\n' +
      '  show: true,\n' +
      '  headText: "投票",\n' +
      '  modal: true,\n' +
      '  modalClick: true,\n' +
      '  align: "left",\n' +
      '  label: "姓名:",\n' +
      '  maxlength: 5,\n' +
      '  placeholder: "请输入姓名",\n' +
      '  initVal: "张三",\n' +
      '  buttons: [{ theme: "line", text: "取消" }, { text: "确定" }],\n' +
      '  callback: function (data, value) {\n' +
      '    _this.$prompt({ show: false });\n' +
      '  }\n' +
      '});';
    },
    methods: {
      clkPrompt: function () {
        var _this = this;

        this.$prompt({
          show: true,
          headText: '投票',
          modal: true,
          modalClick: true,
          align: 'left',
          label: '姓名:',
          maxlength: 5,
          placeholder: '请输入姓名',
          initVal: '张三',
          buttons: [{ theme: 'line', text: '取消' }, { text: '确定' }],
          callback: function (data, value) {
            _this.$prompt({ show: false });
            console.log('======prompt callback=====', data, value);
          }
        });
      }
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-theme {}
</style>
