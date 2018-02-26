import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'

import 'common/stylus/index.styl'

fastclick.attach(document.body)
// 移动端点击延迟300毫秒的小插件

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
