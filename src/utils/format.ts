// 时间格式化
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)
const DEFAULT_FORMAT = 'YYYY-MM-DD HH:mm:ss'

export function formatArrText(arr: string[] = []) {
  return arr?.length ? arr.join('、') : '无'
}

/**
 * 格式化时间戳
 * @param timeStamp 时间戳
 * @param format 目标格式，默认为'YYYY-MM-DD HH:mm:ss'
 * @returns 格式化后的时间字符串
 */
export function formatTimeStamp(
  timeStamp: number,
  format: string = DEFAULT_FORMAT,
): string {
  return dayjs(timeStamp).format(format)
}

/** 根据 sort 获取 A、B、C、D... */
export function getUpperCaseLetterByNumber(n: number) {
  return String.fromCharCode(n + 64)
}
