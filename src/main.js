import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI, { size: 'small' });

import axios from 'axios'
Vue.config.productionTip = false


init()

async function init() {
  await getServerConfig();
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}


function getServerConfig() {
  const host =  window.location.origin
  return new Promise((resolve, reject) => {
    axios.get(host+'/config.json').then((result) => {
      let config = result.data;
      window.GCfg = config
      resolve();
    }).catch((error) => {
      console.log(error);
      reject()
    })
  })
}