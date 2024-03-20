import { createStore } from 'vuex';
import auth from './modules/auth';
import request from './modules/request';

export default createStore({
  modules: {
    auth,
    request,
  },
});
