<script setup>
import { ref } from 'vue'
import SearchInput from './SearchInput.vue';

</script>

<template>
    <div class="top-search">
        <div class="search-section">
            <div class="logo-wrap">
                <img class="logo-img" src="../assets/images/alongside/alongside.png" alt="">
                <div class="name-wrap">
                    <h1 class="app-name">随行</h1>
                    <sapn class="app-en-name">Alongside</sapn>
                </div>
            </div>
            <SearchInput disabled="true" msg="你好，世界！" />
        </div>
        <video loop="loop" autoplay="autoplay" preload="" muted="muted"
            poster="https://a.sinaimg.cn/mintra/pic/2112130400/18weibo_login.png" class="earth-video">
            <source src="https://a.sinaimg.cn/mintra/pic/2112130543/weibo_login.mp4">
            抱歉，您的浏览器不支持内嵌视频
        </video>
    </div>
</template>

<style lang='scss' scoped>
.top-search {
    display: flex;
    width: 100%;
    height: 330px;
    position: relative;

    .earth-video {
        height: 330px;
        position: absolute;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        bottom: 0;
        z-index: 0;
    }

    .search-section {
        width: 100%;
        margin: auto;
        z-index: 99;
        display: flex;
        flex-direction: column;
        align-items: center;

        .logo-wrap {
            color: white;
            display: flex;
            align-items: center;
            padding-bottom: 40px;

            .logo-img {
                width: 80px;
            }

            .name-wrap {
                margin-left: 10px;
            }

            .app-name {
                font-size: 38px;
                font-weight: bold;
                letter-spacing: 2px;
            }

            .app-en-name {
                font-size: 16px;
                padding-top: 10px;
            }
        }

        @media screen and (min-width: 1200px) {
            .search-input {
                width: 45%;
            }
        }

        @media screen and (min-width: 800px) and (max-width:1200px) {
            .search-input {
                width: 60%;
            }
        }


        @media screen and (max-width: 800px) {
            .search-input {
                width: 90%;
            }
        }

    }
}
</style>