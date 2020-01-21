<template>
  <div class="wrap page-theme">
    <h1>日期选择器</h1>
    <dl>
      <dd><h3>引入组件</h3></dd>
      <dd v-highlight>
        <pre><code>import {Laydate} from 'lv-web-ui';
Vue.component('lvLaydate', Laydate);</code></pre>
      </dd>
    </dl>
    <dl>
      <dd><h3>基于Laydate的日期选择器，更多配置参考API <a href="https://www.layui.com/laydate/" target="_blank">https://www.layui.com/laydate/</a></h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code v-text="code"></code></pre>
        </section>
        <section style="padding:10px;">
          <lv-date-picker v-model="startDate" placeholder="请选择日期" :disabled="false" :option="option"></lv-date-picker>
        </section>
      </dd>
    </dl>
    <dl>
      <dd><h3>参数说明</h3></dd>
      <dd class="attribute">
        <table>
          <tr><td>参数</td><td>说明</td><td>必填</td><td>类型</td><td>可选值</td><td>默认值</td></tr>
          <tr><td>v-model/value</td><td>绑定值</td><td>是</td><td>number|string</td><td>-</td><td>如果传入的是Long类型，则返回结果也是Long类型</td></tr>
          <tr><td>placeholder</td><td>占位文本</td><td>-</td><td>string</td><td>-</td><td>-</td></tr>
          <tr><td>disabled</td><td>禁用</td><td>-</td><td>boolean</td><td>-</td><td>false</td></tr>
          <tr><td>option</td><td>日期配置信息</td><td>否</td><td>object</td><td>配置参考API https://www.layui.com/laydate/</td><td>{ type: 'datetime', format: 'yyyy-MM-dd HH:mm:ss' }</td></tr>
        </table>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {DatePicker} from '../../../packages/index.js';
  
  export default {
    name: 'DatePicker',
    components: {
      lvDatePicker: DatePicker
    },
    watch: {
      startDate: function (val) {
        console.log('startDate=', this.startDate);
      }
    },
    data () {
      return {
        code: '',
        // startDate: '2020-03-01 11:13:11',
        startDate: new Date().getTime(),
        option: {
          // year month time date datetime
          type: 'datetime',
          // 范围选择
          range: false,
          // 日期匹配
          format: 'yyyy-MM-dd HH:mm:ss'
          // 开启公历节日
          // calendar: false
          // 自定义节日
          // mark: {
          //   '0-10-14': '生日',
          //   // 每年的日期
          //   '0-12-31': '跨年',
          //   // 每月某天
          //   '0-0-10': '工资', 
          //   '0-0-15': '月中',
          //   // 如果为空字符，则默认显示数字+徽章
          //   '2017-8-15': '', 
          //   '2099-10-14': '呵呵'
          // },
          // min: -7,
          // max: 7
        }
      };
    },
    mounted: function () {
      this.code = '<lv-date-picker v-model="startDate" placeholder="请选择日期" :option="option"></lv-date-picker>';
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
