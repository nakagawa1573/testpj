<template>
  <section class="message">
    <table class="message__box">
      <tr class="message__header--row">
        <th class="message__header">
          ホーム
        </th>
      </tr>
      <tr class="message__item" v-for="message in messageList" :key="message.id">
        <td class="message__data">
          <div class="message__item--box">
            <span class="message__item--name">
              ユーザーネーム
            </span>
            <div>
              <img class="message__item--img" src="/img/heart.png">
            </div>
            <div>
              <img class="message__item--img" src="/img/cross.png" :data-id="message.id" @click="destroy">
            </div>
            <div>
              <NuxtLink :to="`/message/${message.id}`">
                <img class="message__item--img" src="/img/detail.png">
              </NuxtLink>
            </div>
          </div>
          {{ message.message }}
        </td>
      </tr>
    </table>
  </section>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  data() {
    return {
      messageList: ref([]),
    }
  },
  methods: {
    async destroy(e) {
      const messageId = e.target.dataset.id;
      await this.$store.dispatch('destroy', messageId);
    }
  },
  async created() {
    await this.$store.dispatch('getMessages');
  },
  watch: {
    '$store.state.messageList'(newValue, oldValue) {
      this.messageList = newValue;
    }
  }
}
</script>