<template>
  <div
    class="card"
  >
    <div
      class="card-content"
      @click="$emit('clicked:details', props.game)"
    >
      <div class="level">
        <div class="level-left">
          <div class="level-item">
            <div
              class="media"
            >
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
              @click.stop="$emit('clicked:edit', game)"
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

defineEmits<{
  (e: 'clicked:details', val: Game): void
  (e: 'clicked:edit', val: Game): void
}>()

</script>

<style scoped lang="scss">
.card {

  .card-content {
    cursor: pointer;
  }

  .title {
    margin-bottom: revert;
  }
}

.is-description-height {
  height: 6rem;
}

.has-hidden-overflow {
  overflow: hidden;
}
</style>
