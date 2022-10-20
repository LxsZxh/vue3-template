/** 分页响应类型 */
export interface PaginationRes<T = any> {
  records: T[]
  total: number
  size: number
  current: number
}

/** 分页请求参数 */
export interface PaginationReq {
  pageNo?: number
  pageSize?: number
  queryList: QueryListItem[]
  sortList: SortListItem[]
}
export interface QueryListItem {
  method: string
  name: string
  or: number
  value: string
}

export interface SortListItem {
  name: string
  type: number
}

/** 下拉选项 */
export interface MySelectOption {
  id: string
  name: string
}
