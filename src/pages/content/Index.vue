<script setup lang='ts'>
import { storeToRefs } from 'pinia'
import { useMousePosition } from '@/hooks/use-mouse-position'
import useCounterStore from '@/store/counter'
const { x, y } = useMousePosition()
const store = useCounterStore()
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
  </div>
</template>

<style lang='scss' scoped>
</style>
