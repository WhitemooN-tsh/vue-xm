<template>
  <div class="goods-list">
    <div class="goods-item" v-for="item in goodslist" :key="item.id" @click="goDetail(item.id)">
      <img :src="item.img_url" alt />
      <h1 class="title">{{ item.title }}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{ item.sell_price }}</span>
          <span class="old">￥{{ item.market_price }}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{ item.stock_quantity }}件</span>
        </p>
      </div>
    </div>
    <mt-button class="btn" type="danger" size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageindex: 1,
      goodslist: []
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getgoods?pageindex=1")
        .then(res => {
          if (res.body.status === 0) {
            this.goodsList = res.body.message[0];
            console.log(res);
          }
          this.goodslist = res.body.message;
        });
        
    },
    getMore() {
      this.pageindex++;
      this.getGoodsList();
    },
    goDetail(id) {
      console.log(this);
      this.$router.push({ name: "goodsInfo", params: { id } });
    }
  }
};
</script>

<style scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;
}
.goods-list .goods-item {
  width: 49%;
  border: 1px solid #ccc;
  box-shadow: 0 0 8px #ccc;
  margin: 4px 0;
  padding: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 293px;
}
.goods-list img {
  width: 100%;
}

.goods-list .title {
  font-size: 14px;
}

.goods-list .info {
  background-color: #eee;
}
.goods-list p {
  margin: 0;
  padding: 5px;
}
.price .now {
  color: red;
  font-weight: bold;
  font-size: 16px;
}
.price .old {
  text-decoration: line-through;
  font-size: 12px;
  margin-left: 10px;
}

.price .sell {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
}
.btn {
  margin-bottom: 50px;
}
</style>
