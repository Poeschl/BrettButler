import {defineStore, StoreDefinition} from "pinia";
import Event from "../models/Event";
import EventService from "../services/EventService";
import {ref} from "vue";

const eventService = new EventService()
export const useEventStore: StoreDefinition<"eventsStore"> = defineStore('eventsStore', () => {
  const events = ref<Event[]>(eventService.getAllEvents())

  function updateList() {
    events.value = eventService.getAllEvents()
  }

  function saveGame(event: Event) {
    eventService.saveEvent(event)
    updateList()
  }

  function deleteGame(event: Event) {
    eventService.deleteEvent(event)
    updateList()
  }

  return {events, updateList, saveGame, deleteGame}
})
