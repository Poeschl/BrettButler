<template>
  <div class="columns is-multiline">
    <div
        v-for="game in gameList"
        :key="game.id"
        class="column is-one-third is-full-mobile is-flex"
    >
      <GameCard :game="game"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import GameService from '../services/GameService'
import GameCard from '../components/GameCard.vue'

const gameService = new GameService()

const gameList = gameService.getAllGames()

</script>

<style scoped>

</style>
