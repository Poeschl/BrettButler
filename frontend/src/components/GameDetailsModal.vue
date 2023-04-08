<template>
  <div
    class="game-modal is-active modal"
    :data-id="props.game.id"
  >
    <div
      class="modal-background"
      @click="$emit('close')"
    />
    <div class="modal-content">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img
              src="https://bulma.io/images/placeholders/128x128.png"
              alt="Placeholder image"
            >
          </figure>
        </div>
        <div class="card-content">
          <p class="title is-4">
            {{ props.game.name }}
          </p>
          <p class="subtitle mb-1 is-6">
            {{ props.game.numberOfPlayers }} Player
          </p>
          <p class="subtitle mb-1 is-6">
            {{ props.game.playtimeInMinutes }} Minutes Playtime
          </p>
          <p class="content mt-4">
            {{ props.game.description }}
          </p>
          <a
            target="_blank"
            :href="props.game.url"
          >
            {{ props.game.url }}
          </a>
        </div>
      </div>
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      @click="$emit('close')"
    />
  </div>
</template>

<script setup lang="ts">
import Game from "../models/Game";

const props = defineProps<{
  game: Game
}>()
defineEmits(['close'])


</script>

<style scoped>

</style>
