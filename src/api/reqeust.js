import axios from 'axios'

const _env = import.meta.env || {}

export const createAxios = (config) => {
  const instance = axios.create({
    baseURL: _env.VITE_API_PREFIX || '',
    timeout: 60000, //超时配置
    withCredentials: true, //跨域携带cookie
    ...config // 自定义配置覆盖基本配置
  })

  // 添加请求拦截器
  instance.interceptors.request.use(
    function (config) {
      // 在发送请求之前做些什么
      // console.log('config:', config)
      // config.headers.Authorization = vm.$Cookies.get("vue_admin_token");
      return config
    },
    function (error) {
      // 对请求错误做些什么
      return Promise.reject(error)
    }
  )

  // 添加响应拦截器
  instance.interceptors.response.use(
    function (response) {
      console.log('response:', response)
      const { code } = response.data
      if (code === 0) return response.data
      return Promise.reject(response.data)
      // else if (code === 401) {
      //   jumpLogin()
      // } else {
      //   Message.error(message)
      //   return Promise.reject(response.data)
      // }
    },
    function (error) {
      // 对响应错误做点什么
      console.log('error-response:', error.response)
      console.log('error-config:', error.config)
      console.log('error-request:', error.request)
      // if (error.response) {
      //   if (error.response.status === 401) {
      //     jumpLogin()
      //   }
      // }
      // Message.error(error?.response?.data?.message || '服务端异常')
      return Promise.reject(error)
    }
  )
  return instance
}

export const $http = createAxios()
