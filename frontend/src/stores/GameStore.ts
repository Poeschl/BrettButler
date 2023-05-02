import {defineStore, StoreDefinition} from "pinia";
import Game from "../models/Game";
import GameService from "../services/GameService";
import {ref} from "vue";

const gameService = new GameService()
export const useGameStore: StoreDefinition<"gamesStore"> = defineStore('gamesStore', () => {
  const games = ref<Game[]>(gameService.getAllGames())

  function updateList() {
    games.value = []
    games.value = gameService.getAllGames()
  }

  function saveGame(game: Game) {
    gameService.saveGame(game)
    updateList()
  }

  function deleteGame(game: Game) {
    gameService.deleteGame(game)
    updateList()
  }

  return {games, updateList, saveGame, deleteGame}
})
