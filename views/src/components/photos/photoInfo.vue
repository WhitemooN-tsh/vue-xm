<template>
  <div>
    <h3>{{photoinfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{photoinfo.add_time | dateFormat}}</span>
      <span>点击：{{ photoinfo.click }}次</span>
    </p>
    <hr />
    <div class="photoShow">
      <vue-preview :slides="list"></vue-preview>
    </div>

    <div class="content" v-html="photoinfo.content"></div>

    <cmt-box :id="id"></cmt-box>
  </div>
</template>

<script>
import comment from "../subcomponents/comment.vue";

export default {
  data() {
    return {
      id: this.$route.params.id,
      photoinfo: {},
      list: []
    };
  },
  created() {
    this.getPhotoInfo();
    this.getThumbs();
  },
  methods: {
    getPhotoInfo() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getimageInfo/" + this.id)
        .then(res => {
          if (res.body.status === 0) {
            this.photoinfo = res.body.message[0];
            console.log(res);
          }
        });
    },

    getThumbs() {
      // 获取缩略图
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          // 循环每个图片数据，补全图片的宽和高
          result.body.message.forEach(item => {
            item.w = 600;
            item.h = 400;
          });
          // 把完整的数据保存到 list 中
          this.list = result.body.message;
        }
      });
    },
    getPhotoMInfo() {
      this.axios(
        "http://www.liulongbin.top:3005/api/getthumimages/" + this.id
      ).then(res => {
        console.log(res.data.message);
        this.list = res.data.message;
        this.list.forEach(el => {
          el.w = 600;
          el.h = 400;
          el.msrc = el.src;
        });
      });
    },

    getThumbs() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getthumimages/" + this.id)
        .then(result => {
          if (result.body.status === 0) {
            result.body.message.forEach(item => {
              item.w = 600;
              item.h = 400;
              item.msrc = item.src;
            });
            this.list = result.body.message;
          }
        });
    }
  },
  components: {
    "cmt-box": comment
  }
};
</script>

<style scoped>
.photoShow {
    padding: 5px;
}
.photoinfo-container {
  padding: 3px;
}
.photoinfo-container h3 {
  color: #26a2ff;
  font-size: 15px;
  text-align: center;
  margin: 15px 0;
}
.subtitle {
  display: flex;
  justify-content: space-between;
  
  font-size: 13px;
}

.content {
  font-size: 13px;
  line-height: 30px;
}

.thumbs img {
  margin: 10px;
  box-shadow: 0 0 8px #999;
}
/deep/.my-gallery figure {
  display: inline-block;
  width: 30%;
  margin: 3px 5px;
  padding: 0;


  
}
/deep/.my-gallery img {
  width: 100%;
  box-shadow: 0 0 8px #999;
}
</style>
