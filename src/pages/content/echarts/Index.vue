<script setup lang='ts'>
import * as echarts from 'echarts/core'
import type { PieSeriesOption } from 'echarts/charts'
import { PieChart } from 'echarts/charts'
import type { LegendComponentOption, TooltipComponentOption } from 'echarts/components'
import { LegendComponent, TooltipComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import type { ECharts } from 'echarts/core'

type ECOption = echarts.ComposeOption<PieSeriesOption | TooltipComponentOption | LegendComponentOption>
echarts.use([PieChart, TooltipComponent, CanvasRenderer, LegendComponent])

const echartBox = ref()
const myEcharts = ref<ECharts>()

/** 监听图表容器的大小并改变图表的大小 */
function resizeEcharts() {
  myEcharts.value?.resize()
}

const pie = () => {
  const options: ECOption = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'horizontal',
    },
    series: [
      {
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0,0,0,0.5)',
          },
        },
      },
    ],
  }
  myEcharts.value = echarts.init(echartBox.value)
  myEcharts.value?.setOption(options)
  window.addEventListener('resize', resizeEcharts)
}

onMounted(() => {
  setTimeout(() => {
    pie()
  }, 500)
})
</script>

<template>
  <div>
    <div ref="echartBox" class="h-400px" />
  </div>
</template>

<style lang='scss' scoped>
</style>
