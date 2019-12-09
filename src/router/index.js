import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../components/About.vue";
import Enter from "../views/Enter.vue";
import Favoritos from "../components/Favoritos.vue";
import CatsGifs from "../components/CatsGifs.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/cats",
    name: "home",
    component: Home,
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: "about",
        component: About
      },
      {
        // UserPosts will be rendered inside User's <router-view>
        // when /user/:id/posts is matched
        path: "favoritos",
        component: Favoritos
      },
      {
        // UserPosts will be rendered inside User's <router-view>
        // when /user/:id/posts is matched
        path: "cats",
        component: CatsGifs
      },
      {
        path: "entrar",
        // name: "entrar",
        component: Enter
      }
    ]
  },
  // {
  //   path: "/entrar",
  //   name: "entrar",
  //   component: Enter
  // }
];

const router = new VueRouter({
  routes
});

export default router;
