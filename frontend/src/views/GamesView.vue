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
      class="column is-one-third is-full-mobile is-flex"
    >
      <GameCard
        :game="game"
        @gamecard-clicked="openDetailModal"
      />
    </div>
  </div>
  <div class="details">
    <GameDetailsModal
      v-if="showDetails"
      :game="modalGame"
      @close="closeModal"
    />
  </div>
</template>

<script setup lang="ts">
import GameService from '../services/GameService'
import GameCard from '../components/GameCard.vue'
import GameDetailsModal from "../components/GameDetailsModal.vue";
import Game from "../models/Game";
import {ref} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const gameService = new GameService()

const gameList = gameService.getAllGames()

const modalGame = ref<Game>(gameList[0])
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
  }
  showEdit.value = true
}

</script>

<style scoped>

</style>
