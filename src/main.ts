import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const labels = [
  'Radio A',
  'Radio B',
  'Radio C',
]

new Vue({
  render: h => h(App, {
    props: {
      labels
    }
  })
}).$mount('#app')
