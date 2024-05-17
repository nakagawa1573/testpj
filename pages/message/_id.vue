<template>
    <section class="message">
        <table class="message__box">
            <tr class="message__header--row">
                <th class="message__header">
                    コメント
                </th>
            </tr>
            <tr class="message__item">
                <td class="message__data">
                    <div class="message__item--box">
                        <span class="message__item--name">
                            ユーザーネーム
                        </span>
                        <div>
                            <img class="message__item--img" src="/img/heart.png" alt="">
                        </div>
                        <div>
                            <img class="message__item--img" src="/img/cross.png" alt="">
                        </div>
                    </div>
                    {{ message }}
                </td>
            </tr>
            <tr class="comment__header--row">
                <th class="comment__header">
                    コメント
                </th>
            </tr>
            <tr v-for="comment in commentList" :key="comment.id">
                <td class="comment__data">
                    <p class="comment__item--name">
                        ユーザーネーム
                    </p>
                    {{ comment.comment }}
                </td>
            </tr>
        </table>
        <div class="comment__form--wrapper">
            <input class="comment__form" type="text" v-model="comment">
            <button class="comment__btn" @click="storeComment">
                コメント
            </button>
        </div>
    </section>
</template>

<script>
import { ref } from 'vue';
export default {
    data() {
        return {
            commentList: ref([]),
            comment: ref(),
            message: ref(),
        }
    },
    methods: {
        async show() {
            if (this.$route.params.id) {
                const res = await this.$axios.get(`/message/${this.$route.params.id}`);
                this.commentList = res.data.comments;
                this.message = res.data.message.message;
            } else {
                console.log("idがありません")
            }
        },
        async storeComment() {
            const data = {
                comment: this.comment,
            }
            const res = await this.$axios.post(`/message/${this.$route.params.id}/comment`, data);
            this.comment = null;
            this.show();
        }
    },
    created() {
        this.show();
    }

}
</script>

<style scoped>
.comment__header {
    font-weight: normal;
}

.comment__header,
.comment__data {
    font-size: 14px;
    border: 1px solid #fff;
}

.comment__data {
    padding: 10px 20px;
}

.comment__item--name {
    margin: 0;
}

.comment__form {
    height: 30px;
    width: 95%;
    max-width: 1000px;
    background-color: transparent;
    border: 1px solid #fff;
    border-radius: 12px;
    color: #fff;
    padding: 0 10px;
    display: block;
    margin: 0 auto;
}

.comment__btn {
    display: block;
    margin-left: auto;
    margin-top: 10px;
    color: #fff;
    background-color: #5419DA;
    height: 35px;
    width: 90px;
    border-radius: 999px;
    font-size: 12px;
}
</style>
