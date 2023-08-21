<template>
  <div class="slider-tabbar">
    <template
      v-for="({ title, icon, selectedIcon }, index) in tabbarList"
      :key="title"
    >
      <div class="tabbar-item">
        <img :src="activeIndex === index ? selectedIcon : icon" alt="" />
        <span :class="[activeIndex === index ? 'theme-color' : '', 'title']">{{
          title
        }}</span>
      </div>
    </template>
    <img :src="imgUrl" alt="" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import home_icon from "../../assets/images/icons/home.png";
import home_selecteIcon from "../../assets/images/icons/active_home.png";
import find_icon from "./../../assets/images/icons/find.png";
import find_selectedIcon from "./../../assets/images/icons/active_find.png";
import map_icon from "./../../assets/images/icons/map.png";
import map_selectedIcon from "./../../assets/images/icons/active_map.png";
import message_icon from "./../../assets/images/icons/message.png";
import message_selectedIcon from "./../../assets/images/icons/active_message.png";
import my_icon from "./../../assets/images/icons/my.png";
import my_selectedIcon from "./../../assets/images/icons/active_my.png";
const activeIndex = ref(0);
const tabbarList = [
  {
    title: "首页",
    icon: home_icon,
    selectedIcon: home_selecteIcon,
  },
  {
    title: "发现",
    icon: find_icon,
    selectedIcon: find_selectedIcon,
  },
  {
    title: "地图",
    icon: map_icon,
    selectedIcon: map_selectedIcon,
  },
  {
    title: "消息",
    icon: message_icon,
    selectedIcon: message_selectedIcon,
  },
  {
    title: "我的",
    icon: my_icon,
    selectedIcon: my_selectedIcon,
  },
];
</script>

<style lang="scss" scoped>
.slider-tabbar {
  position: sticky;
  top: 56px;

  .tabbar-item {
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    img {
      width: 25px;
    }
    .title {
      font-size: 16px;
      font-weight: bold;
      margin-left: 5px;
    }
  }
}
</style>