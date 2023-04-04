<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-96x96">
            <img src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ props.game.name }}</p>
          <p class="subtitle mb-1 is-6">{{ props.game.numberOfPlayers }} Player</p>
          <p class="subtitle mb-1 is-6">{{ props.game.playtimeInMinutes }} Minutes Playtime</p>
          <div class="level">
            <div class="level-left">
              <a class="level-item">
                <font-awesome-icon class="is-small" icon="fa-regular fa-pen-to-square"/>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="content">
        <p>
          {{ props.game.description }}
        </p>
        <a target="_blank" :href="props.game.url">More information...</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import Game from "../models/Game";

const props = defineProps<{
  game: Game
}>()

</script>

<style scoped>

</style>
