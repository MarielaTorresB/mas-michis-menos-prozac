import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCQ1JaixEnXr2T9xqs-l42iM1eCN2sxfHI",
  authDomain: "michis-df301.firebaseapp.com",
  databaseURL: "https://michis-df301.firebaseio.com",
  projectId: "michis-df301",
  storageBucket: "michis-df301.appspot.com",
  messagingSenderId: "255751988604",
  appId: "1:255751988604:web:24d7df8f02b0e71553b0f9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.use(Buefy)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
