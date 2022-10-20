import type { ILink } from './types'
import { backendRequest } from '@/service/request/index'

interface ILinkRes {
  total: number
  pages: number
  linkInfoList: ILink[]
  pageSize: number
  pageNum: number
}

/**
 * 获取链接列表
*/
export function getLinks() {
  return backendRequest.get<ILinkRes>({
    url: '/link-type/5/link-info/',
  })
}
