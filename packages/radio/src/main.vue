<!--
功能介绍：
1、支持多选，v-model 传入的是数组就可以多选，多选支持取消操作
 -->

<template>
  <label class="radio" :class="{'selected':selected}" :disabled="disabled" @click="clickHandle">
    <i :style="{color:selected?'':'#999'}" :class="{'lv-icon-radio':!selected,'lv-icon-radio-2':selected,'theme-c':selected}"></i>
    <slot></slot>
  </label>
</template>

<script type="text/babel">
  export default {
    name: 'Radio',
    data: function () {
      return {};
    },
    props: {
      // 禁用
      disabled: {
        type: Boolean,
        default: false
      },
      // v-model
      value: '',
      // 值
      val: '',
      // 选中前执行
      before: {
        type: Function,
        default: function (callback) {
          callback && callback();
        }
      }
    },
    watch: {},
    computed: {
      selected: function () {
        let result = false;

        if ((typeof this.value) === 'object') {
          result = this.value.indexOf(this.val) !== -1;
        } else {
          result = this.value === this.val;
        }
        return result;
      }
    },
    beforeDestroy: function () {
      //
    },
    mounted: function () {
      //
    },
    methods: {
      clickHandle: function () {
        if (!this.disabled) {
          let _this = this;

          _this.before(function () {
            let result = JSON.parse(JSON.stringify(_this.value));

            if ((typeof result) === 'object') {
              let index = result.indexOf(_this.val);
              
              if (index === -1) {
                result.push(_this.val);
              } else {
                result.splice(index, 1);
              }
            } else {
              result = _this.val;
            }
            _this.$emit('input', result);
          });
        }
      }
    }
  };
</script>
  
<style scoped lang="scss">
  
  .radio {
    display: inline-flex;
    flex-shrink: 0;
    align-items: center;
    margin-right: 10px;
    line-height: 1;
    user-select: none;
    
    > i {
      margin-right: 5px;
      font-size: 20px;
    }
  }

  .radio:not([disabled]) {
    cursor: pointer;
  }

  .radio:not([disabled]):not(.selected):hover > i {
    opacity: 0.8;
  }

  .radio[disabled] > i {
    color: #bebebe;
  }
</style>