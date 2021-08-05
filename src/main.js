import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css'
import { library } from '@fortawesome/fontawesome-svg-core'
// 匯入 fontawesome 圖示
import { faKeyboard, faSearch, faClipboardList, faEye, faEyeSlash, faChevronCircleLeft, faChevronCircleRight, faWindowClose, faExclamation, faQuestion, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// 加入所需要的 fontawesome 圖示
// fa-book => faBook
library.add(faKeyboard, faSearch, faClipboardList, faEye, faEyeSlash, faChevronCircleLeft, faChevronCircleRight, faWindowClose, faExclamation, faQuestion, faCheck)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
