import {createRouter, createWebHashHistory} from 'vue-router'
import GamesView from "../views/GamesView.vue";
import EventsView from "../views/EventsView.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/events',
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
