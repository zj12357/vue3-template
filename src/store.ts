import { createStore, createLogger } from "vuex";

const debug = process.env.NODE_ENV !== "production";
const plugins = debug ? [createLogger({})] : [];
export default createStore({
  plugins,
  state: {
    listData: { age: 10 },
    num: 10,
  },
  mutations: {
    setData(state, value) {
      state.listData = { ...value };
    },
    addNum(state) {
      state.num = state.num + 10;
    },
  },
  actions: {
    setData({ commit }, value) {
      commit("setData", value);
    },
  },
  modules: {},
});
