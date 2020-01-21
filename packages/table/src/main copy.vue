<template>
  <vperfect-scrollbar class="wrap-table" :class="{'order': order}" ref="wrapTable" :settings="settings">
    <table>
      <thead :class="{'fix':scrollTop>0}">
        <slot name="head"></slot>
      </thead>
      <tbody>
        <template v-for="(item,index) in list">
          <tr class="temp" :key="'tr_u_'+index" v-if="drag&&option.dragoverIndex===index&&option.dragDrct==='up'">
            <td :colspan="tdCount"></td>
          </tr>
          <tr :key="'tr_'+index" :draggable="drag" v-show="option.dragIndex!==index" 
            @dragstart="dragstart(index,$event)" @dragend="dragend" @dragover="dragover(index,$event)">
            <slot name="body" :item="item" :index="index"></slot>
          </tr>
          <tr class="temp" :key="'tr_d_'+index" v-if="drag&&option.dragoverIndex===index&&option.dragDrct==='down'">
            <td :colspan="tdCount"></td>
          </tr>
        </template>
      </tbody>
    </table>
  </vperfect-scrollbar>
</template>

<script type="text/babel">
  import VuePerfectScrollbar from 'vue-perfect-scrollbar';

  export default {
    name: 'Table',
    components: {
      'vperfect-scrollbar': VuePerfectScrollbar
    },
    data: function () {
      return {
        // 滚动速度，默认1
        settings: {
          wheelSpeed: 1
        },
        scrollTop: 0,
        option: {
          // 备份数据
          backup: [],
          // start|end
          // dragStatus: 'end',
          dragIndex: '',
          dragoverIndex: '',
          // up|down
          dragDrct: 'down',
          dragY: 0
        },
        list: this.data
      };
    },
    props: {
      data: {
        type: Array,
        default: function () {
          return [];
        }
      },
      // 是否需要排序
      order: {
        default: false
      },
      // 是否需要拖拽排序
      drag: {
        default: false
      }
    },
    watch: {
      data: function (val) {
        this.list = val;
        this.copyData();
      }
    },
    computed: {
      tdCount: function () {
        return this.$slots.head[0].elm.childElementCount;
      }
    },
    mounted: function () {
      this.$refs.wrapTable.$el.addEventListener('scroll', this.scrollHandle);
      this.copyData();
    },
    methods: {
      // 备份数据
      copyData: function () {
        if (this.list) {
          this.option.backup = JSON.parse(JSON.stringify(this.list));
        }        
      },
      // 还原
      restore: function () {
        this.list = this.option.backup;
      },
      scrollHandle: function (e) {
        let dmHead = e.target.querySelector('thead');

        this.scrollTop = e.target.scrollTop;
        dmHead.style.transform = 'translateY(' + e.target.scrollTop + 'px)';
      },
      setOrder: function (arr, orderBy) {
        if (this.order) {
          arr.sort(function (a, b) {
            var p1 = a[orderBy];
            var p2 = b[orderBy];
            var result = '';
            
            if (window.orderMark) {
              if (isNaN(p1) || isNaN(p2)) {
                result = (p1 + '').localeCompare(p2 + '');
              } else {
                result = p1 - p2;
              }
            } else if (isNaN(p1) || isNaN(p2)) {
              result = (p2 + '').localeCompare(p1 + '');
            } else {
              result = p2 - p1;
            }
            return result;
          });
          window.orderMark = !window.orderMark;
        }
      },
      dragstart: function (index, e) {
        let _this = this;

        e.dataTransfer.setData('infoName', ' ');
        setTimeout(function () {
          _this.option.dragIndex = index;
        }, 50);
      },
      dragend: function () {
        if (this.option.dragoverIndex >= 0) {
          this.list = this.moveArray(this.list, this.option.dragIndex, this.option.dragoverIndex, (this.option.dragDrct === 'down') ? 1 : 0);
        }
        this.option.dragIndex = '';
        this.option.dragoverIndex = '';
        this.$emit('sort', this.list);
      },
      dragover: function (index, e) {
        let domTable = this.$refs.wrapTable.$el;
        let theadHeight = domTable.querySelector('thead').offsetHeight;
        let boundingClientRect = domTable.getBoundingClientRect();
        let height = boundingClientRect.height;
        let domY = boundingClientRect.y;
        let fz = theadHeight || 50;

        this.option.dragoverIndex = index;
        if (e) {
          this.option.dragDrct = this.option.dragY < e.y ? 'down' : 'up';
          this.$nextTick(function () {
            this.option.dragY = e.y;
          });
          if (e.y - domY <= fz + theadHeight) {
            domTable.scrollTop -= theadHeight;
          } else if (height + domY - e.y <= fz) {
            domTable.scrollTop += theadHeight;
          }
        }
      },
      drop: function (index, e) {
        // console.log('====放下====' + index);
        // console.log(e);
      },
      /**
      * 数组中移动元素到指定位置
      * @param {int} moveInd - 目标位置下标
      * @param {int} moveToInd - 移动到指定位置下标
      * @param {int} isBeforAfter - 0：前面插入、1：后面插入（默认）
      */
      moveArray: function (arr, moveInd, moveToInd, isBeforAfter) {
        var _arr = JSON.parse(JSON.stringify(arr));
        var item = _arr.splice(moveInd, 1);
        
        if (moveInd > moveToInd) {
          moveToInd += 1;
        }
        if (isBeforAfter === 0) {
          moveToInd -= 1;
        }
        
        _arr.splice(moveToInd, 0, item[0]);
        return _arr;
      }
    }
  };
</script>

<style lang="scss">
  .wrap-table {
    position: relative;
    width: 100%;
    height: 100%;
    font-size: 12px;
    overflow: auto;

    table {
      width: 100%;
      table-layout: fixed;
      word-wrap: break-word;

      thead.fix {
        box-shadow: 0 1px 1px #e3e3e3;
      }

      tbody > tr:nth-child(odd) {
        background-color: #f7f7f7;
      }

      .temp {
        height: 30px;
        border: dashed 1px #ccc;
        border-left: 0;
        border-right: 0;
      }

      thead > tr,
      tbody > tr:nth-child(even) {
        background-color: #fff;
      }

      tbody > tr:hover {
        background-color: #eee;
      }

      td {
        padding-left: 10px;
        padding-top: 5px;
        padding-bottom: 5px;
        height: 32px;
        border-style: solid;
        border-width: 0;
        border-color: transparent;
        border-collapse: collapse;

        .button {
          position: unset;
        }
      }
    }
  }
  
  .wrap-table.order {
    table thead {
      td:not(.no-order) {
        user-select: none;
        cursor: pointer;
      }
      td:not(.no-order):hover:after {
        content: (' ↑↓');
      }
    }
  }
</style>