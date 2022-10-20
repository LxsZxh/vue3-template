import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { Interceptors, RequestConfig, RequestHook } from './types'

class MyRequest {
  instance: AxiosInstance
  interceptors?: Interceptors

  onBeforeRequest?: () => void
  onSuccess?: () => void
  onFail?: () => void

  constructor(config: RequestConfig & RequestHook) {
    this.instance = axios.create(config)

    this.interceptors = config.interceptors
    this.onBeforeRequest = config.onBeforeRequest
    this.onSuccess = config.onSuccess
    this.onFail = config.onFail

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch,
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch,
    )
  }

  // 通用请求方法
  request<T = any>(config: RequestConfig<T> & RequestHook): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor)
        config = config.interceptors.requestInterceptor(config)

      this.onBeforeRequest?.call(null)
      config.onBeforeRequest?.call(null)

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor)
            res = config.interceptors.responseInterceptor(res)

          this.onSuccess?.call(null)
          config.onSuccess?.call(null)
          resolve(res)
        })
        .catch((err) => {
          this.onFail?.call(null)
          config.onFail?.call(null)
          reject(err)
        })
    })
  }

  // GET、POST、PUT、DELETE、PATCH
  get<T = any>(config: RequestConfig<T> & RequestHook): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T = any>(config: RequestConfig<T> & RequestHook): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  put<T = any>(config: RequestConfig<T> & RequestHook): Promise<T> {
    return this.request<T>({ ...config, method: 'PUT' })
  }

  delete<T = any>(config: RequestConfig<T> & RequestHook): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T = any>(config: RequestConfig<T> & RequestHook): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default MyRequest
