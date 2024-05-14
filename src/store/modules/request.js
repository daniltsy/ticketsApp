import axios from '@/axios/request';
import store from '@/store/index';
export default {
  namespaced: true,
  state() {
    return {
      requests: [],
    };
  },
  getters: {
    requests(state) {
      return state.requests;
    },
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
        const token = store.getters['auth/token'];
        const { data } = await axios.post(
          `/requests.json?auth=${token}`,
          payload
        );
        commit('addRequest', { ...payload, id: data.name });
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
