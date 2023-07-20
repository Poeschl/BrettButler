import {createRouter, createWebHashHistory} from 'vue-router'

const GamesView = () => import("@/views/GamesView.vue");
const EventsView = () => import("@/views/EventsView.vue");

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
