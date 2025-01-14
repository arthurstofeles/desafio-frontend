import Vue from 'vue'
import VueRouter from 'vue-router'
import Default from "../layouts/Default.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Default,
    children: [
      {
        path: "",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/Home.vue"),
      },
      {
        path: "/results",
        name: "SearchResult",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/SearchResult.vue"),
      },
      {
        path: "/watch",
        name: "Player",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/Player.vue"),
      },
      {
        path: "/history",
        name: "History",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/History.vue"),
      },
      {
        path: "*",
        name: "NotFound",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/NotFound.vue"),
    }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
