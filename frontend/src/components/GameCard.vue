<template>
  <div
    class="card"
  >
    <div
      class="card-content"
      @click="$emit('gamecard-clicked', props.game)">
      <div class="level">
        <div class="level-left">
          <div class="level-item">
            <div
              class="media"

            >
              <div class="media-left">
                <figure class="image is-96x96">
                  <img
                    src="https://bulma.io/images/placeholders/128x128.png"
                    alt="Placeholder image"
                  >
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">
                  {{ props.game.name }}
                </p>
                <p class="subtitle mb-1 is-6">
                  {{ props.game.numberOfPlayers }} Player
                </p>
                <p class="subtitle mb-1 is-6">
                  {{ props.game.playtimeInMinutes }} Minutes Playtime
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="level-right">
          <a class="level-item">
            <FontAwesomeIcon
              class="is-small"
              icon="fa-regular fa-pen-to-square"
            />
          </a>
        </div>
      </div>

      <p class="content is-description-height has-hidden-overflow">
        {{ props.game.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">

import Game from "../models/Game";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const props = defineProps<{
  game: Game
}>()

defineEmits(['gamecard-clicked'])

</script>

<style scoped>
.is-description-height {
  height: 6rem;
}

.has-hidden-overflow {
  overflow: hidden;
}

.card-content {
  cursor: pointer;
}

.title {
  margin-bottom: revert;
}
</style>
