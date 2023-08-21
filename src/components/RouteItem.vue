<script setup>
import { ref, defineProps, computed } from "vue";
const props = defineProps([
  "type",
  "start",
  "destination",
  "date",
  "labels",
  "userPic",
  "userName",
  "labels",
]);
const formatDate = computed(() => {
  return props.date.split(" ")[0];
});
</script>

<template>
  <div class="article">
    <div class="head">
      <span
        style="font-size: 30px"
        :class="[
          type ? 'icon-toyCar-fill' : 'icon-tabhangren',
          'iconfont',
          'theme-color',
        ]"
      ></span>
      <div class="route">
        <span>{{ start[3] ? start[3] : start[2] }}</span>
        <div>
          <span class="date">{{ formatDate }}</span>
          <span class="iconfont icon-luxian"></span>
        </div>
        <span>{{ destination[3]?destination[3]:destination[2] }}</span>
      </div>
      <button>{{ type ? "车找人" : "人找车" }}</button>
    </div>
    <div class="labels py-4">
      <template v-for="item in labels" :key="item">
        <div style="margin-right: 10px">
          <span class="badge bg-secondary px-2 py-1">{{ item }}</span>
        </div>
      </template>
    </div>
    <div class="user">
      <div class="left">
        <img :src="userPic" alt="" />
        <div class="name">{{ userName }}</div>
      </div>
      <div class="right">
        <span class="iconfont icon-ic_share"></span>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
@import "./../style.scss";
.article {
  height: fit-content;
  background-color: white;
  padding: 20px;
  margin-bottom: 20px;

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .route {
      display: flex;
      align-items: center;
      & > span {
        font-weight: bold;
        font-size: 20px;
      }
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 15px;
        .icon-luxian {
          line-height: 5px;
          font-size: 50px;
        }
      }
    }
    button {
      color: white;
      border: none;
      border-radius: 3px;
      background-color: $themeColor;
    }
  }

  .labels {
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
  }

  .user {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left {
      display: flex;
      align-items: center;
      font-size: 20px;
      font-weight: bold;
    }

    img {
      width: 40px;
      height: 40px;
      border-radius: 50px;
      margin-right: 10px;
    }

    .right {
      display: flex;
      align-items: center;
    }
  }
}
</style>