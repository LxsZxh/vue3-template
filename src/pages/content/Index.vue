<script setup lang='ts'>
import { useMousePosition } from '@/hooks/use-mouse-position'
const { x, y } = useMousePosition()
</script>

<template>
  <div>
    <span>鼠标位置:{{ x }}--{{ y }}</span>
  </div>
</template>

<style lang='scss' scoped>
</style>
