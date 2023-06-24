import type Event from '../models/Event'
import PlayingGame from "../models/PlayingGame";
import Game from "../models/Game";
import axios from "axios";
import User from "../models/User";

export default class EventService {

  private baseEventUrl = '/rest/events'

  getAllEvents(): Promise<Event[]> {
    return axios.get(this.baseEventUrl)
      .then(response =>
        response.data
          .map((origin: Event) => {
            return {id: origin.id, date: new Date(origin.date), playedGames: origin.playedGames}
          })
      )
  }

  saveEvent = (event: Event): Promise<Event> => {
    return axios.post(this.baseEventUrl, event)
      .then(response => response.data)
  }

  deleteEvent = (event: Event) => {
    return axios.delete(`${this.baseEventUrl}/${event.id}`)
  }

  addUserToGame = (event: Event, user: User, game: PlayingGame) => {
    console.info("Add user to game of event")
    const existingGame = event.playedGames.find(value => value.id === game.id)
    if (existingGame !== undefined && !existingGame.players.includes(user)) {
      existingGame.players.push(user)
    }
  }

  removeUserFromGame = (event: Event, user: User, game: PlayingGame) => {
    console.info("Remove user from game of event")
    const existingGame = event.playedGames.find(value => value.id === game.id)
    if (existingGame !== undefined) {
      existingGame.players = existingGame.players.filter(value => value !== user)
    }
  }

  addGameToEvent = (event: Event, game: Game, user: User): PlayingGame => {
    console.info("Remove user from game of event")
    const newGame: PlayingGame = {id: undefined, game: game, players: [], owner: user}
    event.playedGames.push(newGame)
    return newGame
  }

  removeGameFromEvent = (event: Event, game: Game) => {
    const existingGame = event.playedGames.find(value => value.game.id === game.id)
    if (existingGame !== undefined) {
      event.playedGames = event.playedGames.filter(value => value.game.id !== game.id)
    }
  }
}
