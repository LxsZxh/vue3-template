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

function goEditor() {
  router.push({
    name: 'editor',
  })
}
</script>

<template>
  <div class="flex flex-col">
    <span>鼠标位置:{{ x }}--{{ y }}</span>
    <div class="mb-10px">
      <p class="mr-10px mb-10px">
        数字:{{ store.count }}
      </p>
      <n-button type="primary" @click="store.increment">
        +1
      </n-button>
    </div>

    <div class="mb-10px">
      <n-button type="success" class="mr-10px" @click="goEcharts">
        图表
      </n-button>
      <n-button type="success" @click="goEditor">
        富文本编辑器
      </n-button>
    </div>

    <router-view />
  </div>
</template>

<style lang='scss' scoped>
</style>
