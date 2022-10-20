import MyRequest from './request'

// const request = new MyRequest({
//   baseURL: import.meta.env.VITE_API_BASE ?? '/',
//   interceptors: {
//     requestInterceptor(config) {
//       return config
//     },
//     responseInterceptor(res) {
//       console.log(res)
//       return res.data.data
//     },
//   },
// })

// export default request

function createRequest(baseURL: string) {
  // 生产环境，加上时间戳
  const params = import.meta.env.PROD
    ? {
        timestamp: new Date().getTime(),
      }
    : null

  return new MyRequest({
    baseURL,
    timeout: 60 * 1000,
    interceptors: {
      responseInterceptor(res) {
        if (res.data.code === 100)
          return res.data.data
        else
          window.$message.error(res.data.msg)
      },
    },
    params,
  })
}

export const pcRequest = createRequest(import.meta.env.TEMPLATE_API_PC_BASE_URL)
export const backendRequest = createRequest(import.meta.env.TEMPLATE_API_BACK_BASE_URL)
