<template>
  <view>
    {{ $store.state.title }}
  </view>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {};
  },
  onLoad() {},
  methods: {},
});
</script>

<style lang="scss" scoped>
view {
  text-align: center;
  font-size: 52rpx;
}
</style>
