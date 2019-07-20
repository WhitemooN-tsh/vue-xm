<template>
  <div class="newsinfo-container">
    <h3 class="title">{{ newsinfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ newsinfo.add_time | times }}</span>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span>点击次数:{{ newsinfo.click }} 次</span>
    </p>
    <div class="content" v-html="newsinfo.content"></div>

    <comment-box :id="this.id"></comment-box>
  </div>
</template>

<script>
import comment from "../subcomponents/comment.vue";

export default {
  data() {
    return {
      id: this.$route.params.id,
      newsinfo: {}
    };
  },
  created() {
    this.getNewsInfo();
  },
  methods: {
    getNewsInfo() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getnew/" + this.id)
        .then(res => {
          this.newsinfo = res.body.message[0];
        });
    }
  },
  components: {
    "comment-box": comment
  }
};
</script>
<style>
.newsinfo-container {
  padding: 0 4px;
}
.newsinfo-container h3 {
  font-size: 18px;
}

.subtitle span {
  color: skyblue;
}
.title {
  font-size: 14px;
  text-align: center;
}
</style>