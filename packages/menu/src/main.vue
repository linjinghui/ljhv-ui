
<template>
  <vperfect-scrollbar class="wrap-menu" :settings="settings" v-show="show">
    <div class="line" v-for="(item,index) in data" :key="'menu_'+index" 
    :class="{'theme-c active':multi?value.indexOf(index)!==-1:value[0]===index}" 
    @click="clk_item(index)">
      <div><slot name="line" :item="item">{{item}}</slot></div>
      <i class="cicon-tick"></i>
    </div>
  </vperfect-scrollbar>
</template>

<script type="text/babel">
  import VuePerfectScrollbar from 'vue-perfect-scrollbar';

  export default {
    name: 'Menu',
    components: {
      'vperfect-scrollbar': VuePerfectScrollbar
    },
    data: function () {
      return {
        id: 'btn_' + new Date().getTime() + parseInt(Math.random() * 100),
        // 滚动速度，默认1
        settings: {
          wheelSpeed: 0.5
        },
        hover: '',
        active: []
      };
    },
    props: {
      // 初始下标值
      value: {
        default: function () {
          return [];
        }
      },
      // 列表数据
      data: {
        default: function () {
          return [];
        }
      },
      show: {
        default: false
      },
      multi: {
        default: false
      }
    },
    methods: {
      emt_hide: function () {
        this.$emit('input', false);
      },
      clk_item: function (index) {
        var _value = JSON.parse(JSON.stringify(this.value));

        if (this.multi && _value.indexOf(index) >= 0) {
          // 取消选中
          _value.splice(_value.indexOf(index), 1);
        } else if (this.multi) {
          // 多选选中
          _value.push(index);
        } else {
          // 单选选中
          _value = [index];
        }
        this.$emit('input', _value);
        this.$nextTick(function () {
          var result = [];
          var _this = this;

          _value.forEach(function (item) {
            result[result.length] = _this.data[item];
          });
          this.$emit('cbkClkItem', result);
        });
      },
      evt_keydown: function (event) {
        if (this.show) {
          event = event || window.event;
          if (event.keyCode === 38 || event.keyCode === 40) {
            this.evt_arrow(event.keyCode);
          } else if (event.keyCode === 13) {
            this.evt_enter();
          } else if (event.keyCode === 27) {
            this.emt_hide();
          }
        }
      },
      evt_arrow: function (keyCode) {
        var num = this.hover === '' ? -1 : this.hover;

        if (keyCode === 38) {
          // 向上
          num -= 1;
        } else if (keyCode === 40) {
          // 向下
          num += 1;
        }
        if (num < 0) {
          num = this.data.length - 1;
        }
        if (num > this.data.length - 1) {
          num = 0;
        }
        this.hover = num;
      },
      evt_enter: function () {
        this.clk_item(this.hover);
      },
      utl_isVisible: function (dom, parantDom) {
        let result = '';

        if (dom && parantDom) {
          result = !(parantDom.scrollTop >= (dom.offsetTop + dom.offsetHeight) || (parantDom.scrollTop + parantDom.offsetHeight) <= (dom.offsetTop + dom.offsetHeight));
        }
        return result;
      }
    }
  };
</script>

<style lang="scss">
  .wrap-menu {
    .ps__scrollbar-x-rail,
    .ps__scrollbar-y-rail {
      z-index: 1;
    }
  }
</style>
<style scoped lang="scss">
  .wrap-menu {
    position: relative;
    padding-top: 5px;
    padding-bottom: 5px;
    width: 100%;
    border: solid 1px #e4e7ed;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    background-color: #fff;
    transition: max-height .1s;
    overflow: hidden;
    transform-origin: center top 0px;
    transition: all .2s;

    >.line {
      position: relative;
      display: flex;
      flex-shrink: 0;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      padding-left: 10px;
      padding-right: 10px;
      cursor: pointer;

      > div {
        flex: 1;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        user-select: none;
      }

      >.cicon-tick {
        display: none;
        flex: unset;
        width: 20px;
        font-size: 20px;
      }
    }
    >.line:not(.active):hover {
      background-color: #f5f7fa;
    }
    >.line.active > .cicon-tick {
      display: block;
    }
  }
</style>