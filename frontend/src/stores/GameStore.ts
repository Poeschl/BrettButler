import {defineStore, StoreDefinition} from "pinia";
import Game from "../models/Game";
import GameService from "../services/GameService";
import {ref} from "vue";

const gameService = new GameService()
export const useGameStore: StoreDefinition<"gamesStore"> = defineStore('gamesStore', () => {
  const games = ref<Game[]>([])

  function updateList() {
    gameService.getAllGames()
      .then(response => {
        games.value = []
        games.value = response
        return response
      })
      .catch(reason => {
        console.error(`Could not get games list. (${reason})`)
      })
  }

  function saveGame(game: Game) {
    gameService.saveGame(game)
      .then(response => {
        updateList()
        return response
      })
      .catch(reason => {
        console.error(`Could not save game (${reason})`)
      })
  }

  function deleteGame(game: Game) {
    gameService.deleteGame(game)
      .then(response => {
        updateList()
        return response
      })
      .catch(reason => {
        console.error(`Could not delete game (${reason})`)
      })
  }

  return {games, updateList, saveGame, deleteGame}
})
