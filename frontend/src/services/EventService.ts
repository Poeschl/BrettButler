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
      .then(response => {
        const event: Event = response.data
        return {id: event.id, date: new Date(event.date), playedGames: event.playedGames}
      })
  }

  deleteEvent = (event: Event) => {
    return axios.delete(`${this.baseEventUrl}/${event.id}`)
  }

  addUserToGame = (event: Event, user: User, game: PlayingGame): Promise<Event> => {
    return axios.post(`${this.baseEventUrl}/${event.id}/games/${game.id}/players`,
      {userId: user.id})
      .then(response => {
        const event: Event = response.data
        return {id: event.id, date: new Date(event.date), playedGames: event.playedGames}
      })
  }

  removeUserFromGame = (event: Event, user: User, game: PlayingGame): Promise<Event> => {
    return axios.delete(`${this.baseEventUrl}/${event.id}/games/${game.id}/players/${user.id}`)
      .then(response => {
        const event: Event = response.data
        return {id: event.id, date: new Date(event.date), playedGames: event.playedGames}
      })
  }

  addGameToEvent = (event: Event, game: Game, user: User): Promise<Event> => {
    return axios.post(`${this.baseEventUrl}/${event.id}/games`,
      {ownerId: user.id, gameId: game.id})
      .then(response => {
        const event: Event = response.data
        return {id: event.id, date: new Date(event.date), playedGames: event.playedGames}
      })
  }

  removeGameFromEvent = (event: Event, game: Game): Promise<Event> => {
    return axios.delete(`${this.baseEventUrl}/${event.id}/games/${game.id}`)
      .then(response => {
        const event: Event = response.data
        return {id: event.id, date: new Date(event.date), playedGames: event.playedGames}
      })
  }
}
