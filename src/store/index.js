import Vue from "vue";
import Vuex from "vuex";
// plugin a agregar
import  createPersistedState  from  'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favGifs:[]
  },
  mutations: {
    toggleFav(state, gif){
      let index = state.favGifs.findIndex(favGif => favGif.id === gif.id);
      if (index>= 0){
        state.favGifs.splice(index, 1)
        return
      }
      state.favGifs.push(gif)
    }
  },
  actions: {},
  modules: {},
  // aquí agregamos el plugin
	plugins: [createPersistedState()]
});
