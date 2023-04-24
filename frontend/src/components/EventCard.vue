<template>
  <div class="card">
    <div
      class="card-content"
      @click="$emit('clicked:details', event)"
    >
      <p class="title is-4">
        {{ props.event.date.toLocaleString() }}
      </p>
      <div class="level">
        <div class="level-left">
          <div class="content has-gamelist-height">
            <ul>
              <li
                v-for="game in props.event.playedGames.slice(0,2)"
                :key="game.id"
              >
                {{ game.game.name }}
              </li>
              <li v-if="props.event.playedGames.length > 2">
                ...
              </li>
            </ul>
          </div>
        </div>
        <div class="level-right">
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

<style scoped lang="scss">
.has-gamelist-height {
  height: 5rem;
}

.card-content {
  cursor: pointer;
}

.level {
  align-items: start;
}
</style>
