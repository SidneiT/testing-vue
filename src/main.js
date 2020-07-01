import Vue from 'vue'
import App from './App'
import ProggressBar from '@/components/ProggressBar'

Vue.config.productionTip = false

const bar = new Vue(ProggressBar).$mount()
Vue.prototype.$bar = bar
document.body.appendChild(bar.$el)

new Vue({
  el: '#app',
  render: h => h(App)
})
