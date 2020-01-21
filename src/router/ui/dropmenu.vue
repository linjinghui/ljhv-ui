<template>
  <div class="wrap page-theme">
    <h1>下拉框</h1>
    <dl>
      <dd><h3>引入组件</h3></dd>
      <dd v-highlight>
        <pre><code>import {Dropmenu} from 'lv-web-ui';
Vue.component('lvDropmenu', Dropmenu);</code></pre>
      </dd>
    </dl>
    <dl style="line-height:unset;">
      <dd><h3>可多选的下拉框</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code v-text="code"></code></pre>
        </section>
        <section style="padding:10px;">
          <lv-dropmenu :value.sync="option.result" position="bottom" :disabled="false" :list="option.data" :unselect="option.unselect" :placeholder="option.placeholder" :searchabled="true"></lv-dropmenu>
        </section>
      </dd>
    </dl>
    <dl>
      <dd><h3>参数说明</h3></dd>
      <dd class="attribute">
        <table>
          <tr><td>参数</td><td>说明</td><td>必填</td><td>类型</td><td>可选值</td><td>默认值</td></tr>
          <tr><td>value</td><td>绑定值</td><td>是</td><td>array|number|string</td><td>-</td><td>如果传入的是数组，则表示多选，否则单选</td></tr>
          <tr><td>disabled</td><td>禁用</td><td>-</td><td>boolean</td><td>-</td><td>false</td></tr>
          <tr><td>placeholder</td><td>占位文本</td><td>否</td><td>string</td><td>-</td><td>请选择</td></tr>
          <tr><td>searchabled</td><td>是否允许检索</td><td>否</td><td>boolean</td><td>-</td><td>false</td></tr>
          <tr><td>unselect</td><td>不允许选择的项</td><td>否</td><td>array</td><td>-</td><td>-</td></tr>
          <tr><td>list</td><td>下拉项数据集合</td><td>是</td><td>array</td><td>-</td><td>-</td></tr>
          <tr><td>keyvalue</td><td>下拉项显示名称、选中值 字段映射<br>label：显示名称的映射<br>value：选中值的映射</td><td>否</td><td>object</td><td>-</td><td>{label: 'name', value: 'id'}</td></tr>
          <tr><td>position</td><td>下拉框位置</td><td>-</td><td>string</td><td>top|bottom</td><td>bottom</td></tr>
        </table>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {DropMenu} from '../../../packages/index.js';
  
  export default {
    name: 'Dropmenu',
    components: {
      lvDropmenu: DropMenu
    },
    data () {
      return {
        code: '',
        option: {
          placeholder: '请选择内容',
          data: [{
            id: '选项1',
            name: '黄金糕'
          }, {
            id: '选项2',
            name: '双皮奶'
          }, {
            id: '选项3',
            name: '蚵仔煎'
          }, {
            id: '选项4',
            name: '龙须面'
          }, {
            id: '选项5',
            name: '北京烤鸭'
          }],
          unselect: ['选项2', '选项4'],
          result: ['选项3']
        }
      };
    },
    watch: {
      'option.result': function (val) {
        console.log('==value==', val);
      }
    },
    mounted: function () {
      this.code = '<lv-dropmenu :value.sync="option.result" :disabled="false" position="bottom" :list="option.data" :unselect="option.unselect" :placeholder="option.placeholder" :searchabled="true"></lv-dropmenu>';
    },
    methods: {
      // 
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-theme {}
</style>
