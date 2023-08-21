<script setup>
import { ref } from 'vue'
defineProps({
    disabled: {
        type: Boolean,
        default: false
    },
    msg:{
        type:String,
        default:'hi, 你好！'
    }
})
</script>

<template>
    <div class="search-input">
        <input type="text" :disabled="disabled" :placeholder="msg">
        <button>
            <span class="iconfont icon-fasong_f"></span>
        </button>
    </div>
</template>

<style lang='scss' scoped>
.search-input {
    height: 45px;
    margin: auto;
    display: flex;
    align-items: center;
    padding: 0 20px;
    border-radius: 28px;
    overflow: hidden;
    background-color: white;

    .icon-fasong_f {
        color: #03a772;
    }

    input {
        width: 0;
        flex: 1;
    }

    input:disabled {
        background-color: white;
    }

    button {
        color: white;
        white-space: nowrap;
        border: none;
        background:none;
    }
}
</style>