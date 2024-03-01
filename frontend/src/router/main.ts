import { createRouter, createWebHistory } from 'vue-router'
import { Env } from "@/Env";

const GamesView = () => import("@/views/GamesView.vue");
const EventsView = () => import("@/views/EventsView.vue");

export default createRouter({
  history: createWebHistory(Env.brettbutlerPathPrefix),
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
