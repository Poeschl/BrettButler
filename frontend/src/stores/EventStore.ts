import {defineStore, StoreDefinition} from "pinia";
import Event from "../models/Event";
import EventService from "../services/EventService";
import {ref} from "vue";
import PlayingGame from "../models/PlayingGame";
import Game from "../models/Game";

const eventService = new EventService()
export const useEventStore: StoreDefinition<"eventsStore"> = defineStore('eventsStore', () => {
  const events = ref<Event[]>(eventService.getAllEvents())

  function updateList() {
    events.value = []
    events.value = eventService.getAllEvents()
  }

  function saveEvent(event: Event) {
    eventService.saveEvent(event)
    updateList()
  }

  function deleteEvent(event: Event) {
    eventService.deleteEvent(event)
    updateList()
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
