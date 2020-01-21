<template>
  <div class="text-area" :class="{'theme-bc focus': isFocus, 'disabled': disabled+''==='true'}">
    <textarea ref="tta" :name="name" :placeholder="placeholder" :rows="rows" :readonly="readonly" :maxlength="maxlength" v-model="pvalue" :onpaste="noPaste?'return false':''" :disabled="disabled+''==='true'" @focus="fun_focus" @blur="fun_blur" @input="autoTextAreaHeight"></textarea>
    <p v-if="residualSize >= 0">还能输入{{residualSize}}个字</p>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'Textarea',
    data: function () {
      return {
        isFocus: false,
        pvalue: this.value
      };
    },
    props: {
      value: {
        default: ''
      },
      name: {
        default: ''
      },
      placeholder: {
        default: ''
      },
      rows: {
        default: 10
      },
      maxlength: '',
      autofocus: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      noPaste: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      // 是否高度自增
      autoheight: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      value: function (val) {
        if (this.pvalue !== val) {
          this.pvalue = val;
        }
      },
      pvalue: function (val) {
        var _this = this;

        this.debounce(function () {
          _this.$emit('input', _this.pvalue);
        }, 500)();
      },
      autofocus: function (val) {
        if (val) {
          this.handleAutoFocus();
        }
      }
    },
    computed: {
      residualSize: function () {
        let result;
        let valLength = this.pvalue ? this.pvalue.length : 0;

        if (this.maxlength) {
          result = this.maxlength - valLength;
        }
        return result;
      }
    },
    mounted: function () {
      this.autofocus && this.handleAutoFocus();
    },
    methods: {
      fun_focus: function () {
        this.isFocus = true;
        this.$emit('focus');
      },
      fun_blur: function () {
        this.isFocus = false;
        this.$emit('blur');
      },
      autoTextAreaHeight: function (e) {
        if (this.autoheight) {
          var el = e.target || e.srcElement;

          el.style.height = el.scrollTop + el.scrollHeight + 'px';
        }
      },
      handleAutoFocus: function () {
        this.$refs.tta.focus();
      },
      debounce: function (func, wait, immediate) {
        var timeout;

        return function () {
          var context = this;
          var args = arguments;
          var later = function () {
            timeout = null;
            if (!immediate) {
              func.apply(context, args);
            }
          };
          var callNow = immediate && !timeout;

          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) {
            func.apply(context, args);
          }
        };
      }
    }
  };
</script>

<style scoped lang="scss">
  .text-area {
    position: relative;
    width: 100%;
    border-style: solid;
    border-width: 1px;
    color: inherit;
    border-radius: 4px;
    background-color: #fff;
    vertical-align: top;

    >textarea {
      display: block;
      padding: 5px 10px;
      width: 100%;
      resize: none;
      border: 0;
      background-color: transparent;
      word-break: break-all;
    }
    >p {
      padding: 5px;
      text-align: right;
      color: #c3c3c3;
      font-size: 12px;
      user-select: none;
    }
  }

  .text-area:not(.focus) {
    border-color: #dadada;
  }

  .text-area.disabled {
    background-color: #f1f1f1;
    user-select: none;

    >textarea {
      cursor: default;
    }
  }
</style>