/**
 * 根据流下载文件
 * @param arrayBuffer 流
 * @param fileName 文件名
 * @param type 文件类型，默认 xlsx
 */
export function downloadArrayBuffer(
  arrayBuffer: ArrayBuffer,
  fileName: string,
  type = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
) {
  const aEl = document.createElement('a')
  aEl.style.display = 'none'
  aEl.href = URL.createObjectURL(
    new Blob([arrayBuffer], {
      type,
    }),
  )
  aEl.download = fileName
  document.body.appendChild(aEl)
  aEl.click()
  URL.revokeObjectURL(aEl.href)
  document.body.removeChild(aEl)
}
