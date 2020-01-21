<!--
功能介绍：
1、支持单选，v-model 传入的是非数组就可以单选，多选支持取消操作
 -->

<template>
  <label class="checkbox" :class="{'selected':selected}" :disabled="disabled" @click="clickHandle">
    <i :style="{'border-color':selected?'':'#999'}" class="lv-icon-tick" :class="{'theme-b':selected,'theme-bc':selected}"></i>
    <slot></slot>
  </label>
</template>

<script type="text/babel">
  export default {
    name: 'Checkbox',
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
  
  .checkbox {
    display: inline-flex;
    flex-shrink: 0;
    align-items: center;
    margin-right: 10px;
    line-height: 1;
    user-select: none;
    
    > i {
      margin-right: 5px;
      width: 16px;
      height: 16px;
      font-size: 14px;
      border-style: solid;
      border-width: 1px;
      border-radius: 2px;
    }
    > i:before {
      color: transparent;
    }
  }
  .checkbox.selected > i:before {
    color: #fff;
  }

  .checkbox:not([disabled]) {
    cursor: pointer;
  }

  .checkbox:not([disabled]):not(.selected):hover > i {
    opacity: 0.8;
  }

  .checkbox[disabled] > i {
    color: #bebebe;
  }
</style>