import {defineStore, StoreDefinition} from "pinia";
import Event from "../models/Event";
import EventService from "../services/EventService";
import {ref} from "vue";
import PlayingGame from "../models/PlayingGame";
import Game from "../models/Game";

const eventService = new EventService()
export const useEventStore: StoreDefinition<"eventsStore"> = defineStore('eventsStore', () => {
  const events = ref<Event[]>([])

  function updateList() {
    eventService.getAllEvents()
      .then(response => {
        events.value = []
        events.value = response
        return response
      })
      .catch(reason => {
        console.error(`Could not get event list. (${reason})`)
      })
  }

  function saveEvent(event: Event) {
    eventService.saveEvent(event)
      .then(response => {
        updateList()
        return response
      })
      .catch(reason => {
        console.error(`Could not save event. (${reason})`)
      })
  }

  function deleteEvent(event: Event) {
    eventService.deleteEvent(event)
      .then(response => {
        updateList()
        return response
      })
      .catch(reason => {
        console.error(`Could not delete event. (${reason})`)
      })
  }

  function addUserToGame(event: Event, user: string, game: PlayingGame) {
    eventService.addUserToGame(event, user, game)
    updateList()
  }

  function removeUserFromGame(event: Event, user: string, game: PlayingGame) {
    eventService.removeUserFromGame(event, user, game)
    updateList()
  }

  function addGameToEvent(event: Event, game: Game, user: string): PlayingGame {
    const newGame = eventService.addGameToEvent(event, game, user)
    updateList()
    return newGame
  }

  function removeGameFromEvent(event: Event, game: Game) {
    eventService.removeGameFromEvent(event, game)
    updateList()
  }

  return {
    events,
    updateList,
    saveEvent,
    deleteEvent,
    addUserToGame,
    removeUserFromGame,
    addGameToEvent,
    removeGameFromEvent
  }
})
