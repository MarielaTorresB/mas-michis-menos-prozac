import Vue from "vue";
import Vuex from "vuex";
// plugin a agregar
import  createPersistedState  from  'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favGifs:[]
  },
  mutations: {},
  actions: {},
  modules: {},
  // aquí agregamos el plugin
	plugins: [createPersistedState()]
});
