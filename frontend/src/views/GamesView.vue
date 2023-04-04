<template>
  <div class="columns is-multiline">
    <div class="column is-one-third is-full-mobile" v-for="game in gameList">
      <GameCard :game="game"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import GameService from "../services/GameService";
import GameCard from "../components/GameCard.vue";

const gameService = new GameService()

const gameList = gameService.getAllGames()

</script>

<style scoped>

</style>
