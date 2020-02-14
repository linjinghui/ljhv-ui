<template>
  <div class="wrap page-theme">
    <h1>表单</h1>
    <dl>
      <dd><h3>引入组件</h3></dd>
      <dd v-highlight>
        <pre><code>import {Checkbox} from 'lv-web-ui';
Vue.component('lvCheckbox', Checkbox);</code></pre>
      </dd>
    </dl>
    <dl>
      <dd><h3>表单复选框，带多种功能参数定义</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code v-text="code"></code></pre>
        </section>
        <section style="padding:10px;">
          <lv-form class="inline1" style="width:420px;">
            <div class="form-title">创建表单</div>
            <div class="form-item">
              <label>外出标题：</label>
              <div class="main">
                <lv-input v-model="formObj.title"></lv-input>
              </div>
            </div>
            <div class="form-item">
              <label>外出时间：</label>
              <div class="main">
                <lv-date-picker :start.sync="formObj.starTime" :end.sync="formObj.endTime" placeholder="请选择日期" :option="{type:'datetime',range:'至',format:'yyyy-MM-dd HH:mm:ss'}"></lv-date-picker>
              </div>
            </div>
            <div class="form-item">
              <label>外出事由：</label>
              <div class="main">
                <lv-textarea v-model="formObj.content" placeholder="请输入外出事由" rows="3" maxlength="1000" :autoheight="false"></lv-textarea>
              </div>
            </div>
            <div class="form-item">
              <label>审批人：</label>
              <div class="main">
                <lv-rangemenu :list.sync="formObj.spr" @add="add"></lv-rangemenu>
              </div>
            </div>
            <div class="form-item inline">
              <label>抄送人：</label>
              <div class="main">
                <lv-rangemenu :list.sync="formObj.csr" @add="csradd"></lv-rangemenu>
              </div>
            </div>
            <div class="form-item block">
              <label>提醒：</label>
              <div class="main">
                <lv-checkbox v-model="formObj.tx" :val="1">IM提醒</lv-checkbox>
              </div>
            </div>
            <div class="form-item inline">
              <label>附件：</label>
              <div class="main">
                <lv-upload :max="5" :fileOption="fileOption" :files.sync="formObj.attaches" :uploaded="afterUpload" @upload-error="uploadError"></lv-upload>
              </div>
            </div>
            <div class="form-footer" style="text-align:right;">
              <lv-button @click="clkSubmit">提交</lv-button>
            </div>
          </lv-form>
        </section>
      </dd>
    </dl>
    <dl>
      <dd><h3>参数说明</h3></dd>
      <dd class="attribute">
        <table>
          <tr><td>参数</td><td>说明</td><td>必填</td><td>类型</td><td>可选值</td><td>默认值</td></tr>
          <tr><td>v-model/value</td><td>绑定值</td><td>是</td><td>boolean|array|number|string</td><td>-</td><td>如果传入的非是数组，则表示单选</td></tr>
          <tr><td>disabled</td><td>禁用</td><td>-</td><td>boolean</td><td>-</td><td>false</td></tr>
          <tr><td>val</td><td>选中后回填的值</td><td>是</td><td>boolean|number|string</td><td>-</td><td>-</td></tr>
          <tr><td>before</td><td>选中前执行的函数</td><td>-</td><td>function</td><td>-</td><td>-</td></tr>
        </table>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Form, Checkbox, Input, DatePicker, Textarea, RangeMenu, Button, Upload} from '../../../packages/index.js';
  
  export default {
    name: 'Checkbox',
    components: {
      lvForm: Form,
      lvCheckbox: Checkbox,
      lvInput: Input,
      lvDatePicker: DatePicker,
      lvTextarea: Textarea,
      lvRangemenu: RangeMenu,
      lvUpload: Upload,
      lvButton: Button
    },
    data () {
      return {
        formObj: {
          title: '',
          starTime: '',
          endTime: '',
          content: '',
          spr: [],
          csr: [],
          tx: '',
          attaches: []
        },
        name: '',
        selected: [],
        code: '',
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
    watch: {
      selected: function (val) {
        console.log('selected=', val);
      }
    },
    mounted: function () {
      this.code = 'beforeClk: function (callback) {\n' +
      '  if (window.confirm(\'确认选中？\')) {\n' +
      '    callback();\n' +
      '  }\n' +
      '}\n' + 
        '<lv-checkbox v-model="selected" val="2" :before="beforeClk">游泳</lv-checkbox>';
    },
    methods: {
      beforeClk: function (callback) {
        if (window.confirm('确认选中？')) {
          callback();
        }
      },
      add () {
        this.formObj.spr.push('item' + this.formObj.spr.length);
      },
      csradd () {
        this.formObj.csr.push('item' + this.formObj.csr.length);
      },
      clkSubmit () {
        console.log('==submit==', this.formObj);
      }
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-theme {}
</style>
