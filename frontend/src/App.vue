<template>
  <div>
    <NavBar class="mb-5"/>
    <main class="container">
      <router-view/>
    </main>
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import { provide } from "vue";
import GameService from "./services/GameService";
import EventService from "./services/EventService";
import { Env } from "@/Env";

provide<GameService>('gameService', new GameService())
provide<EventService>('eventService', new EventService())

console.info(`Swagger UI: ${window.location.origin}${Env.brettbutlerPathPrefix}/rest/swagger-ui`)
</script>
