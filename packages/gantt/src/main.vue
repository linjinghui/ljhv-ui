<template>
  <div id="app">
    <div class="container">
      <v-gantt-chart :startTime="times[0]" :endTime="times[1]" :cellWidth="cellWidth" :cellHeight="cellHeight" :timeLines="timeLines"
        :titleHeight="titleHeight" :scale="scale" :titleWidth="titleWidth" showCurrentTime :hideHeader="hideHeader" :dataKey="dataKey"
        :arrayKeys="arrayKeys" :scrollToPostion="positionA" @scrollLeft="scrollLeftA" :datas="datasA">
        <template v-slot:block="{ data, item }">
          <Test :data="data" :updateTimeLines="updateTimeLines" :cellHeight="cellHeight" :currentTime="currentTime" :item="item"></Test>
        </template>
        <template v-slot:left="{ data }">
          <TestLeft :data="data"></TestLeft>
        </template>
        <template v-slot:title>铁胆火车侠日程表 </template>
      </v-gantt-chart>
    </div>
  </div>
</template>

<script>
import vGanttChart from 'v-gantt-chart';
import Test from './components/test.vue';
import TestLeft from './components/test-left.vue';
import { mockDatas } from './mock/index.js';

const scaleList = ('1,2,3,4,5,6,10,12,15,20,30,60,120,180,240,360,720,1440').split(',').map(function (n) {
  return parseInt(n);
});

export default {
  name: 'App',
  // Test, TestLeft, 
  components: { Test, TestLeft, vGanttChart },
  data () {
    return {
      timeLines: [
        {
          time: '2019-11-11 11:11:11'
        },
        {
          time: '2019-11-11 15:11:11',
          color: '#747e80'
        }
      ],
      currentTime: new Date(),
      cellWidth: 50,
      cellHeight: 30,
      titleHeight: 40,
      titleWidth: 250,
      scale: 60,
      times: [
        '2019-11-11 11:11:11',
        '2019-11-11 13:11:11'
      ],
      rowNum: 100,
      colNum: 10,
      datasA: [],
      datasB: [],
      dataKey: 'id',
      scaleList: scaleList,
      scrollToTime: '2019-11-11 16:11:11',
      scrollToPostion: { x: 10000, y: 10000 },
      hideHeader: false,
      hideSecondGantt: false,
      arrayKeys: ['gtArray', 'error'],
      scrollToY: 0,
      positionB: {},
      positionA: {}
    };
  },
  watch: {
    rowNum: 'updateData',
    colNum: 'updateData',
    times: 'updateData',
    scrollToY (val) {
      this.positionA = { x: val };
    }
  },
  mounted () {
    this.updateData();
  },
  methods: {
    updateData () {
      this.datasA = mockDatas(this.rowNum, this.colNum, this.times);
      this.datasB = mockDatas(this.rowNum, this.colNum, this.times);
    },
    updateTimeLines (timeA, timeB) {
      this.timeLines = [
        {
          time: timeA
        },
        {
          time: timeB,
          color: '#747e80'
        }
      ];
    },
    scrollLeftA (val) {
      this.positionB = { x: val };
    },
    scrollLeftB (val) {
      this.positionA = { x: val };
    }
  }
};
</script>

<style scoped>
body {
  font: 12px;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  height: calc(100vh - 2px);
}

label {
  margin-left: 10px;
}
input {
  width: 40px;
  height: 20px;
  vertical-align: middle;
}
input[type="range"] {
  width: 100px;
}
.top-bar {
  height: 40px;
}

.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.main-footer {
  /* height: 30px; */
}

>>> .el-slider {
  width: 100px;
}
</style>
