<script setup lang='ts'>
import { getLinks } from '@/service/apis/link/link'
async function setMenus() {
  const res = await getLinks()
  console.log(res)
}
</script>

<template>
  <div>
    <n-button @click="setMenus">
      点我
    </n-button>
  </div>
</template>

<style lang='scss' scoped>
</style>
