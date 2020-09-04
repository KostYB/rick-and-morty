import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/style.scss'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

Vue.use(VueLazyload, {
  preLoad: 0,
  error: require(`${'@/assets/img/350.png'}`),
  loading: require(`${'@/assets/img/download.svg'}`),
  attempt: 3,
  lazyComponent: true,
  observer: true,
  throttleWait: 500
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

