import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

var a = 100

new Vue({
  el:'#app',
  render: h=>h(App)
})