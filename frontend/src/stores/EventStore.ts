import {defineStore} from "pinia";
import type Event from "@/models/Event";
import EventService from "@/services/EventService";
import {ref} from "vue";
import type PlayingGame from "@/models/PlayingGame";
import type Game from "@/models/Game";
import type User from "@/models/User";

const eventService = new EventService()
export const useEventStore = defineStore('eventsStore', () => {
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

  function addUserToGame(event: Event, user: User, game: PlayingGame): Promise<Event | void> {
    return eventService.addUserToGame(event, user, game)
      .then(response => {
        updateList()
        return response
      })
      .catch(reason => {
        console.error(`Could not add user to game. (${reason})`)
      })
  }


  function removeUserFromGame(event: Event, user: User, game: PlayingGame): Promise<Event | void> {
    return eventService.removeUserFromGame(event, user, game).then(response => {
      updateList()
      return response
    })
      .catch(reason => {
        console.error(`Could not remove user from game. (${reason})`)
      })
  }

  function addGameToEvent(event: Event, game: Game, user: User): Promise<Event | void> {
    return eventService.addGameToEvent(event, game, user)
      .then(response => {
        updateList()
        return response
      })
      .catch(reason => {
        console.error(`Could not add game to event. (${reason})`)
      })
  }

  function removeGameFromEvent(event: Event, game: PlayingGame): Promise<Event | void> {
    return eventService.removeGameFromEvent(event, game)
      .then(response => {
        updateList()
        return response
      })
      .catch(reason => {
        console.error(`Could not remove game from event. (${reason})`)
      })
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
