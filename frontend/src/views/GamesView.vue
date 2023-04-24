<template>
  <div class="level">
    <div class="level-left"/>
    <div class="level-right">
      <div class="level-item">
        <button
          class="button is-primary"
          @click="openEditModal(null)"
        >
          <span class="icon">
            <FontAwesomeIcon
              class="is-small"
              icon="fa-solid fa-plus"
            />
          </span>
          <span>Add new game</span>
        </button>
      </div>
    </div>
  </div>
  <div class="columns is-multiline">
    <div
      v-for="game in gameList"
      :key="game.id"
      class="column is-one-third-widescreen is-half-desktop is-half-tablet is-full-mobile"
    >
      <GameCard
        :game="game"
        @clicked:details="openDetailModal"
        @clicked:edit="openEditModal"
      />
    </div>
  </div>
  <GameDetailsModal
    v-if="showDetails"
    :game="modalGame"
    @close="closeModal"
  />
  <GameEditModal
    v-if="showEdit"
    v-model:game="modalGame"
    @close="closeModal"
    @update:game="saveGame"
    @delete:game="deleteGame"
  />
</template>

<script setup lang="ts">
import GameCard from '../components/GameCard.vue'
import GameDetailsModal from "../components/modals/GameDetailsModal.vue";
import Game, {createEmptyGame} from "../models/Game";
import {ref} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import GameEditModal from "../components/modals/GameEditModal.vue";
import {useGameStore} from "../stores/GameStore";

const gamesStore = useGameStore()
const gameList = ref<Game[]>(gamesStore.games)

const modalGame = ref<Game>(gameList.value[0])
const showDetails = ref(false)
const showEdit = ref(false)

const openDetailModal = (game: Game) => {
  modalGame.value = game
  showDetails.value = true
}

const closeModal = () => {
  showDetails.value = false
  showEdit.value = false
}

const openEditModal = (game: Game | null) => {
  if (game !== null) {
    modalGame.value = game
  } else {
    modalGame.value = createEmptyGame()
  }
  showEdit.value = true
}

const saveGame = (game: Game) => {
  gamesStore.saveGame(game)
  closeModal()
}

const deleteGame = (game: Game) => {
  gamesStore.deleteGame(game);
  closeModal()
}

</script>

<style scoped>

</style>
