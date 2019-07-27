import Vue from "vue"
import app from "./app.vue"
import vueRouter from "vue-router"
Vue.use(vueRouter)
import resource from "vue-resource"
Vue.use(resource)

import "mint-ui/lib/style.css"
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)

// import { Swipe, SwipeItem,Button} from 'mint-ui';
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
import Mintui from "mint-ui"
Vue.use(Mintui)
import"mint-ui/lib/style.css"

import preview from "vue-preview"
Vue.use(preview)

import "./src/assets/lib/mui/css/mui.css"
import "./src/assets/lib/mui/css/icons-extra.css"
import "./src/assets/lib/mui/fonts/mui-icons-extra.ttf"

import router from './router.js'


import moment from "moment"
Vue.filter('times',function(dataStr,pattern = "YYY-MM-DD HH:mm:ss"){
  return moment(dataStr).format(pattern)
})

Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

let vm = new Vue({
  el: "#app",
  render: c => c(app),
  router
})
