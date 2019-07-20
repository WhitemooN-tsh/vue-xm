import VueRouter from 'vue-router'


import HomeContainer from './src/components/tabbar/HomeContainer.vue'
import MemberContainer from './src/components/tabbar/MemberConrainer.vue'
import ShopcarContainer from './src/components/tabbar/ShopcarContainer.vue'
import SearchContainer from './src/components/tabbar/SearchContainer.vue'
import NewsList from './src/components/news/newsList.vue'
import NewsInfo from './src/components/news/newsInfo.vue'
import PhotoList from './src/components/photos/photoList.vue'


// 创建路由对象
export default new VueRouter({
  	routes: [
      {path:"/",component:HomeContainer},

      {path:"/home",component:HomeContainer},
      {path:"/member",component:MemberContainer},
      {path:"/shopcar",component:ShopcarContainer},
      {path:"/search",component:SearchContainer},
      {path:"/newsList",component:NewsList},
      {path:"/home/newsInfo/:id",component:NewsInfo},
      {path:"/home/photoList",component:PhotoList}

    ],
    linkActiveClass:"mui-active"
})
