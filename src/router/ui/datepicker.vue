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
      <dd><h3>基于Laydate的日期选择器，可支持自定义右侧图标，更多配置参考API <a href="https://www.layui.com/laydate/" target="_blank">https://www.layui.com/laydate/</a></h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code>&lt;lv-laydate v-model="startDate" placeholder="请选择日期" :option="option"&gt;&lt;/lv-laydate&gt;
&lt;script type="text/babel"&gt;
export default {
  data () {
    return {
      startDate: '',
      option: {
        // year month time date datetime
        type: 'datetime',
        // 范围选择
        range: false,
        // 日期匹配
        format: 'yyyy-MM-dd HH:mm:ss',
        // 开启公历节日
        calendar: true,
        // 自定义主题色
        theme: '#16aa6b',
        // 自定义节日
        mark: {
          '0-10-14': '生日',
          // 每年的日期
          '0-12-31': '跨年',
          // 每月某天
          '0-0-10': '工资', 
          '0-0-15': '月中',
          // 如果为空字符，则默认显示数字+徽章
          '2017-8-15': '', 
          '2099-10-14': '呵呵'
        },
        min: -7,
        max: 7
      }
    };
  }
}
&lt;/script&gt;</code></pre>
        </section>
        <section style="padding:10px;">
          <lv-laydate v-model="startDate" placeholder="请选择日期" :option="option">
            <!-- 可自定义右侧图标 -->
            <i class="cicon-tick" slot="right"></i>
          </lv-laydate>
        </section>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Laydate} from '../../../packages/index.js';
  
  export default {
    name: 'DatePicker',
    components: {
      lvLaydate: Laydate
    },
    watch: {
      startDate: function (val) {
        console.log('startDate=', this.startDate);
      }
    },
    data () {
      return {
        startDate: '',
        // 更多配置参考API https://www.layui.com/laydate/
        option: {
          // year month time date datetime
          type: 'datetime',
          // 范围选择
          range: false,
          // 日期匹配
          format: 'yyyy-MM-dd HH:mm:ss',
          // 开启公历节日
          calendar: true,
          // 自定义主题色
          theme: '#16aa6b',
          // 自定义节日
          mark: {
            '0-10-14': '生日',
            // 每年的日期
            '0-12-31': '跨年',
            // 每月某天
            '0-0-10': '工资', 
            '0-0-15': '月中',
            // 如果为空字符，则默认显示数字+徽章
            '2017-8-15': '', 
            '2099-10-14': '呵呵'
          },
          min: -7,
          max: 7
        }
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
