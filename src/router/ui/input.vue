<template>
  <div class="wrap page-theme">
    <h1>输入框</h1>
    <dl>
      <dd><h3>xxxx</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code># nopaste: 是否不允许粘贴（默认false）
# autofocus: 自动聚焦（默认false）
# disabled: 禁用（默认false）
# clear: 是否需要清除按钮（默认true）
# readonly: 是否只读（默认false）
# rule: 校验规则（默认不校验，值：
  number：数字
  float：浮点型数字
  mobile：手机号
  fix：
  email：邮箱
  url：url地址
  letter：小写字母
  chinese：中文）
&lt;lv-input v-model="name" type="text" maxlength="10" placeholder="请输入中文" 
nopaste="false" autofocus="true" disabled="false" clear="true" rule="chinese" readonly="false" 
@focus="cbk_focus" @blur="cbk_blur" @keyup="cbk_keyup" @enter="cbk_enter"&gt;
  &lt;i class="cicon-tick center-v" slot="left"&gt;&lt;/i&gt;
  &lt;i class="cicon-search-cpt-chr center-v" slot="right"&gt;&lt;/i&gt;
&lt;/lv-input&gt;</code></pre>
        </section>
        <section style="padding:10px;">
          <lv-input v-model="name" type="text" maxlength="10" placeholder="请输入中文" nopaste="false" autofocus="true" disabled="false"
            clear="true" rule="chinese" readonly="false" @focus="cbk_focus" @blur="cbk_blur" @keyup="cbk_keyup" @enter="cbk_enter">
          <i class="cicon-tick center-v" slot="left"></i>
          <i class="cicon-search-cpt-chr center-v" slot="right"></i>
          </lv-input>
        </section>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Input} from 'web-base-ui';
  
  export default {
    name: 'Input',
    components: {
      lvInput: Input
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
