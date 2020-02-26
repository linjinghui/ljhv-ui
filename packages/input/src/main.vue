<!--
功能介绍：
 -->

<template>
  <div class="input" :class="{'theme-bc':focus}" :style="'border-color:'+(focus?'':'#ddd')">
    <slot class="l-icon" name="left"></slot>
    <input autoComplete="off" ref="ipt"
      :name="name" 
      :type="ptype" 
      :disabled="disabled" 
      :maxlength="maxlength" 
      :placeholder="placeholder"
      :readonly="readonly"
      :onpaste="nopaste?'return false':''" 
      @input="handleInput" 
      @focus="handleFocus" 
      @blur="handleBlur" 
      @keyup="handleKeyup" 
      @keyup.enter="handleEnter">
    <i class="icon lv-icon-x-2" :disabled="disabled" @click="handleClear" v-if="clear&&!readonly&&value"></i>
    <i class="icon lv-icon-search" :disabled="disabled" @click="handleSearch" v-if="ptype==='search'"></i>
    <i class="icon lv-icon-eye" @click="handleTogglePwd" v-if="eye&&ptype==='password'"></i>
    <i class="icon lv-icon-eye-close" @click="handleTogglePwd" v-if="eye&&ptype==='text'"></i>
    <slot name="right"></slot>
  </div>
</template>

<script type="text/babel">

  export default {
    name: 'Input',
    data: function () {
      return {
        id: 'ipt_' + new Date().getTime() + parseInt(Math.random() * 100),
        focus: false,
        // 是否显示眼睛
        eye: false,
        ptype: this.type
      };
    },
    props: {
      value: '',
      type: {
        default: 'text'
      },
      name: '',
      maxlength: {
        default: 500
      },
      readonly: {
        type: Boolean,
        default: false
      },
      placeholder: '',
      nopaste: {
        type: Boolean,
        default: false
      },
      autofocus: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      clear: {
        type: Boolean,
        default: true
      },
      // number|mobile|fix|email|url|letter|chinese
      rule: ''
    },
    watch: {
      value: function (val) {
        this.handleSetInputVal(val);
      },
      type: function (val) {
        this.ptype = val;
      },
      autofocus: function (val) {
        if (val) {
          this.handleAutoFocus();
        }
      }
    },
    computed: {},
    beforeDestroy: function () {
      //
    },
    mounted: function () {
      this.eye = this.type === 'password';
      this.autofocus && this.handleAutoFocus();
      this.handleSetInputVal(this.value);
    },
    methods: {
      handleSetInputVal: function (value) {
        if (this.$refs.ipt.value !== value) {
          this.$refs.ipt.value = value;
        }
      },
      handleInput: function (e) {
        var _this = this;

        this.timer && setTimeout(this.timer);
        this.timer = setTimeout(function () {
          _this.$emit('input', e.target.value);
          _this.$emit('change', e.target.value);
        }, 100);
      },
      handleFocus: function () {
        if (!this.disabled) {
          this.focus = true;
          this.$emit('focus');
        }
      },
      handleAutoFocus: function () {
        this.$refs.ipt.focus();
      },
      handleBlur: function () {
        if (!this.disabled) {
          this.focus = false;
          this.$emit('blur');

          // if (this.rule) {
          //   this.$emit('input', this.regValue());
          // }
        }
      },
      handleKeyup: function (event) {
        this.$emit('keyup', event.keyCode);
      },
      handleEnter: function () {
        var _this = this;

        setTimeout(function () {
          _this.$emit('enter', _this.value);
        }, 200);
      },
      handleSearch: function () {
        if (!this.disabled) {
          this.$emit('search', this.value);
        }
      },
      handleClear: function () {
        if (!this.disabled) {
          this.handleSetInputVal('');
          this.handleAutoFocus();
          this.$emit('input', '');
          this.$emit('change', '');
        }
      },
      handleTogglePwd: function () {
        this.ptype = this.ptype === 'password' ? 'text' : 'password';
      },
      regValue: function () {
        let value = JSON.parse(JSON.stringify(this.value || ''));

        if (typeof value !== 'string') {
          value += '';
        }

        if (this.rule === 'number') {
          value = value.replace(/[\D]+/g, '');
        } else if (this.rule === 'float') {
          let _val = '';
          let _i = 0;

          // 删除非数字.的字符串
          _val = value.replace(/[^0-9.]+/g, '');
          // 去除多余的.
          _val = _val.replace(/\./g, function (a) {
            ++_i;
            return _i === 1 ? a : '';
          });
          value = _val;
        } else if (this.rule === 'mobile') {
          value = value.replace(/[\D]+/g, '');
          if (value.indexOf('1') !== 0) {
            value = '1' + value.substring(0, 10);
          } else {
            value = value.substring(0, 11);
          }
        } else if (this.rule === 'fix') {
          value = value.replace(/[^0-9-]+/g, '');
        } else if (this.rule === 'email') {
          value = value.replace(/^@+|@+$/g, '').replace(/\s+/g, '');
          if (value.indexOf('@') < 0) {
            value = value + '@qq.com';
          }
        } else if (this.rule === 'url') {
          if (value.indexOf('http://') !== 0 && value.indexOf('https://') !== 0) {
            value = 'http://' + value;
          }
        } else if (this.rule === 'letter') {
          value = value.replace(/[^a-zA-Z]+/g, '');
        } else if (this.rule === 'chinese') {
          value = value.replace(/[^\u4e00-\u9fa5]+/g, '');
        } else if (typeof this.rule === 'string') {
          value = value.replace(new RegExp(this.rule, 'g'), '');
        }

        return value;
      }
    }
  };
</script>

<style scoped lang="scss">
  input {
    flex: 1;
    padding: 0 10px;
    width: 100%;
    height: 100%;
    border: 0;
    color: inherit;
    font: inherit;
    outline: medium;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  input[disabled] {
    cursor: text;
    user-select: none;
  }

  input::-ms-clear {
    display: none;
  }
  .input {
    position: relative;
    display: inline-flex;
    flex-shrink: 0;
    align-items: center;
    width: 100%;
    height: 30px;
    line-height: 1;
    border-style: solid;
    border-width: 1px;
    border-radius: 4px;
    overflow: hidden;
  }
  .icon {
    margin-right: 10px;
    cursor: pointer;
    color: #666;
  }
  .icon:not([disabled]):hover {
    opacity: 0.8;
  }
  .lv-icon-eye,
  .lv-icon-eye-close {
    font-size: 22px;
  }

  .l-icon {
    margin-left: 10px;
  }
</style>