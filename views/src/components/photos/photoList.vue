<template>
  <div>
    <div id="slider" class="mui-slider">
      <div
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            class="mui-control-item mui-active"
            href="#item1mobile"
            data-wid="tab-top-subpage-1.html"
          >推荐</a>
          <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">热点</a>
          <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">北京</a>
          <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">社会</a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">娱乐</a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">咨询</a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">新闻</a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">游戏</a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">新鲜事</a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">头条</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mui from "../../assets/lib/mui/js/mui.js";
export default {
  mounted() {
    setTimeout(() => {
      mui(".mui-scroll-wrapper").scroll({
        deceleration: 0.0005
      });
    }, 1000);
  }
};
</script>

<style scoped>
* {
  touch-action: pan-y;
}
</style>
