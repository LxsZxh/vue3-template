import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

/**
 * 自定义拦截器类型
 *
 * 包含请求成功、请求失败、响应成功、响应失败四个拦截器
 *
 * 可传入泛型，指定响应结果类型来获取类型提示和约束
 */
export interface Interceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any

  responseInterceptor?: (response: T) => T
  responseInterceptorCatch?: (error: AxiosError) => any
}

/**
 * 自定义请求配置类型,继承自axios请求配置
 *
 * 增加拦截器属性，实现对每个请求实例、每个单独请求的拦截器配置
 */
export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  /**
   * 拦截器
   */
  interceptors?: Interceptors<T>
}

/**
 * 请求发起、响应成功、响应失败的钩子
 */
export interface RequestHook {
  /**
   * 请求发送之前执行的回调
   */
  onBeforeRequest?: () => void

  /**
   * 响应成功时执行的回调
   */
  onSuccess?: () => void

  /**
   * 响应失败时执行的回调
   */
  onFail?: () => void
}
