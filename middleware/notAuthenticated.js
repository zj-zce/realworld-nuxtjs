// 如果用户登录过重定向到主页

export default function ({ store, redirect }) {
  if (store.state.user) {
    return redirect('/')
  }
}
 