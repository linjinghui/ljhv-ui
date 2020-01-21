
<template>
  <div class="dropmenu" @click.stop>
    <lv-input v-model="resultText" :placeholder="searchabled&&resultText?resultText:placeholder" :disabled="disabled" :readonly="!searchabled" @focus="iptFocus" @change="iptChange">
      <i slot="right" class="icon lv-icon-arrow" :class="{open:show}" :disabled="disabled" @click="toggleMenu"></i>
    </lv-input>
    <vperfect-scrollbar ref="wrapUl" class="wrap-ul" :settings="{wheelSpeed:0.5}" :style="position==='bottom'?'top:calc(100% + 5px)':'bottom:calc(100% + 5px)'" v-if="show">
      <ul class="ul">
        <li class="nothing" v-if="!clist||clist.length===0">暂无记录</li>
        <li v-for="(item,index) in clist" :key="index"
          :disabled="unselect.indexOf(item[keyvalue.value])>-1" 
          :class="{'active theme-c':(typeof value)==='object'?(value.indexOf(item[keyvalue.value])!==-1):(value===item[keyvalue.value])}"
          @click="clkItem(item)">
          <p>{{item[keyvalue.label]}}</p>
          <i class="lv-icon-tick"></i>
        </li>
      </ul>
    </vperfect-scrollbar>
  </div>
</template>

<script type="text/babel">
  import VuePerfectScrollbar from 'vue-perfect-scrollbar';
  import Input from '../../input/index.js';

  export default {
    name: 'DropMenu',
    components: {
      'vperfect-scrollbar': VuePerfectScrollbar,
      'lvInput': Input
    },
    data: function () {
      return {
        keyword: '',
        show: false
      };
    },
    props: {
      // v-model, 数组表示多选、其他单选
      value: {
        default: ''
      },
      // 显示名称、选中值 字段映射，默认 name：显示名称，id：选中值
      keyvalue: {
        type: Object,
        default: {
          label: 'name',
          value: 'id'
        }
      },
      placeholder: {
        default: '请选择'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      // 是否允许检索
      searchabled: {
        type: Boolean,
        default: false
      },
      // 不允许选择的项 
      unselect: {
        default: function () {
          return [];
        }
      },
      list: {
        default: function () {
          return [];
        }
      },
      // 下拉框位置 top|bottom
      position: {
        default: 'bottom'
      }
    },
    computed: {
      clist: function () {
        var _this = this;
        var result = this.list.filter(function (item) {
          return item[_this.keyvalue.label].indexOf(_this.keyword) >= 0;
        });

        return result;
      },
      resultText: function () {
        var _this = this;
        var arr = (typeof this.value === 'object') ? this.value : [this.value];
        var result = [];

        this.list.forEach(function (element) {
          if (arr.indexOf(element[_this.keyvalue.value]) > -1) {
            result.push(element[_this.keyvalue.label]);
          }
        });
        return result.join('、');
      }
    },
    beforeDestroy: function () {
      window.removeEventListener('click', this.hideMenu);
    },
    mounted: function () {
      window.addEventListener('click', this.hideMenu);
    },
    methods: {
      toggleMenu: function () {
        if (!this.disabled) {
          this.show = !this.show;
        }
      },
      hideMenu: function () {
        this.show = false;
      },
      clkItem: function (info) {
        if (!this.disabled && this.unselect.indexOf(info[this.keyvalue.value]) === -1) {
          var result = '';
          var value = info[this.keyvalue.value];

          if ((typeof this.value) === 'object') {
            // 多选
            result = JSON.parse(JSON.stringify(this.value));

            if (this.value.indexOf(value) === -1) {
              result.push(value);
            } else {
              result.splice(this.value.indexOf(value), 1);
            }
          } else {
            // 单选
            result = value;
            this.hideMenu();
          }
          this.$emit('update:value', result);
        }
      },
      iptChange: function (data) {
        this.keyword = data;
        this.show = true;
      },
      iptFocus: function (data) {
        this.keyword = '';
        this.show = true;
      }
    }
  };
</script>

<style scoped lang="scss">
  .dropmenu {
    position: relative;

    .lv-icon-arrow {
      transform: rotate(-90deg);
      transition: all .1s;
    }
    .lv-icon-arrow.open {
      transform: rotate(90deg);
    }

    .wrap-ul {
      position: absolute;
      left: 0;
      width: 100%;
      max-height: 200px;
      border: solid 1px #e4e7ed;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      background-color: #fff;
      user-select: none;
      z-index: 3;

      li {
        display: flex;
        flex-shrink: 0;
        justify-content: space-between;
        padding: 6px 10px;
        line-height: unset;
      }
      li:first-of-type {
        margin-top: 6px;
      }
      li:last-of-type {
        margin-bottom: 6px;
      }
      li > p {
        flex: 1;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      li > i {
        display: none;
        width: 18px;
        height: 18px;
        font-size: 18px;
      }
      li.active > i {
        display: inline-block;
      }
      li:not(.nothing):not([disabled]):hover {
        cursor: pointer;
        background-color: #f5f7fa;
      }
      li.nothing {
        color: #999;
        justify-content: center;
      }
    }
  }
</style>