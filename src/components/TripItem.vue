<script setup>
import { ref, defineProps, onMounted } from "vue";
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  cover: {
    type: String,
    default: "",
  },
  author: {
    type: Object,
    default: () => {
      return {};
    },
  },
});
</script>

<template>
  <div class="accommodation-wrp">
    <div class="recommend-item">
      <div class="hotel-img">
        <div class="hotel-ad"><span>广告</span></div>
        <img :src="cover" alt="" />
      </div>
      <div class="hotel-info">
        <h3 class="hotel-name" title="">
          <span>{{ title }}</span>
        </h3>
        <div class="hotel-level">
          <img
            src="http://webresource.c-ctrip.com/ResH5HotelOnline/R1/hotel_detail_icon_diamond4_20180824.png"
            alt="hotel-level"
          />
        </div>
        <div class="hotel-review">
          <span class="score">4.8<em class="total">/5</em></span>
          <span class="rating">棒</span>
          <div class="price-box">
            <span class="comment">1628点评</span>
            <span class="price-now"><dfn>¥</dfn>504</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
@import "../style.scss";
.accommodation-wrp {
  background-color: white;
  .recommend-item {
    .hotel-img {
      position: relative;
      .hotel-ad {
        position: absolute;
        top: 10px;
        right: 10px;

        span {
          color: gray;
        }
      }

      img {
        width: 100%;
      }
    }

    .hotel-info {
      padding: 10px;
        span {
          font-weight: bold;
        }

      .hotel-level {
        img {
          width: 40px;
        }
      }

      .hotel-review {
        margin-top: 10px;

        span.score {
          padding: 2px 5px;
          color: white;
          margin-right: 5px;
          background-color: $themeColor;

          em.total {
            color: white;
          }
        }

        span.rating {
          color: $themeColor;
        }
      }

      .price-box {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;

        span.price-now {
          color: $themeColor;
          font-size: 20px;
          font-weight: bold;

          dfn {
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>