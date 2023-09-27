import { createStore } from 'vuex';

import rootGetters from './getters.js';
import rootActions from './actions.js';
import rootMutations from './mutations.js';

import productsModule from './products/index.js';
import cartModule from './cart/index.js'

const store = createStore({
  modules: {
    products: productsModule,
    cart: cartModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  getters: rootGetters,
  actions: rootActions,
  mutations: rootMutations,
});

export default store;
