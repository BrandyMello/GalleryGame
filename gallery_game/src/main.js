import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.config.devtools = true
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// new Vue({
//   el: '#app',
//   data() {
//     return {
//       info: null
//     }
//   },
//   mounted() {
//     axios
//       .get('https://api.harvardartmuseums.org/object?gallerynumber=1220&size=21&apikey=36e7a220-fdc7-11e9-9a5d-0b0eede4b42a')
//       .then(response => (this.info = response))
//   }
// })