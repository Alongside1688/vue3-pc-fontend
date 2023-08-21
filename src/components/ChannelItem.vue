<script setup>
import { ref, defineProps } from "vue";
const props = defineProps({
  icon: String,
  title: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="channel-item">
    <span :class="['iconfont', icon]"></span>
    <p class="title">{{ title }}</p>
  </div>
</template>

<style lang='scss' scoped>
    .channel-item {
        text-align: center;
        font-weight: bold;
        font-size: 16px;
        .iconfont{
            font-size: 30px;
        }
    }
</style>