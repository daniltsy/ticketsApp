import axios from '@/axios/request';
import store from '@/store/index';
export default {
  namespaced: true,
  state() {
    return {
      requests: [],
    };
  },
  mutations: {
    setRequests(state, requests) {
      state.requests = requests;
    },
    addRequest(state, requests) {
      state.requests.push(requests);
    },
  },
  actions: {
    async create({ commit, dispatch }, payload) {
      try {
        const token = store.getters.token;
        const { data } = await axios.post(
          `/requests.json?auth=${token}`,
          payload
        );
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
