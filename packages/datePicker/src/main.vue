<!--
功能介绍：
1、
 -->

<template>
  <lv-input maxlength="19" :class="id" :placeholder="placeholder" :disabled="disabled" :readonly="true" :clear="false" v-model="val" @focus="isfocus=true" @blur="isfocus=false">
    <i class="icon lv-icon-date" :class="{'theme-c':isfocus}" :disabled="disabled" slot="right"></i>
  </lv-input>
</template>

<script type="text/babel">
  import laydate from '../laydate/laydate.js';
  import Input from '../../input/index.js';

  export default {
    name: 'DatePicker',
    components: {
      'lvInput': Input
    },
    data: function () {
      return {
        id: 'datepicker_' + new Date().getTime() + parseInt(Math.random() * 100),
        val: '',
        isfocus: false
      };
    },
    props: {
      // value: '',
      // 开始时间
      start: '',
      // 结束时间 - option.range 存在的时候生效
      end: '',
      placeholder: {
        default: '请选择日期'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      // 更多配置参考API https://www.layui.com/laydate/
      option: {
        default: function () {
          return {
            type: 'datetime',
            format: 'yyyy-MM-dd HH:mm:ss'
          };
        }
      }
    },
    watch: {
      start: function (val) {
        // this.val = this.dataFormat(val, this.option.format);
        this.countVal();
      }
    },
    computed: {
      separator: function () {
        return this.option.range === true ? ' - ' : (this.option.range ? (' ' + this.option.range + ' ') : '');
      }
    },
    beforeDestroy: function () {
      //
    },
    mounted: function () {
      // this.val = this.dataFormat(this.value, this.option.format);
      this.countVal();
      this.initLaydate();
    },
    methods: {
      // 根据start、end计算val
      countVal: function () {
        var str = this.dataFormat(this.start, this.option.format);

        if (this.option.range) {
          str += this.separator + this.dataFormat(this.end, this.option.format);
        }
        this.val = str === this.separator ? '' : str;
      },
      dataFormat: function (date, fmt) {
        if (!date || (date + '' === 'Invalid Date') || new Date(date) + '' === 'Invalid Date' || !fmt) {
          return '';
        }
        if (!isNaN(date) && (date + '').length === 10) {
          date += '000';
        }
        date = new Date(date);
        var o = {
          'M+': date.getMonth() + 1,
          'd+': date.getDate(),
          'h+': date.getHours(),
          'H+': date.getHours(),
          'm+': date.getMinutes(),
          's+': date.getSeconds(),
          'q+': Math.floor((date.getMonth() + 3) / 3),
          'S': date.getMilliseconds()
        };

        if (/(y+)/.test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
        }

        for (var k in o) {
          if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
          }
        }
        return fmt;
      },
      initLaydate: function () {
        let _this = this;
        let _tar = '.' + _this.id;

        laydate.render(Object.assign(_this.option, {
          elem: _tar + ' input',
          eventElem: _tar + ' .lv-icon-date:not([disabled])',
          trigger: 'click',
          change: function (value, date, endDate) {
            _this.$emit('input', isNaN(_this.start) ? value : new Date(value).getTime());
          },
          done: function (value, date, endDate) {
            // value 得到日期生成的值，如：2017-08-18
            // date 得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
            // endDate 得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
            // _this.$emit('input', isNaN(_this.value) ? value : (value ? new Date(value).getTime() : 0));
            var start = value;
            var end = '';

            if (_this.option.range) {
              start = value.split(_this.separator)[0];
              end = value.split(_this.separator)[1];
            }

            _this.$emit('update:start', (_this.start === '' || isNaN(_this.start)) ? start : (start ? new Date(start).getTime() : 0));
            _this.$emit('update:end', (_this.start === '' || isNaN(_this.start)) ? end : (end ? new Date(end).getTime() : 0));
          }
        }));
      }
    }
  };
</script>

<style lang="scss">
  @import url("../laydate/theme/default/laydate.css");

  .layui-laydate-footer span:hover {
    color: inherit;
    opacity: 0.8;
  }
  .layui-laydate-footer span[lay-type="date"] {
    color: inherit;
  }
</style>
<style scoped lang="scss">
  .lv-icon-date {
    font-size: 20px;
  }
</style>