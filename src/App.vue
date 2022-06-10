<script setup lang="ts">
import { useDialog, useLoadingBar, useMessage } from 'naive-ui'

// 将全局api挂载到window
window.$message = useMessage()
window.$dialog = useDialog()
window.$loadingBar = useLoadingBar()

useTitle(import.meta.env.TEMPLATE_APP_NAME)
</script>

<template>
  <router-view />
</template>
