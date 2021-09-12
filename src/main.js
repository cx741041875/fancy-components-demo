import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 配置忽略以 fc- 作为开头的标签
Vue.config.ignoredElements = [/^fc-/]

new Vue({
  render: h => h(App)
}).$mount('#app')
