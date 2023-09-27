export default {
  logIn(context) {
    context.commit('setAuth', true);
  },
  logOut(context) {
    context.commit('setAuth', false);
  },
};
