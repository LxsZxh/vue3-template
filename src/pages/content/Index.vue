<script setup lang='ts'>
import { storeToRefs } from 'pinia'
import { useMousePosition } from '@/hooks/use-mouse-position'
import useCounterStore from '@/store/counter'
const { x, y } = useMousePosition()
const store = useCounterStore()

const router = useRouter()
function goEcharts() {
  router.push({
    name: 'echarts',
  })
}
</script>

<template>
  <div class="flex flex-col">
    <span>鼠标位置:{{ x }}--{{ y }}</span>
    <div>
      <span class="mr-10px">数字:{{ store.count }}</span>
      <n-button type="primary" @click="store.increment">
        +1
      </n-button>
    </div>
    <div>
      <n-button type="success" @click="goEcharts">
        图表
      </n-button>
      <router-view />
    </div>
  </div>
</template>

<style lang='scss' scoped>
</style>
