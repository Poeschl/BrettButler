<template>
  <BaseDetailModal
    @close="$emit('close')"
  >
    <template #content>
      <div class="card">
        <div class="card-content">
          <p class="title is-3">
            {{ currentEvent.date.toLocaleString() }}
          </p>
          <p class="subtitle is-5">
            Planned games:
          </p>
          <div>
            <div
              v-for="game in currentEvent.playedGames"
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
                      Added by {{ game.owner.username }}
                    </p>
                    <div v-if="!props.readOnly && game.owner.id === userStore.user.id">
                      <a
                        title="Remove Game for this event"
                        @click="eventStore.removeGameFromEvent(currentEvent, game.game)"
                      >
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
                          :key="user.id"
                        >
                          <span class="mr-2">{{ user.username }}</span>
                          <a
                            v-if="!props.readOnly && user.id === userStore.user.id"
                            @click="removeUserFromGame(game)"
                          >
                            <FontAwesomeIcon
                              class="is-small"
                              icon="fa-solid fa-user-minus"
                            />
                          </a>
                        </li>
                      </ul>
                      <ul v-if="!props.readOnly">
                        <li
                          v-for="n in (gameService.getMaxPlayers(game.game) - game.players.length )"
                          :key="n"
                        >
                          <span class="mr-2 has-text-grey-light">Free seat</span>
                          <a
                            v-if="!userInGame(userStore.user, game)"
                            @click="addUserToGame(game)"
                          >
                            <FontAwesomeIcon
                              class="is-small"
                              icon="fa-solid fa-user-plus"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="!readOnly"
            class="mt-2 is-flex is-justify-content-center"
          >
            <NewGameDropdown @new-game:clicked="toggleNewGameSelection"/>
          </div>
        </div>
      </div>
    </template>
  </BaseDetailModal>
  <GameSelectModal
    v-if="newGameSelectionShown"
    :games="gameStore.games"
    @game:selected="addGameToEvent"
  />
</template>

<script setup lang="ts">
import BaseDetailModal from "./BaseDetailModal.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {useUserStore} from "../../stores/UserStore";
import PlayingGame from "../../models/PlayingGame";
import {inject, ref} from "vue";
import GameService from "../../services/GameService";
import {useEventStore} from "../../stores/EventStore";
import NewGameDropdown from "../NewGameButton.vue";
import GameSelectModal from "./GameSelectModal.vue";
import {useGameStore} from "../../stores/GameStore";
import Game from "../../models/Game";
import User from "../../models/User";
import Event from "../../models/Event";

const userStore = useUserStore()
const eventStore = useEventStore()
const gameStore = useGameStore()
const gameService: GameService = <GameService>inject('gameService')

const props = defineProps<{
  event: Event,
  readOnly: boolean
}>()

const currentEvent = ref<Event>(props.event)

defineEmits<{
  (e: 'close'): void
}>()

const newGameSelectionShown = ref<boolean>(false)

const userInGame = (user: User, game: PlayingGame): boolean => {
  return game.players.map(player => player.id).includes(user.id)
}

function toggleNewGameSelection() {
  newGameSelectionShown.value = !newGameSelectionShown.value
}

function addGameToEvent(newGame: Game) {
  newGameSelectionShown.value = false
  eventStore.addGameToEvent(currentEvent.value, newGame, userStore.user)
    .then((updatedEvent: Event) => {
      currentEvent.value = (updatedEvent as Event)
      return updatedEvent
    })
    .catch(() => console.error("Error on user event addition"))
}

function addUserToGame(game: PlayingGame) {
  eventStore.addUserToGame(currentEvent.value, userStore.user, game)
    .then((updatedEvent: Event) => {
      currentEvent.value = updatedEvent
      return updatedEvent
    })
    .catch(() => console.error("Error on player addition"))
}

function removeUserFromGame(game: PlayingGame) {
  eventStore.removeUserFromGame(currentEvent.value, userStore.user, game)
    .then((updatedEvent: Event) => {
      currentEvent.value = updatedEvent
      return updatedEvent
    })
    .catch(() => console.error("Error on player removal"))
}
</script>

<style scoped lang="scss">
.user-list {
  min-width: 50%;

  .level-item, ul {
    width: 100%;
    justify-content: start;
    margin-bottom: .25em;
  }
}

.level {
  align-items: start;
}
</style>
