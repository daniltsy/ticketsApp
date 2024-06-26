import axios from 'axios';
const TOKEN_KEY = 'jwt-token';

export default {
  namespaced: true,
  state() {
    return {
      token: localStorage.getItem(TOKEN_KEY),
    };
  },
  getters: {
    token(state) {
      return state.token;
    },
    isAuth(_, getters) {
      return !!getters.token;
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem(TOKEN_KEY, token);
    },
    logout(state) {
      (state.token = null), localStorage.removeItem(TOKEN_KEY);
    },
  },
  actions: {
    async login({ commit }, payload) {
      try {
        const { data } = await axios.post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FB_KEY}`,
          { ...payload, returnSecureToken: true }
        );
        commit('setToken', data.idToken);
      } catch (e) {
        console.log(e.response.data.error.message);
        throw new Error();
      }
    },
  },
};
