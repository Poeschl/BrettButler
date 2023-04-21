<template>
  <div class="card is-flex">
    <div
      class="card-content"
      @click="$emit('clicked:details', event)"
    >
      <div class="media">
        <div class="media-content">
          <p class="title is-4">
            Spieleabend am {{ props.event.date.toLocaleString() }}
          </p>
          <div class="level">
            <div class="level-left">
              <a class="level-item">
                <FontAwesomeIcon
                  class="is-small"
                  icon="fa-regular fa-pen-to-square"
                  @click.stop="$emit('clicked:edit', event)"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="content has-gamelist-height">
        <ul>
          <li
            v-for="game in props.event.games.slice(0,2)"
            :key="game.id"
          >
            {{ game.name }}
          </li>
          <li v-if="props.event.games.length > 2">
            ...
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Event from "../models/Event";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const props = defineProps<{
  event: Event
}>()

defineEmits<{
  (e: 'clicked:details', val: Event): void
  (e: 'clicked:edit', val: Event): void
}>()
</script>

<style scoped>
.has-gamelist-height {
  height: 5rem;
}

.card-content {
  cursor: pointer;
}
</style>
