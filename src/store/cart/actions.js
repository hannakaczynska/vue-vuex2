export default {
  add(context, payload) {
    context.commit('addProductToCart', payload);
  },
  remove(context, payload) {
    context.commit('removeProductFromCart', payload);
  },
};
