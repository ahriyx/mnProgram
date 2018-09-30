import Vue from 'vue'
import App from './index'
const app = new Vue(App)
app.$mount()
// 修改头部的title的文本
export default{
  config: {
    navigationBarTitleText: 'todolist迁移'
  }
}
