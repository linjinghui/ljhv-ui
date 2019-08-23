<template>
  <div class="wrap page-theme">
    <h1>下拉框</h1>
    <dl>
      <dd><h3>可多选的下拉框</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code>&lt;lv-drop-menu v-bind="option" v-model="option.result" @cbkClkItem="cbkClkItem"&gt;&lt;/lv-drop-menu&gt;
&lt;script type="text/babel"&gt;
export default {
  data () {
    return {
      option: {
        placeholder: '请选择内容',
        # 显示隐藏下拉框
        show: true,
        # 下拉框开启多选(默认单选false)
        multi: true,
        # 是否禁用下拉框(默认否false)
        disabled: false,
        # 下拉框数据
        data: ['黄金高', '双皮奶', '拉希米', '换节奏', '北京烤鸭', '无泡沫', '长达作为', '榴莲皮'],
        # 已选中下拉框 下标集合
        result: [1, 2]
      }
    };
  },
  methods: {
    cbkClkItem: function (data) {
      console.log(data);
    }
  }
}
&lt;/script&gt;</code></pre>
        </section>
        <section style="padding:10px;">
          <lv-drop-menu v-bind="option" v-model="option.result" @cbkClkItem="cbkClkItem"></lv-drop-menu>
        </section>
      </dd>
    </dl>

    <dl>
      <dd><h3>单选下拉框，支持输入框检索、自定义菜单内容</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code>&lt;lv-drop-menu v-bind="option2" v-model="option2.result" @cbkClkItem="cbkClkItem"&gt;
  &lt;p slot="line" slot-scope="props"&gt;{props.item.name}&lt;/p&gt;
&lt;/lv-drop-menu&gt;
&lt;script type="text/babel"&gt;
export default {
  data () {
    return {
      option2: {
        placeholder: '请选择',
        show: false,
        multi: false,
        disabled: false,
        # 是否禁用输入检索功能(默认否false)
        readonly: false,
        data: [{name: 'name1', age: 11}, {name: 'name2', age: 12}, {name: 'name3', age: 13}, {name: 'name4', age: 14}],
        result: [2]
      }
    };
  },
  methods: {
    cbkClkItem: function (data) {
      console.log(data);
    }
  }
}
&lt;/script&gt;</code></pre>
        </section>
        <section style="padding:10px;">
          <lv-drop-menu v-bind="option2" v-model="option2.result" @cbkClkItem="cbkClkItem">
            <p slot="line" slot-scope="props">{{props.item.name}}</p>
          </lv-drop-menu>
        </section>
      </dd>
    </dl>

    <dl>
      <dd><h3>异步检索下拉框</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code>&lt;lv-drop-menu v-bind="option3" v-model="option3.result" @cbkClkItem="cbkClkItem" @search="search"&gt;
  &lt;p slot="line" slot-scope="props"&gt;{props.item.name}&lt;/p&gt;
&lt;/lv-drop-menu&gt;
&lt;script type="text/babel"&gt;
export default {
  data () {
    return {
      option3: {
        placeholder: '回车搜索',
        show: false,
        isSearch: false,
        data: [],
        result: []
      }
    };
  },
  methods: {
    cbkClkItem: function (data) {
      console.log(data);
    },
    search: function (data) {
      console.log(data);
      var _this = this;

      this.option3.data = [];
      this.option3.isSearch = true;
      // 获取数据
      setTimeout(function () {
        _this.option3.isSearch = false;
        _this.option3.data = [{name: 'name1', age: 11}, {name: 'name2', age: 12}, {name: 'name3', age: 13}, {name: 'name4', age: 14}];
      }, 3000);
    }
  }
}
&lt;/script&gt;</code></pre>
        </section>
        <section style="padding:10px;">
          <lv-drop-menu v-bind="option3" v-model="option3.result" @cbkClkItem="cbkClkItem" @search="search">
            <p slot="line" slot-scope="props">{{props.item.name}}</p>
          </lv-drop-menu>
        </section>
      </dd>
    </dl>

  </div>
</template>

<script>
  import {Dropmenu} from 'web-base-ui';
  
  export default {
    name: 'DropMenu',
    components: {
      lvDropMenu: Dropmenu
    },
    data () {
      return {
        option: {
          placeholder: '请选择内容',
          show: true,
          multi: true,
          disabled: false,
          readonly: false,
          data: ['黄金高', '双皮奶', '拉希米', '换节奏', '北京烤鸭', '无泡沫', '长达作为', '榴莲皮'],
          result: [1, 2]
        },
        option2: {
          placeholder: '请选择',
          show: false,
          multi: false,
          disabled: false,
          readonly: false,
          data: [{name: 'name1', age: 11}, {name: 'name2', age: 12}, {name: 'name3', age: 13}, {name: 'name4', age: 14}],
          result: [2]
        },
        option3: {
          placeholder: '回车搜索',
          show: false,
          isSearch: false,
          data: [],
          result: []
        }
      };
    },
    mounted: function () {
      // 
    },
    methods: {
      parseHtmlStr (htmlstr) {
        console.log(htmlstr.replace(/</g, '&lt;').replace(/>/g, '&gt;'));
      },
      cbkClkItem: function (data) {
        console.log('====cbkClkItem====');
        console.log(data);
      },
      search: function (data) {
        console.log(data);
        var _this = this;

        this.option3.data = [];
        this.option3.isSearch = true;
        // 获取数据
        setTimeout(function () {
          _this.option3.isSearch = false;
          _this.option3.data = [{name: 'name1', age: 11}, {name: 'name2', age: 12}, {name: 'name3', age: 13}, {name: 'name4', age: 14}];
        }, 3000);
      }
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-theme {}
</style>
