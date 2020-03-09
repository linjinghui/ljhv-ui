<!-- 
功能介绍：
1、
 -->

<template>
  <lv-gantt :startTime="startTime" :endTime="endTime" :datas="datas">
    <template v-slot:block="{data,item}">
      <!-- 你的容器块组件 -->
      <div>1111111111</div>
    </template>
    <template v-slot:left="{data}">
      <!-- 你的行名组件 -->
      <div>2222</div>
    </template>
    <template v-slot:title>
      <!-- 你的表头组件 -->
      hola
    </template>
  </lv-gantt>
</template>

<script type="text/babel">
  import vGanttChart from 'v-gantt-chart';

  export default {
    name: 'Gantt',
    components: {
      'lvGantt': vGanttChart
    },
    data: function () {
      return {
        id: 'gantt_' + new Date().getTime() + parseInt(Math.random() * 100),
        // 时间轴开始时间
        startTime: '2019-11-11',
        // 时间结束时间
        endTime: '2020-01-11', 
        datas: [
          {
            id: 'test',
            gtArray: [
              {
                name: 'test', 
                start: '2019-01-11 18:18:18',
                end: '2019-01-11 18:18:18'
              }
            ],
            customKey: [ 
              {
                id: 'test',
                start: '2019-01-11 18:18:18',
                end: '2019-01-11 18:18:18'
              }
            ]
          }
        ]
        // [
        //   {
        //     id: 1, 
        //     name: 'name1', 
        //     type: 'type1', 
        //     colorPair: 'red', 
        //     speed: 10, 
        //     gtArray: [
        //       { id: 11, passenger: 101, start: '2019-12-1', end: '2019-12-5' }
        //     ]
        //   }
        // ]
      };
    },
    props: {
      value: {
        default: ''
      }
    },
    watch: {
      value: function (val, val2) {
        if (val && val2 === '') {
          // 第一次加载
        }
      }
    },
    computed: {
      // 
    },
    beforeDestroy: function () {
      // 
    },
    mounted: function () {
      // 
    },
    methods: {
      // 
    }
  };
</script>

<style>
.param table th:first-of-type {
	width: 100px;
}
.param table th:nth-of-type(2) {
	width: 100px;
}
.param table th:nth-of-type(4) {
	width: 100px;
}
</style>

<style scoped lang="scss">
  .wrap-gantt { }
</style>