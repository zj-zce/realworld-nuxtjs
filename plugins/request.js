import axios from 'axios'

export const request = axios.create({
  baseURL: 'http://realworld.api.fed.lagounews.com'
})

// 通过插架机制可以拿到上下文
// 插架必须导出default成员
// 在拦截器里设置token
export default ({ store }) => {
  // 添加请求拦截器
  request.interceptors.request.use(
    function (config) {
      const { user } = store.state
      if (user && user.token) {
        config.headers.Authorization = `Token ${user.token}`
      }

      return config
    },
    function (error) {
      // 对请求错误做些什么
      return Promise.reject(error)
    }
  )
}
