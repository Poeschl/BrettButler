<template>
  <div class="level">
    <div class="level-left"/>
    <div class="level-right">
      <div class="level-item">
        <button
          class="button is-primary"
          @click="openEditModal(null)"
        >
          <span class="icon">
            <FontAwesomeIcon
              class="is-small"
              icon="fa-solid fa-plus"
            />
          </span>
          <span>Add new event</span>
        </button>
      </div>
    </div>
  </div>
  <h1 class="is-size-2 mb-4">
    Active
  </h1>
  <div class="columns is-multiline is-flex">
    <div
      v-for="event in activeEvents"
      :key="event.id"
      class="column is-one-third is-full-mobile"
    >
      <EventCard
        :event="event"
        @clicked:details="openDetailModal"
        @clicked:edit="openEditModal"
      />
    </div>
  </div>

  <h1 class="is-size-2 mb-4">
    Past
  </h1>
  <div class="columns is-multiline is-flex">
    <div
      v-for="event in pastEvents"
      :key="event.id"
      class="column is-one-third is-full-mobile"
    >
      <EventCard
        :event="event"
        @clicked:details="openDetailModal"
        @clicked:edit="openEditModal"
      />
    </div>
  </div>
  <EventDetailsModal
    v-if="showDetails"
    :event="modalEvent"
    @close="closeModal"
  />
  <EventEditModal
    v-if="showEdit"
    v-model:event="modalEvent"
    @close="closeModal"
    @update:event="saveEvent"
    @delete:event="deleteEvent"
  />
</template>

<script setup lang="ts">
import EventCard from '../components/EventCard.vue'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {computed, ref} from "vue";
import Event, {createEmptyEvent} from "../models/Event";
import EventEditModal from "../components/modals/EventEditModal.vue";
import EventDetailsModal from "../components/modals/EventDetailsModal.vue";
import {useEventStore} from "../stores/EventStore";

const eventStore = useEventStore()

const today = getStartOfDay()
const allEvents = ref<Event[]>(eventStore.events)
const pastEvents = computed<Event[]>(() => allEvents.value.filter(event => event.date < today));
const activeEvents = computed<Event[]>(() => allEvents.value.filter(event => event.date >= today))

function getStartOfDay() {
  const now = new Date()
  now.setHours(0, 0, 0)
  return now
}

const modalEvent = ref<Event>(activeEvents.value[0])
const showDetails = ref(false)
const showEdit = ref(false)

const openDetailModal = (event: Event) => {
  modalEvent.value = event
  showDetails.value = true
}

const closeModal = () => {
  showDetails.value = false
  showEdit.value = false
}

const openEditModal = (event: Event | null) => {
  if (event !== null) {
    modalEvent.value = event
  } else {
    modalEvent.value = createEmptyEvent()
  }
  showEdit.value = true
}

const saveEvent = (event: Event) => {
  eventService.saveEvent(event);
}

const deleteEvent = (event: Event) => {
  eventService.deleteEvent(event);
}
</script>

<style scoped>

</style>
