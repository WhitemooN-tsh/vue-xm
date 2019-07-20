<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
        <router-link :to="'/home/newsInfo/' + item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url" />
          <div class="mui-media-body">
            <h3>{{ item.title }}</h3>
            <p class="mui-ellipsis">
              <span>发表日期：{{item.add_time}}</span>
              <span>点击：{{ item.click }}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.baseURL = "http://www.liulongbin.top:3005";

export default {
  data() {
    return {
      newsList: []
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      axios.get("/api/getnewslist").then(res => {
        console.log(res);
        if (res.data.status === 0) {
          this.newsList = res.data.message;
        }
      });
    }
  }
};
</script>

<style scoped>
.mui-table-view li h3 {
  font-size: 14px;
}
.mui-table-view li .mui-ellipsis {
  font-size: 12px;
  color: #226aff;
  display: flex;
  justify-content: space-between;
}
</style>
