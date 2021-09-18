<template>
  <view class="container">
    <swiper
      :indicator-dots="indicatorDots"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
    >
      <swiper-item v-for="item of listData[0].imgUrls" :key="item.id">
        {{item}}
        <image class="slide-image" :src="item.src"></image>
      </swiper-item>
    </swiper>
  </view>
</template>

<script lang="ts">
import Vue from "vue";
import fetch from "@/utils/fetch";

export default Vue.extend({
  data() {
    return {
      // 显示面板指示点
      indicatorDots: true,
      // 图片自动切换
      autoplay: true,
      // 自动切换时间间隔
      interval: 5000,
      // 滑动动画时长
      duration: 1000,
      listData: [
        {
          image_ad: "",
          image_bottom: [{ id: "", src: "" }],
          imgUrls: [{ id: "", src: "" }],
        },
      ],
    };
  },
  onLoad(options) {
    // 显示模态对话框
    uni.showLoading({
      title: "努力加载中",
    });
    // 请求数据
    fetch("food/index")
      .then((res) => {
        wx.hideLoading();
        this.listData = res.data;
      })
      .catch(() => {
        // 请求失败，关闭对话框，执行fetch.js文件中的fail方法
        wx.hideLoading();
      });
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
/* pages/home/home.wxss */
/* 轮播图样式 */
.slide-image {
  width: 100%;
  height: 280rpx;
}
/* 开启点餐之旅 */
.menu_bar {
  display: flex;
  margin-top: 20px;
}
.menu-block {
  width: 50%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
}
.menu-start {
  text-align: center;
  font-size: 14px;
  color: #fff;
  padding: 5px 20px;
  background: #ff9c35;
  border-radius: 20px;
  width: 100px;
}
/* 中间部分广告 */
.ad-box {
  margin-top: 30px;
  width: 100%;
  text-align: center;
}
.image-ad {
  width: 95%;
  height: 370rpx;
}
/* 底部图片展示 */
.bottom-box {
  margin-top: 40rpx;
  display: flex;
  width: 100%;
  padding: 0 20rpx;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  box-sizing: border-box;
}
.bottom-pic {
  width: 49%;
  display: inline-block;
}
.btm-image {
  width: 100%;
  height: 170rpx;
}
</style>
