<template>
    <div class="app">
        <section class="side">
            <img class="logo" src="/img/logo.png">
            <div class="item">
                <img class="item__img" src="/img/home.png" alt="">
                <p class="item__txt">
                    <NuxtLink id="index" to="/">
                        ホーム
                    </NuxtLink>
                </p>
            </div>
            <div class="item">
                <img class="item__img" src="/img/logout.png" alt="">
                <p class="item__txt">
                    ログアウト
                </p>
            </div>
            <div class="text__box">
                <p class="text__ttl">
                    シェア
                </p>
                <textarea class="text__input" name="message" v-model="message"></textarea>
                <button class="text__btn" @click="store">
                    シェアする
                </button>
            </div>
        </section>
        <Nuxt />
    </div>
</template>
<script>
import { ref } from 'vue';

export default {
    data() {
        return {
            message: ref(),
        }
    },
    methods: {
        async store() {
            const data = {
                message: this.message,
            }
            await this.$axios.post("/message", data);
            await this.$store.dispatch('getMessages');
            this.message = null;
        },
    },
}
</script>
<style>
body {
    background-color: #14202B;
}

.app {
    display: flex;
}

#index{
    text-decoration: none;
    color: #fff;
}

.side {
    margin-left: 10px;
    width: 250px;
}

.logo {
    width: 100px;
}

.item {
    display: flex;
    margin-bottom: 10px;
}

.item__img {
    width: 20px;
    height: 20px;
}

.item__txt {
    margin: 0;
    color: #fff;
    font-size: 14px;
    margin-left: 10px;
    line-height: 25px;
}

.text__ttl {
    color: #fff;
}

.text__box {
    width: 100%;
    max-width: 250px;
}

.text__input {
    width: 100%;
    height: 100px;
    background-color: transparent;
    border: 1px solid #fff;
    border-radius: 6px;
    resize: none;
    color: #fff;
    padding: 5px 10px;
}

.text__btn {
    display: block;
    margin-left: auto;
    color: #fff;
    background-color: #5419DA;
    height: 35px;
    width: 90px;
    border-radius: 999px;
    font-size: 12px;
}

.message__box {
    color: #fff;
}

.message {
    width: 100%;
    max-width: 1000px;
    margin-left: 50px;
}

.message__header {
    text-align: left;
    height: 40px;
    padding-left: 20px;
}

.message__data {
    padding: 10px 20px;
}

.message__box {
    width: 100%;
}

.message__item--box {
    display: flex;
}

.message__item--img {
    width: 20px;
    height: 20px;
    cursor: pointer;
}

.message__data,
.message__header {
    border: 1px solid #fff;
}
</style>