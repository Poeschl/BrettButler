import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from "./views/HomeView.vue";
import GamesView from "./views/GamesView.vue";
import EventsView from "./views/EventsView.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/events',
      component: EventsView,
    }
    ,
    {
      path: '/games',
      component: GamesView,
    }
  ],
})
