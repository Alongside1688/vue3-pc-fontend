<script setup>
import { reactive, ref, toRefs } from "vue";
import NavBar from "../../components/NavBar.vue";
import TopSearch from "../../components/TopSearch.vue";
import RouteItem from "../../components/RouteItem.vue";
import ChannelItem from "../../components/ChannelItem.vue";
import TripItem from "../../components/TripItem.vue";
import ServiceViewVue from "../../components/ServiceView.vue";
import ServiceView from "../../components/ServiceView.vue";
import SliderTapbar from "./SliderTapbar.vue";
import { getCategory } from "../../api/category";
import { getRoutes } from "../../api/route";
import { getTrips } from "../../api/trip";
import SliderTapbarVue from "./SliderTapbar.vue";
const state = reactive({
  routes: [],
  channels: [],
  trips: [],
});
(async function () {
  const { data: resRoutes } = await getRoutes();
  const { data: resCategory } = await getCategory();
  const { data: resTrips } = await getTrips();
  state.routes = resRoutes.data;
  state.channels = resCategory.data.home.channels;
  state.trips.push(resTrips.data[0].article);
})();

let { channels, routes, trips } = toRefs(state);
</script>

<template>
  <NavBar />
  <TopSearch />
  <div class="main">
    <div class="left">
      <SliderTapbar />
    </div>
    <div class="middle">
      <div class="channels-wrap">
        <template v-for="item in channels" :key="item">
          <ChannelItem :icon="item.icon" :title="item.title" />
        </template>
      </div>
      <div>
        <template
          v-for="{
            _id,
            type,
            fromValue,
            toValue,
            date,
            labels,
            avatarUrl,
            nickName,
          } in routes"
          :key="_id"
        >
          <RouteItem
            :type="type"
            :start="fromValue"
            :destination="toValue"
            :date="date"
            :labels="labels"
            :userPic="avatarUrl"
            :userName="nickName"
          />
        </template>
      </div>
    </div>
    <div class="right">
      <div class="Login-wrp">
        <h3 class="Login-headline">你我相伴<br />&nbsp;&nbsp;随处可行</h3>
        <button class="Login-btn">立即登录</button>
        <p class="Sign-up">没有随行账号？<span>立即注册！</span></p>
      </div>
      <div class="news">
        <template v-for="item in trips" :key="item">
          <trip-item
            :title="item.articleTitle"
            :cover="item.images[0].dynamicUrl"
            :author="item.author"
          ></trip-item>
        </template>
      </div>
      <div class="service">
        <ServiceView />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../style.scss";
.tab {
  padding: 20px 0;

  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 0;

    li {
      font: 30px bold;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      width: 8rem;
      height: 8rem;
      border-radius: 5px;

      .iconfont {
        font-size: 50px;
      }

      .title {
        font-size: 30px;
      }
    }
  }
}

.top-search {
  margin-top: 56px;
}

.main {
  width: 70%;
  display: flex;
  margin: 20px auto 20px;
  position: relative;
  .left {
    flex: 2;
    background-color: white;
  }

  .middle {
    flex: 7;
    margin: 0 20px;
    .channels-wrap {
      display: flex;
      justify-content: space-between;
    }
  }

  .right {
    flex: 3;
    overflow: hidden;
    .Login-wrp {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      background-color: white;
      margin-bottom: 10px;
      background-image: radial-gradient(
        farthest-side at 70% -20%,
        $themeColor,
        white
      );

      .Login-headline {
        font-size: 20px;
        font-weight: bold;
        line-height: 30px;
      }

      .Login-btn {
        color: white;
        width: 70%;
        line-height: 30px;
        border-radius: 28px;
        background-color: $themeColor;
        border: none;
        margin-top: 20px;
      }

      .Sign-up {
        color: gray;
        font-size: 14px;
        margin-top: 10px;

        span {
          color: red;
        }
      }
    }

    .news {
      margin-top: 20px;
    }
  }
  @media screen and (max-width: 1200px) {
    .right {
      display: none;
    }
  }
  @media screen and (max-width: 800px) {
    .left {
      display: none;
    }
  }
}

@media screen and (max-width: 500px) {
  .main {
    width: 100%;
  }
}
</style>