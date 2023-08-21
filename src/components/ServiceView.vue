  <template>
  <div class="sx-side-copy">
    <div class="sx-side-copy-inner">
      <div class="scale">
        <div class="CopyRight_item_B5tHx">
          <div class="woo-box-flex woo-box-alignCenter CopyRight_title_SBQ4K">
            <i class="iconfont icon-kefu"></i>
            <div>帮助中心</div>
          </div>
          <div
            class="woo-box-flex woo-box-justifyBetween CopyRight_content_3NVLX"
          >
            <a target="_blank" class=""> 随行客服 2000-960-960 </a>
            <a target="_blank" class="CopyRight_contentItem_2cb23">
              自助服务中心
            </a>
          </div>
        </div>
        <div class="CopyRight_item_B5tHx">
          <div class="woo-box-flex woo-box-alignCenter CopyRight_title_SBQ4K">
            <i class="iconfont icon-manyi"></i>
            <div>合作&amp;服务</div>
          </div>
          <div
            class="woo-box-flex woo-box-justifyBetween CopyRight_content_3NVLX"
          >
            <a target="_blank" class=""> 微博营销 </a>
            <span class="CopyRight_contentItem_2cb23"
              >合作热线 4000-980-980</span
            >
            <div class="link woo-pop-wrap">
              <span class="woo-pop-ctrl"
                ><span class="CopyRight_contentItem_2cb23"> 更多 </span></span
              >
              <!---->
            </div>
          </div>
        </div>
        <div class="CopyRight_item_B5tHx">
          <div class="woo-box-flex woo-box-alignCenter CopyRight_title_SBQ4K">
            <i class="iconfont icon-guanbi"></i>
            <div>举报中心</div>
          </div>
          <div
            class="woo-box-flex woo-box-justifyBetween CopyRight_content_3NVLX"
          >
            <span class="">违规投诉 010-60618076</span>
            <a target="_blank" class="CopyRight_contentItem_2cb23">
              舞弊举报
            </a>
            <div class="link woo-pop-wrap">
              <span class="woo-pop-ctrl"
                ><span class="CopyRight_contentItem_2cb23"> 更多 </span></span
              >
              <!---->
            </div>
          </div>
        </div>
        <div class="CopyRight_item_B5tHx">
          <div class="woo-box-flex woo-box-alignCenter CopyRight_title_SBQ4K">
            <i class="iconfont icon-message"></i>
            <div>关于随行</div>
          </div>
          <div
            class="woo-box-flex woo-box-justifyBetween CopyRight_content_3NVLX"
          >
            <a href="" target="_blank" class=""> About Alongisde </a>
            <div class="link woo-pop-wrap">
              <span class="woo-pop-ctrl"
                ><span class="CopyRight_contentItem_2cb23">
                  客户端下载
                </span></span
              >
              <!---->
            </div>
            <div class="link woo-pop-wrap">
              <span class="woo-pop-ctrl"
                ><span class="CopyRight_contentItem_2cb23">
                  网站备案信息
                </span></span
              >
              <!---->
            </div>
          </div>
        </div>
        <div
          class="CopyRight_item_B5tHx CopyRight_content_3NVLX CopyRight_cricon_3Apzk"
        >
          <div
            class="logo Logo_wrap_1GQA1"
            tabindex="0"
            data-focus-visible="true"
          >
            <img src="../assets/images/alongside/alongside-logo.png" alt="" />
          </div>
          <span style="fontsize: 12px"> Copyright © 2009-2022 </span
          ><img
            src="https://a.sinaimg.cn/mintra/pic/2201190827/32aria.png"
            class="CopyRight_aria_1Dnvr"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.sx-side-copy {
  margin-top: 20px;
  color: gray;
  font-size: 10px;

  a {
    color: gray;
    text-decoration: none;
  }

  .sx-side-copy-inner {
    font-size: 12px;

    .scale {
      .CopyRight_item_B5tHx {
        margin-bottom: 20px;

        .woo-box-flex.woo-box-alignCenter {
          display: flex;
          display: flex;
          align-items: center;
          margin-bottom: 10px;

          i {
            color: gray;
            margin-right: 10px;
          }

          div {
            color: black;
          }
        }
      }

      .woo-box-flex.woo-box-justifyBetween.CopyRight_content_3NVLX {
        display: flex;
        justify-content: space-between;

        a {
          display: inline-block;
        }
      }
    }

    .CopyRight_item_B5tHx.CopyRight_content_3NVLX.CopyRight_cricon_3Apzk {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .logo.Logo_wrap_1GQA1 {
        img {
          width: 20px;
        }
      }

      img.CopyRight_aria_1Dnvr {
        width: 60px;
        border: 1px solid gray;
      }
    }
  }
}
</style>