export interface ILink {
  id: number
  subjectId: number
  parentId: number
  name: string
  sort: number
  linkUrl: string
  addTime: string
  remark?: any
  isDelete: boolean
  createTime: string
  modifyTime: string
}
