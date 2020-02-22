<template>
  <div class="pagebar-wrapper">
    <lv-dropmenu v-if="!simple" :value.sync="cpageSize" :list="sizes" position="top"></lv-dropmenu>
    <div class="p-r">
      <span :disabled="pageNum<=1" @click="pageNum>1&&clkItem(pageNum-1)">
        <i class="lv-icon-arrow-left"></i>
      </span>
      <template v-for="(item) in arr">
        <span :key="item" v-if="item<=totalPage" :class="{'active':pageNum===item,'theme-c':simple&&pageNum===item,'theme-b':!simple&&pageNum===item}" @click="clkItem(item)">{{item}}</span>
      </template>
      <span :disabled="pageNum>=totalPage" @click="pageNum<totalPage&&clkItem(pageNum+1)">
        <i class="lv-icon-arrow-right"></i>
      </span>
      <label v-if="!simple" class="total">共{{totalSize}}条，</label> 
      <label v-if="!simple" class="goto">
        前往<lv-input v-model="val" :clear="false" @enter="enterIpt"></lv-input>页
      </label>
    </div>
  </div>
</template>

<script type="text/babel">
  import DropMenu from '../../dropMenu/src/main.vue';
  import Input from '../../input/src/main.vue';

  export default {
    name: 'Pagebar',
    components: {
      lvDropmenu: DropMenu,
      lvInput: Input
    },
    data: function () {
      return {
        val: '',
        cpageSize: 0
      };
    },
    props: {
      // 是否简版
      'simple': {
        type: Boolean,
        default: false
      },
      'lenth': {
        default: 5
      },
      // 当前页
      'pageNum': {
        default: 1
      },
      // 每页显示记录数
      'pageSize': {
        default: 20
      },
      // 总记录数
      'totalSize': {
        default: 1
      },
      'sizes': {
        type: Array,
        default: function () {
          return [
            { id: 10, name: '10条/页' }, 
            { id: 20, name: '20条/页' }, 
            { id: 40, name: '40条/页' }, 
            { id: 80, name: '80条/页' }, 
            { id: 100, name: '100条/页' }
          ];
        }
      }
    },
    watch: {
      'cpageSize': function (val) {
        this.val = '';
        this.clkItem(1);
      }
    },
    computed: {
      // 计算总页数
      totalPage: function () {
        return parseInt((this.totalSize - 1) / this.cpageSize + 1);
      },
      arr: function () {
        let first = parseInt((this.pageNum - 1) / this.lenth) * this.lenth;
        let array = [];

        for (let i = 0;i < this.lenth;i++) {
          array[array.length] = ++first;
        }
        return array;
      }
    },
    created: function () {
      this.cpageSize = this.pageSize;
    },
    methods: {
      clkItem: function (item) {
        this.$emit('update:pageNum', item);
        this.$emit('update:pageSize', this.cpageSize);
        this.$emit('pagination', item);
      },
      enterIpt: function () {
        this.val = this.parseIptValue(this.val);
        this.clkItem(this.val);
      },
      parseIptValue: function (val) {
        val = parseInt(val) || 1;
        if (val < 1) {
          val = 1;
        } else if (val > this.totalPage) {
          val = this.totalPage;
        }
        return val;
      }
    }
  };
</script>

<style lang="scss">
  .pagebar-wrapper {
    input {
      padding: 0;
      text-align: center;
    }
  }
</style>
<style scoped lang="scss">
  .pagebar-wrapper {
    position: relative;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    user-select: none;
    
    .dropmenu {
      width: 100px;
    }
    .input {
      margin-left: 5px;
      margin-right: 5px;
      width: 40px;
    }

    .p-r {
      display: flex;
      flex-shrink: 0;
      align-items: center;

      > span {
        width: 24px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        border-radius: 4px;
        cursor: pointer;
      }
      
      > .total {
        margin-left: 10px;
      }
    }
  }
</style>