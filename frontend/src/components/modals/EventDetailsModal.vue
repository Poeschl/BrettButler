<template>
  <BaseDetailModal
    @close="$emit('close')"
  >
    <template #content>
      <div class="card">
        <div class="card-content">
          <p class="title is-3">
            {{ props.event.date.toLocaleString() }}
          </p>
          <p class="subtitle is-5">
            Planned games:
          </p>
          <div>
            <div
              v-for="game in props.event.playedGames"
              :key="game.id"
              class="block ml-3"
            >
              <span class="title is-4 mr-3">
                {{ game.game.name }}
              </span>
              <div class="level">
                <div class="level-left">
                  <div class="level-item has-text-grey-light is-block">
                    <p class="">
                      {{ game.game.numberOfPlayers }} Players
                    </p>
                    <p class="">
                      Added by {{ game.owner }}
                    </p>
                    <div>
                      <a title="Remove Game for this event">
                        <FontAwesomeIcon
                          class="is-small"
                          icon="fa-solid fa-square-minus"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="level-right user-list">
                  <div class="level-item">
                    <div class="content">
                      <p class="mb-1">
                        Player:
                      </p>
                      <ul>
                        <li
                          v-for="user in game.players"
                          :key="user"
                        >
                          {{ user }}
                          <a>
                            <FontAwesomeIcon
                              class="is-small"
                              icon="fa-solid fa-user-minus"
                            />
                          </a>
                        </li>
                        <li
                          v-for="n in (gameService.getMaxPlayers(game.game) - game.players.length )"
                          :key="n"
                        >
                          <a>
                            <FontAwesomeIcon
                              class="is-small"
                              icon="fa-solid fa-user-plus"
                            />
                            Take seat
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </BaseDetailModal>
</template>

<script setup lang="ts">
import Event from "../../models/Event";
import BaseDetailModal from "./BaseDetailModal.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import GameService from "../../services/GameService";

const gameService = new GameService()

const props = defineProps<{
  event: Event
}>()
defineEmits<{
  (e: 'close'): void
}>()
</script>

<style scoped lang="scss">
.user-list {
  min-width: 50%;

  .level-item, ul {
    width: 100%;
    justify-content: start;
  }
}

.level {
  align-items: start;
}
</style>
