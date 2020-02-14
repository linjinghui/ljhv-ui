<template>
  <div class="wrap page-theme">
    <h1>上传文件</h1>
    <dl>
      <dd><h3>引入组件</h3></dd>
      <dd v-highlight>
        <pre><code>import {Upload} from 'lv-web-ui';
Vue.component('lvUpload', Upload);</code></pre>
      </dd>
    </dl>
    <dl>
      <dd><h3>上传文件组件</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code v-text="code"></code></pre>
        </section>
        <section style="padding:10px;">
          <lv-upload :max="3" :fileOption="fileOption" :files.sync="files" :remove-file="delFile" :uploaded="afterUpload" @upload-error="uploadError"></lv-upload>
        </section>
      </dd>
    </dl>
    <dl>
      <dd><h3>参数说明</h3></dd>
      <dd class="attribute">
        <table>
          <tr><td>参数</td><td>说明</td><td>必填</td><td>类型</td><td>可选值</td><td>默认值</td></tr>
          <tr><td>text</td><td>按钮文本</td><td>否</td><td>string</td><td>-</td><td>选择文件</td></tr>
          <tr><td>icon</td><td>按钮中的图标样式</td><td>否</td><td>string</td><td>-</td><td><i class="lv-icon-attach"></i></td></tr>
          <tr><td>files</td><td>文件列表</td><td>否</td><td>array</td><td>-</td><td>[]</td></tr>
          <tr><td>fileOption</td><td>文件上传数据</td><td>否</td><td>object</td><td>-</td><td>[]</td></tr>
          <tr><td>max</td><td>最大文件数量</td><td>否</td><td>string</td><td>-</td><td>-</td></tr>
          <tr><td>removeFile</td><td>删除文件回调</td><td>-</td><td>function</td><td>-</td><td>function (file, callback) {<br>// 调用callback，组件会删除列表中的文件<br>callback();<br>}</td></tr>
          <tr><td>uploaded</td><td>上传文件接口的回调</td><td>-</td><td>function</td><td>-</td><td>function (file, response, successCallback, errorCallback) {<br> // 组件中需要id和url，需要通过successCallback回传<br> // 调用errorCallback，组件会删除列表中的文件 <br> successCallback(response.id, response.url);<br>}</td></tr>
        </table>
      </dd>
    </dl>
    <dl>
      <dd><h3>file[array]参数说明</h3></dd>
      <dd class="attribute">
        <table>
          <tr><td>参数</td><td>说明</td><td>必填</td><td>类型</td><td>可选值</td><td>默认值</td></tr>
          <tr><td>name</td><td>带后缀的文件名</td><td>是</td><td>string</td><td>-</td><td>-</td></tr>
          <tr><td>size</td><td>文件大小，字节单位</td><td>是</td><td>number</td><td>-</td><td>-</td></tr>
          <tr><td>url</td><td>文件地址</td><td>是</td><td>string</td><td>-</td><td>-</td></tr>
        </table>
      </dd>
    </dl>
    <dl>
      <dd><h3>fileOption 参数说明</h3></dd>
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
  import {Upload} from '../../../packages/index.js';
  
  export default {
    name: 'Upload',
    components: {
      lvUpload: Upload
    },
    data () {
      return {
        code: '',
        files: [],
        fileOption: {
          // accept: 'image/*', 
          multiple: true, 
          uploadUrl: '/apiorgan/portal/upload/uploadFile', 
          // uploadUrl: '/api/announcementFile/uploadAttach',
          header: { 
            // token: 'a0fjkz38nocvfnv1'
            Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTaW1iYUVvc1dlYiIsImF1ZCI6ImVudGVyaWNlIiwibmJmIjoxNTgxNDk1NTQ5LCJpc3MiOiJzaXdfdmVyaWZ5IiwiZW50ZXJwcmlzZUlkIjoiMjQxNjQ2IiwidGltZSI6IjEzIiwiZXhwIjoxNTgxNTAyNzQ5LCJpYXQiOjE1ODE0OTU1NDksInVzZXJOdW1iZXIiOiI2NzAyMjAxNSIsImp0aSI6IjRhNzI2MDViLTVhMzQtNDNjYS1hMmY2LTlkMTBiMTM5Njg3NSJ9.0vO-n6J_0GNum3qj5U1kYfK-S_A5dy1xUr6kLiTXFQA' 
          },
          formData: { 
            enterpriseId: '241646',
            userNumber: '67022015' 
          },
          fileFormName: 'datafile' 
        }
      };
    },
    mounted: function () {
      this.code = '';
      this.$nextTick(function () {
        this.files = [
          // { id: 'id123456', name: '0.jpg', size: 152839, url: 'http://47.94.37.132:9021/cloudstorage/storage/download/2101/20190827/235604/0/a38b4c/0.jpg' },
          // { name: '新建 Microsoft Excel 工作表.xlsx', size: 8714, url: 'http://47.94.37.132:9005/taskapi/file/downloadByKey?key=325c2880f30349f197be&fileName=新建 Microsoft Excel 工作表.xlsx' },
          // { name: '惠民便利店.jpg', size: 281565, url: 'http://47.94.37.132:9005/taskapi/file/downloadByKey?key=1aa31032a74844f38462&fileName=惠民便利店.jpg' },
          { name: '压缩1.rar', size: 281565, url: 'http://47.94.37.132:9005/taskapi/file/downloadByKey?key=1aa31032a74844f38462&fileName=惠民便利店.rar' },
          { name: '压缩2.zip', size: 281565, url: 'http://47.94.37.132:9005/taskapi/file/downloadByKey?key=1aa31032a74844f38462&fileName=惠民便利店.zip' },
          { name: '新建工作表.docx', size: 281565, url: 'http://47.94.37.132:9005/taskapi/file/downloadByKey?key=1aa31032a74844f38462&fileName=惠民便利店.docx' },
          { name: 'index.html', size: 281565, url: 'http://47.94.37.132:9005/taskapi/file/downloadByKey?key=1aa31032a74844f38462&fileName=惠民便利店.html' }
        ];
      });
    },
    methods: {
      delFile (file, callback) {
        var _this = this;

        // 处理删除逻辑
        console.log('==delFile==', file);
        // 调用callback删除列表中的文件 callback()
        this.$confirm({
          show: true,
          headText: '删除',
          content: '确定删除改文件？',
          modalClick: false,
          icon: 'warning',
          callback: function (data) {
            _this.$confirm({ show: false });
            data.text === '确定' && callback();
          }
        });
      },
      uploadError (file, code) {
        console.log('====上传失败===', file, code);
        this.$tip({ text: '上传失败', type: 'error' });
      },
      // 处理上传文件返回的数据，成功的话，需要回调success，并传入id,url参数 success(id,url);错误的话回调error，组件自动删除改文件
      afterUpload (file, response, success, error) {
        // 根据response处理逻辑
        if (response.msgCode === 200) {
          this.$tip({ text: '上传成功', type: 'success' });
          success(1, 'http://www.baidu.com');
        } else {
          this.$tip({ text: response.msg, type: 'error' });
          error();
        }
      }
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-theme {}
</style>
