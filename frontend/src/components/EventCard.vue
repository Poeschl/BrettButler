<template>
  <div class="card is-flex">
    <div class="card-content">
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
</script>

<style scoped>
.has-gamelist-height {
  height: 5rem;
}
</style>
