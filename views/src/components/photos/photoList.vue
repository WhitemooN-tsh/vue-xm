<template>
  <div>
    <div id="slider" class="mui-slider">
      <div
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']"
            v-for="item in cates"
            :key="item.id"
            @tap="getPhotoListByCateId(item.id)"
          >{{ item.title }}</a>
        </div>
      </div>
    </div>
    <ul class="photo-list">
      <router-link v-for="item in list" :key="item.id" :to="'/home/photoInfo/' + item.id" tag="li">
        <img v-lazy="item.img_url" />
        <div class="info">
          <h1 class="info-title">{{ item.title }}</h1>
          <div class="info-body">{{ item.zhaiyao }}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import mui from "../../assets/lib/mui/js/mui.js";
export default {
  data() {
    return {
      cates: [],
      list: []
    };
  },
  created() {
    this.getAllCategory();
    this.getPhotoListByCateId(0);
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005
    });
  },
  methods: {
    getAllCategory() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getimgcategory")
        .then(result => {
          if (result.body.status === 0) {
            result.body.message.unshift({ title: "全部", id: 0 });
            this.cates = result.body.message;
          }
        });
    },
    getPhotoListByCateId(cateId) {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getimages/" + cateId)
        .then(result => {
          console.log(result);

          if (result.body.status === 0) {
            this.list = result.body.message;
          }
        });
    }
  }
};
</script>

<style scoped>
* {
  touch-action: pan-y;
}

.photo-list {
  list-style: none;
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
}
.photo-list  li {
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
    position: relative;
}
.photo-list img {
      width: 100%;
      vertical-align: middle;
}
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }

    .info {
      color: white;
      text-align: left;
      position: absolute;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);
      max-height: 84px;
    }
    .info  .info-title {
        font-size: 14px;
      }
    .info  .info-body {
        font-size: 13px;
      }
    
  

</style>
