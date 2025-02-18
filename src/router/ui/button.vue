<template>
  <div class="wrap page-button">
    <h1>按钮</h1>
    <dl>
      <dd><h3>描述</h3></dd>
      <dd v-highlight>常用的按钮组件，提供5种状态颜色，4种常用场景</dd>
    </dl>
    <dl>
      <dd><h3>引入组件</h3></dd>
      <dd v-highlight>
        <pre><code>import {Button} from 'lv-web-ui';
Vue.component('lvButton', Button);</code></pre>
      </dd>
    </dl>
    <dl>
      <dd><h3>示例</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code v-text="code1"></code></pre>
        </section>
        <section style="padding:10px;">
          <lv-button @click="clkBtn('默认主题')">默认主题</lv-button>
          <lv-button theme="primary" @click="clkBtn('PRIMARY')">PRIMARY</lv-button>
          <lv-button theme="success" @click="clkBtn('成功')">成功</lv-button>
          <lv-button theme="info" @click="clkBtn('INFO')">INFO</lv-button>
          <lv-button theme="warning" @click="clkBtn('警告')">警告</lv-button>
          <lv-button theme="danger" @click="clkBtn('危险')">危险</lv-button>
          <lv-button theme="line" @click="clkBtn('线性')">线性</lv-button>
          <lv-button theme="simple" @click="clkBtn('简单')">简单</lv-button>
          <lv-button theme="primary" icon="lv-icon-loading move-loop" @click="clkBtn('PRIMARY')">带图标</lv-button>
        </section>
      </dd>
    </dl>
    <dl>
      <dd><h3>十秒后才能点击-示例</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code v-text="code2"></code></pre>
        </section>
        <section style="padding:10px;">
          <lv-button theme="primary" :disabledDuring="10" :beforeClick="bfclick" @click="clkSend">点击发送</lv-button>
        </section>
      </dd>
    </dl>
    <dl>
      <dd><h3>拷贝复制 - 示例</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code v-text="code3"></code></pre>
        </section>
        <section style="padding:10px;">
          <lv-button theme="primary" copyData="拷贝内容" @copy-success="cbkCopy">复制到剪贴板</lv-button>
        </section>
      </dd>
    </dl>
    <dl>
      <dd><h3>选择文件 - 示例</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code v-text="code4"></code></pre>
        </section>
        <section style="padding:10px;">
          <lv-button theme="primary" :file="fileOption" :select-file="cbkFile" @upload-success="uploadSuccess" @upload-error="uploadError">选择文件</lv-button>
        </section>
      </dd>
    </dl>
    <dl>
      <dd><h3>调用打印机 - 示例</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code v-text="code5"></code></pre>
        </section>
        <section style="padding:10px;">
          <lv-button theme="primary" print="#tbl>table" @click="clkPrint">点击打印</lv-button>
        </section>
      </dd>
    </dl>
    <dl>
      <dd><h3>参数说明</h3></dd>
      <dd class="attribute">
        <table>
          <tr><td>参数</td><td>说明</td><td>类型</td><td>可选值</td><td>默认值</td></tr>
          <tr><td>width</td><td>宽</td><td>string</td><td>-</td><td>-</td></tr>
          <tr><td>height</td><td>高</td><td>string</td><td>-</td><td>34px</td></tr>
          <tr><td>theme</td><td>主题</td><td>string</td><td>primary|success|info|warning|danger|line|simple</td><td>-</td></tr>
          <tr><td>disabled</td><td>禁用</td><td>boolean</td><td>-</td><td>false</td></tr>
          <tr><td>disabledDuring</td><td>禁用时长(秒)</td><td>number</td><td>-</td><td>0</td></tr>
          <tr><td>copyData</td><td>复制剪贴板内容</td><td>string</td><td>-</td><td>-</td></tr>
          <tr><td>file</td><td>选择文件</td><td>object</td><td>见下表</td><td>见下表</td></tr>
          <tr><td>print</td><td>打印ID</td><td>string</td><td>-</td><td>-</td></tr>
          <tr><td>stop</td><td>阻止事件冒泡</td><td>boolean</td><td>-</td><td>false</td></tr>
          <tr><td>prevent</td><td>阻止默认行为</td><td>boolean</td><td>-</td><td>false</td></tr>
          <tr><td>icon</td><td>图标样式</td><td>string</td><td>-</td><td>-</td></tr>
          <tr><td>select-file</td><td>选择文件后的回调,需要return文件数组</td><td>function</td><td>-</td><td>-</td></tr>
          <tr><td>upload-progress</td><td>文件上传进度回调</td><td>function</td><td>-</td><td>-</td></tr>
          <tr><td>upload-success</td><td>文件上传成功后的回调</td><td>function</td><td>-</td><td>-</td></tr>
          <tr><td>upload-error</td><td>文件上传失败后的回调</td><td>function</td><td>-</td><td>-</td></tr>
          <tr><td>beforeClick</td><td>点击前执行，需要通过回调callback函数才能执行后续点击功能</td><td>function</td><td>-</td><td>function (callback) {<br> callback() <br>}</td></tr>
        </table>
      </dd>
    </dl>
    <dl>
      <dd><h3>file</h3></dd>
      <dd class="attribute">
        <table>
          <tr><td>参数</td><td>说明</td><td>类型</td><td>可选值</td><td>默认值</td></tr>
          <tr><td>accept</td><td>允许上传文件类型</td><td>string</td><td>-</td><td>-</td></tr>
          <tr><td>multiple</td><td>是否多选</td><td>boolean</td><td>-</td><td>false</td></tr>
          <tr><td>uploadUrl</td><td>上传文件地址</td><td>string</td><td>-</td><td>-</td></tr>
          <tr><td>header</td><td>请求头</td><td>object</td><td>-</td><td>-</td></tr>
          <tr><td>formData</td><td>请求内容</td><td>object</td><td>-</td><td>-</td></tr>
          <tr><td>fileFormName</td><td>接收文件名</td><td>string</td><td>-</td><td>file</td></tr>
        </table>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Button} from '../../../packages/index.js';
  
  export default {
    name: 'Button',
    components: {
      lvButton: Button
    },
    data () {
      return {
        code1: '',

        second: 0,
        fileOption: {
          accept: 'image/*',
          multiple: false,
          uploadUrl: '/apiorgan/portal/upload/uploadFile',
          header: {
            'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTaW1iYUVvc1dlYiIsImF1ZCI6ImVudGVyaWNlIiwibmJmIjoxNTc2NjU4MDQyLCJpc3MiOiJzaXdfdmVyaWZ5IiwiZW50ZXJwcmlzZUlkIjoiMjM1NjcwIiwidGltZSI6IjE4IiwiZXhwIjoxNTc2NjY1MjQyLCJpYXQiOjE1NzY2NTgwNDIsInVzZXJOdW1iZXIiOiI2NjIwODY4OCIsImp0aSI6IjgzNDIyZjEzLWVlZjctNDBhMi05OGU4LTc3OTA1MzkxOWQwNSJ9.23N1uu7cyrwgLa79fM7SDofksJGY3MH1-5fvQNCmAqo'
          },
          formData: {
            name: '1111'
          },
          fileFormName: 'datafile'
        }
      };
    },
    mounted: function () {
      this.code1 = '<lv-button @click="clkBtn(\'默认主题\')">默认主题</lv-button> \n' + 
          '<lv-button theme="primary" @click="clkBtn(\'PRIMARY\')">PRIMARY</lv-button> \n' + 
          '<lv-button theme="success" @click="clkBtn(\'成功\')">成功</lv-button> \n' + 
          '<lv-button theme="info" @click="clkBtn(\'INFO\')">INFO</lv-button> \n' + 
          '<lv-button theme="warning" @click="clkBtn(\'警告\')">警告</lv-button> \n' + 
          '<lv-button theme="danger" @click="clkBtn(\'危险\')">危险</lv-button> \n' + 
          '<lv-button theme="line" @click="clkBtn(\'线性\')">线性</lv-button> \n' + 
          '<lv-button theme="simple" @click="clkBtn(\'简单\')">简单</lv-button> \n' + 
          '<lv-button theme="primary" icon="lv-icon-loading move-loop" @click="clkBtn(\'PRIMARY\')">带图标</lv-button>';
      this.code2 = '<lv-button theme="primary" :disabledDuring="10" @click="clkSend">点击发送</lv-button>';
      this.code3 = '<lv-button theme="primary" copyData="拷贝内容" @copy-success="cbkCopy">复制到剪贴板</lv-button>';
      this.code4 = 'fileOption: { \n ' +
          'accept: "image/*", \n ' +
          'multiple: false, \n ' +
          'uploadUrl: "/apiorgan/portal/upload/uploadFile", \n ' +
          'header: { \n ' +
            'Authorization: "123" \n ' +
          '}, \n ' +
          'formData: { \n ' +
            'name: "1111" \n ' +
          '}, \n ' +
          'fileFormName: "datafile" \n ' +
        '} \n ' +
        '<lv-button theme="primary" :file="fileOption" :select-file="cbkFile" @upload-success="uploadSuccess" @upload-error="uploadError">选择文件</lv-button>';
      this.code5 = '# 打印功能需要在html页面中引入jquery \n' +
        '<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"><//script> \n' + 
        '<lv-button theme="primary" print="#tbl>table" @click="clkPrint">点击打印</lv-button>';
    },
    methods: {
      clkBtn (text) {
        this.$tip({ title: '系统', text: text, type: 'info' });
      },
      bfclick (callback) {
        callback();
      },
      clkSend () {
        this.second = 10;
      },
      cbkCopy (data) {
        alert('文本：' + data + ' 复制成功！');
      },
      cbkFile (files) {
        // 处理选件逻辑；例如可以删除不符合条件的文件，使其不上传服务器
        console.log('==cbkFile==', files);
        return files;
      },
      uploadSuccess (file, response) {
        console.log('==uploadSuccess==', file, response);
      },
      uploadError (status, file) {
        console.log('==uploadError==', status, file);
      },
      clkPrint () {
        console.log('打印');
      }
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-button {}
</style>
