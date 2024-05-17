export const state = () => ({
    messageList: [],
});

export const mutations = {
    setMessageList(state, messages) {
        state.messageList = messages;
    },
};

export const actions = {
  async getMessages({ commit }) {
    const res = await this.$axios.get("/message");
    commit("setMessageList", res.data.messages);
  },
  async destroy(context, messageId) {
    await this.$axios.delete(`/message/${messageId}`);
    await context.dispatch(`getMessages`);
  },
};
