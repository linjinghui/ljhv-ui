<!-- 
功能介绍：
1、
 -->

<template>
  <div class="wrap-game-pt" :class="{'err':!checkOrder}" :style="{'width':width+'px','height':height+'px'}">
      <div class="block" v-for="(item,index) in arr" :key="'block_'+index" :style="{
        'width':blockWh.width+'px',
        'background-image': 'url('+imgUrl+')',
        'background-size': width+'px '+height+'px',
        'background-position': blockWh.width*((item-1)%h)*-1+'px '+blockWh.height*parseInt((item-1)/h)*-1+'px',
        'height':blockWh.height+'px'}"
        :draggable="draggable"
        @dragstart="dragstart(index,$event)"
        @dragend="dragend"
        @dragover="dragover(index,$event)">{{item}}</div>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'GamePt',
    data: function () {
      return {
        width: 800,
        height: 600,
        arr: [],
        draggable: true,
        dragIndex: '',
        dragoverIndex: '',
        dragX: 0,
        dragY: 0,
        dragDrct: ''
      };
    },
    props: {
      // 水平方向个数
      h: {
        default: 3
      },
      // 垂直方向个数
      v: {
        default: 2
      },
      maxWitdh: {
        default: 1000
      },
      maxHeight: {
        default: 900
      },
      imgUrl: ''
    },
    watch: {
      h: function () {
        this.initArr();
      },
      v: function () {
        this.initArr();
      },
      dragX: function (val1, val2) {
        this.dragDrct = (val1 > val2) ? 'right' : 'left';
        // console.log('==watch dragX==', this.dragDrct);
      },
      imgUrl: function () {
        this.loadImg();
      }
    },
    computed: {
      // 计算块的长、宽
      blockWh: function () {
        return {
          width: this.width / this.h,
          height: this.height / this.v
        };
      },
      // 校验数组顺序是否正确
      checkOrder: function () {
        let ret = true;

        for (let i = 0;i < this.arr.length;i++) {
          if (this.arr[i] - i !== 1) {
            ret = false;
            break;
          }
        }
        this.$emit('callback', ret);
        return ret;
      }
    },
    beforeDestroy: function () {
      // 
    },
    mounted: function () {
      this.initArr();
      let _this = this;

      this.loadImg(function () {
        _this.randomSort();
      });
    },
    methods: {
      initArr: function () {
        let arr = [];

        for (let i = 1;i <= this.h * this.v;i++) {
          arr.push(i);
        }
        this.arr = arr;
      },
      /** 
       * 移动
       * index: 需要移动的下标
       * toIndex: 移动到 下标处
       * */ 
      moveTo: function (index, toIndex, isBeforAfter) {
        this.arr.splice(isBeforAfter === 1 ? toIndex : (toIndex - 1), 0, this.arr.splice(index, 1)[0]);
      },
      // 随机打乱数组
      randomSort: function () {
        this.arr.sort(function (a, b) {
          return Math.random() > 0.5 ? -1 : 1;
        }); 
      },
      // 加载背景图片
      loadImg: function (callback) {
        var _this = this;

        if (this.imgUrl) {
          var img = new Image();

          img.src = this.imgUrl;
          img.onload = function () {
            // 图片加载完成
            let wh = _this.maxWidthHeight(img.width, img.height);

            _this.width = wh.width;
            _this.height = wh.height;
            callback && callback();
          };
          // img.onerror = function () {};
        }
      },
      // 设置图片最大宽高
      maxWidthHeight: function (width, height) {
        let maxWidth = this.maxWitdh;
        let maxHeight = this.maxHeight;
        let w = '';
        let h = '';

        if (width > maxWidth) {
          w = maxWidth;
          h = maxWidth / width * maxHeight;
        }
        if (height > maxHeight) {
          h = maxHeight;
          w = maxHeight / height * maxWidth;
        }
        return {
          width: w,
          height: h
        };
      },
      dragstart: function (index, e) {
        let _this = this;

        e.dataTransfer.setData('infoName', ' ');
        setTimeout(function () {
          _this.dragIndex = index;
        }, 50);
      },
      dragend: function () {
        // console.log('==dragend==' + this.dragIndex, this.dragoverIndex);
        // 会将index1位置上的元素替换为index2位置的元素
        // this.arr.splice(this.dragIndex, 1, this.arr[this.dragoverIndex]);
        this.arr.splice(this.dragoverIndex, 1, ...this.arr.splice(this.dragIndex, 1, this.arr[this.dragoverIndex]));
        // this.moveTo(this.dragIndex, this.dragoverIndex, this.dragDrct === 'right' ? 1 : 0);
        this.dragIndex = '';
        this.dragoverIndex = '';
      },
      dragover: function (index, e) {
        // // console.log('==dragover==', index);
        this.dragoverIndex = index;
        if (e) {
          this.dragX = e.x;
          this.dragY = e.y;
        }
      }
    }
  };
</script>

<style scoped lang="scss">
  .wrap-game-pt {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    display: flex;
    flex-wrap: wrap;

    > .block {
      position: relative;
      border: solid 1px #888;
      border-radius: 4px;
      background-repeat: no-repeat;
      z-index: 2;
    }
  }
  .wrap-game-pt:after {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    box-shadow: 0 0 40px #8bc34a;
  }
  .wrap-game-pt.err:after {
    box-shadow: 0 0 40px #ff5722;
  }

  @keyframes zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}
  @keyframes zoomOut{0%{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}to{opacity:0}}
  
  .slide-fade-enter-active {
    animation: zoomIn .5s;
  }

  .slide-fade-leave-active {
    animation: zoomOut .5s;
  }

  .slide-fade-enter, .slide-fade-leave-to {
    // right: -410px;
  }
</style>