<script setup lang="ts">
import {
  dateZhCN,
  zhCN,
} from 'naive-ui'
import type { GlobalThemeOverrides } from 'naive-ui'
import App from './App.vue'

const primaryColor = '#3A78F3'
provide('primaryColor', primaryColor)

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor,
    primaryColorHover: '#338CFF',
    primaryColorSuppl: '#cb0000',
    primaryColorPressed: '#075ce5',
  },
}
</script>

<template>
  <n-config-provider
    :locale="zhCN"
    :date-locale="dateZhCN"
    :theme-overrides="themeOverrides"
  >
    <n-loading-bar-provider>
      <n-message-provider :duration="1000" :keep-alive-on-hover="true" :max="3">
        <n-dialog-provider>
          <App />
        </n-dialog-provider>
      </n-message-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>
