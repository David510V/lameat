import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'
import dotenv from 'dotenv'
dotenv.config()

 
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC3kbhmb7WaXmwL4Do1B5XgDR6LOCWVHJo',
    libraries: 'places',
  },
})
import { firestorePlugin } from 'vuefire'
Vue.use(firestorePlugin)

Vue.config.productionTip = false

new Vue({
  router,
  
  created() {
    let htmlEl=document.querySelector("html");
        htmlEl.setAttribute('dir','rtl');
        htmlEl.setAttribute('lang','fa');
  },
  render: h => h(App)
}).$mount('#app')
