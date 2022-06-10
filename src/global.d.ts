// 全局声明文件
import type { DialogApi, LoadingBarApi, MessageApi } from 'naive-ui'

declare global {
  interface Window {
    $message: MessageApi
    $dialog: DialogApi
    $loadingBar: LoadingBarApi
  }
}
