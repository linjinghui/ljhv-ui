<template>
  <div class="table" :class="{pagebar:$attrs.totalSize>0}">
    <vperfect-scrollbar class="wrap-table" ref="wrapTable" :settings="{wheelSpeed:1}">
      <table :id="id">
        <tbody>
          <tr v-for="(item,index) in list" :key="'tr_'+index">
            <slot name="body" :item="item" :index="index"></slot>
          </tr>
        </tbody>
        <thead :class="{'fix':scrollTop>0}">
          <tr @click="clkHead"><slot name="head"></slot></tr>
        </thead>
        <tfoot>
          <tr>
            <td v-for="(info,index) in mergeRow" :key="'ft_'+index">{{info}}</td>
          </tr>
        </tfoot>
      </table>
    </vperfect-scrollbar>
    <lv-pagebar v-if="$attrs.totalSize>0" v-bind="$attrs" v-on="$listeners"></lv-pagebar>
  </div>
</template>

<script type="text/babel">
  import VuePerfectScrollbar from 'vue-perfect-scrollbar';
  import Sortable from '../sortablejs/Sortable.js';
  import Pagebar from '../../pagebar/src/main';

  export default {
    name: 'Table',
    components: {
      'vperfect-scrollbar': VuePerfectScrollbar,
      'lvPagebar': Pagebar
    },
    data: function () {
      return {
        id: 'table_' + new Date().getTime() + parseInt(Math.random() * 100),
        mergeRow: [],
        scrollTop: 0,
        list: this.data
      };
    },
    props: {
      // 表格列表数据
      list: {
        type: Array,
        default: function () {
          return [];
        }
      },
      // 是否拖拽排序
      dragSort: {
        type: Boolean,
        default: false
      },
      // 是否固定最后一列
      fixLastColumn: {
        type: Boolean,
        default: false
      },
      // 是否统计
      totalRow: {
        type: Boolean,
        default: false
      }
    },
    inheritAttrs: false,
    watch: {
      list: function (val) {
        var _this = this;

        setTimeout(function () {
          _this.getMegeRow();
        }, 100);
        setTimeout(function () {
          _this.scrollHandle();
        }, 200);
      }
    },
    beforeDestroy: function () {
      this.$refs.wrapTable.$el.removeEventListener('scroll', this.scrollHandle);
    },
    mounted: function () {
      var _this = this;

      this.$refs.wrapTable.$el.addEventListener('scroll', this.scrollHandle);
      setTimeout(function () {
        _this.getMegeRow();
        _this.scrollHandle();
      }, 100);
      this.setDragSort();
    },
    methods: {
      // 固定头\列
      scrollHandle: function (e) {
        var table = this.$refs.wrapTable.$el;
        var dmHead = table.querySelector('thead');
        var dmFoot = table.querySelector('tfoot');
        var left = table.scrollLeft;

        this.scrollTop = table.scrollTop;
        dmHead.style.transform = this.scrollTop > 0 ? ('translateY(' + this.scrollTop + 'px)') : '';
        dmFoot.style.transform = ('translateY(' + ((table.scrollHeight - table.clientHeight - this.scrollTop) * -1) + 'px)');

        // 固定最后一列
        if (this.fixLastColumn) {
          table.querySelectorAll('tr').forEach(function (tr) {
            var lastTd = tr.querySelector('td:last-of-type');

            if (lastTd) {
              lastTd.style = 'transform:translateX(' + ((table.scrollWidth - table.clientWidth - left) * -1) + 'px);background-color:#fff;';
            }
          });
        }
      },
      // 统计列表
      getMegeRow: function () {
        if (this.totalRow) {
          var table = this.$refs.wrapTable.$el;
          var rowTd = table.querySelectorAll('thead td');
          var rowTdNum = rowTd.length || 0;
          var tdNum = table.querySelectorAll('tbody td');
          var mergeRow = [];
          
          if (tdNum && tdNum.length > 0) {
            for (var i = 0;i < rowTdNum;i++) {
              var columns = table.querySelectorAll('tbody td:nth-of-type(' + (i + 1) + ')');
              var columnTotal = 0;

              for (var l = 0;l < columns.length;l++) {
                var val = columns[l].innerText;

                if (isNaN(val)) {
                  columnTotal = '-';
                  break;
                } else {
                  columnTotal += Number(val);
                }
              }
              mergeRow.push(columnTotal);
            }
            mergeRow[0] = '合计';
            this.mergeRow = mergeRow; 
          }
        }
      },
      // 设置表格拖拽
      setDragSort: function () {
        if (this.dragSort) {
          var _this = this;
          var el = this.$refs.wrapTable.$el.querySelector('table > tbody');

          this.sortable = Sortable.create(el, {
            ghostClass: 'sortable-ghost',
            animation: 100,
            onEnd: function (evt) {
              var arr = JSON.parse(JSON.stringify(_this.list));
              var start = evt.oldIndex;
              var end = evt.newIndex;

              arr.splice(end, 0, arr.splice(start, 1)[0]);
              _this.$emit('sort', arr);
            }
          });
        }
      },
      clkHead: function (e) {
        var orderKey = e.target.dataset.order;

        if (orderKey) {
          // 排序逻辑
          this.list = this.setHeadSort(this.list, orderKey);
        }
      },
      // 头 顺、倒 排序
      setHeadSort: function (arr, orderBy) {
        var _this = this;

        arr.sort(function (a, b) {
          var p1 = a[orderBy];
          var p2 = b[orderBy];
          var result = '';
          
          if (_this.orderMark) {
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
        _this.orderMark = !_this.orderMark;
      },
      // 分页回调
      pagination: function (data) {
        this.$emit('pagination', data);
      }
    }
  };
</script>

<style lang="scss">
  .wrap-table {
    position: relative;
    width: 100%;
    height: 100%;
    line-height: normal;
    font-size: 12px;
    overflow: auto;
    text-align: center;
    border: solid 1px #dee2e6;
    border-top: 0;

    table {
      position: relative;
      width: 100%;
      table-layout: fixed;
      word-wrap: break-word;

      .button {
        position: unset;
      }
    }

    thead,
    tfoot {
      background-color: #fff;
      box-shadow: 0 1px 1px #dee2e6;
    }

    tbody tr:nth-child(odd) {
      background-color: #f7f7f7;
    }
    tbody > tr:hover {
      background-color: #eee;
    }

    td {
      padding: 5px;
      width: 250px;
      height: 30px;
      box-shadow: inset 1px 1px 0 0 #dee2e6;
    }
    td:nth-of-type(1) {
      box-shadow: inset 0px 1px 0 0 #dee2e6;
    }
    thead td[data-order] {
      cursor: pointer;
      user-select: none;
    }
    thead td[data-order]:after {
      content: ' ↑↓';
    }

  }
  .pagebar .wrap-table {
    margin-bottom: 10px;
    height: calc(100% - 30px - 10px);
  }
</style>