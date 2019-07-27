<template>

  <div class="container">
    <!-- 顶部 Header 区域 -->
    <mt-header fixed title="黑马程序员 · Vue项目">
      <span slot="left" @click="goBack" v-show="flag">
        <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>

    <!-- 中间的 路由 router-view 区域 -->
    <transition>
      <router-view></router-view>
    </transition>
    <!-- 底部 TabBar 区域 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link to="/home" class="mui-tab-item-new">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link to="/member" class="mui-tab-item-new">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link to="/shopcar" class="mui-tab-item-new">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label" id="badge">购物车</span>
      </router-link>
      <router-link to="/search" class="mui-tab-item-new">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
import { deflate } from "zlib";

 export default {
     data() {
    return {
      flag: false
    };
  },
  created() {
    this.flag = this.$route.path === "/home" ? false : true;
  },
  methods: {
    goBack() {
      // 点击后退
      this.$router.go(-1);
    }
  },
 }
</script>
<style scoped>
.container {
  padding-top: 40px;
  overflow-x: hidden;
}
.container {
  padding-top: 40px;
  overflow-x: hidden;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter {
  transform: translateX(50%);
}
.v-leave-to {
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.2s ease;
}

.mui-bar-tab .mui-tab-item-new.mui-active {
    color: #007aff;
}

.mui-bar-tab .mui-tab-item-new {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}

.mui-bar-tab .mui-tab-item-new .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-new .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>