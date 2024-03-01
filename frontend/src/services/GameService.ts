import type Game from "@/models/Game";
import axios from "axios";
import { Env } from "@/Env";

export default class GameService {

  private baseEventUrl = Env.brettbutlerPathPrefix + '/rest/games'

  getAllGames = (): Promise<Game[]> => {
    return axios.get(this.baseEventUrl)
      .then(response => response.data)
  }

  saveGame = (game: Game): Promise<Game> => {
    return axios.post(this.baseEventUrl, game)
      .then(response => response.data)
  }

  deleteGame = (game: Game): Promise<void> => {
    return axios.delete(`${this.baseEventUrl}/${game.id}`)
  }

  getMaxPlayers = (game: Game): number => {
    if (game.numberOfPlayers.includes('-')) {
      return parseInt(game.numberOfPlayers.split('-')[1])
    } else {
      return parseInt(game.numberOfPlayers)
    }
  }

}
