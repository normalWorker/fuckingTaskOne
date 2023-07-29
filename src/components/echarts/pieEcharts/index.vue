<template>
  <div id="pie1"></div>
</template>
<script lang="ts">
import * as echarts from "echarts";

export default {
  name: "piechart",
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let options = {
        title: {
          text: "Data of a Week",
          subtext: "Fake Data",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: [
              { value: 1048, name: "Search Engine" },
              { value: 735, name: "Direct" },
              { value: 580, name: "Email" },
              { value: 484, name: "Union Ads" },
              { value: 300, name: "Video Ads" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };

      var chartDom = document.getElementById("pie1");
      var myChart = echarts.init(chartDom);
      myChart.setOption(options);
    },
  },
};
</script>

<style scoped>
#pie1 {
  padding: 0;
  width: 1000px;
  height: 600px;
}
</style>
