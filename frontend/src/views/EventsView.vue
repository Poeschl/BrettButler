<template>
  <div>
    <h1 class="is-uppercase has-text-centered is-size-1 mb-4">
      Brettbutler
    </h1>
    <ExplanationText class="mb-2"/>
  </div>
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
    Future Events
  </h1>
  <div class="columns is-multiline is-flex">
    <div
      v-for="event in activeEvents"
      :key="event.id"
      class="column is-one-third-widescreen is-half-desktop is-half-tablet is-full-mobile"
    >
      <EventCard
        :event="event"
        @clicked:details="openDetailModal(event, false)"
        @clicked:edit="openEditModal"
      />
    </div>
  </div>

  <h1 class="is-size-2 mb-4">
    Past Events
  </h1>
  <div class="columns is-multiline is-flex">
    <div
      v-for="event in pastEvents"
      :key="event.id"
      class="column is-one-third-widescreen is-half-desktop is-half-tablet is-full-mobile"
    >
      <EventCard
        :event="event"
        @clicked:details="openDetailModal(event,true)"
        @clicked:edit="openEditModal"
      />
    </div>
  </div>
  <EventDetailsModal
      v-if="showDetails"
      :event="modalEvent"
      :read-only="modalEventReadOnly"
      @close="closeModal"
  />
  <EventEditModal
    v-if="showEdit"
    v-model:event="modalEvent"
    @close="closeModal"
    @update:event="saveEvent"
    @delete:event="deleteEvent"
  />
  <UserPromptModal
    v-if="showUserPrompt"
    @close="closeModal"
    @username:save="acceptUserPrompt"
  />
</template>

<script setup lang="ts">
import EventCard from '../components/EventCard.vue'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {computed, onMounted, Ref, ref} from "vue";
import EventEditModal from "../components/modals/EventEditModal.vue";
import EventDetailsModal from "../components/modals/EventDetailsModal.vue";
import {useEventStore} from "../stores/EventStore";
import {useUserStore} from "../stores/UserStore";
import UserPromptModal from "../components/modals/UserPromptModal.vue";
import ExplanationText from "../components/ExplanationText.vue";
import Event, {createEmptyEvent} from "../models/Event"
import User from "../models/User";
import {useGameStore} from "../stores/GameStore";

const eventStore = useEventStore()
const userStore = useUserStore()
const gamesStore = useGameStore()

const today = getStartOfDay()
const pastEvents = computed<Event[]>(() => eventStore.events.filter((event: Event) => event.date < today))
const activeEvents = computed<Event[]>(() => eventStore.events.filter((event: Event) => event.date >= today))

onMounted(() => {
  gamesStore.updateList()
  eventStore.updateList()
})

function getStartOfDay() {
  const now = new Date()
  now.setHours(0, 0, 0)
  return now
}

const modalEvent: Ref<Event> = ref<Event>(createEmptyEvent())
const modalEventReadOnly = ref<boolean>(false)
const showDetails = ref<boolean>(false)
const showEdit = ref<boolean>(false)
const showUserPrompt = ref<boolean>(false)

const openDetailModal = (event: Event, readOnly: boolean) => {
  modalEvent.value = event
  modalEventReadOnly.value = readOnly
  if (!userStore.isUserDefined) {
    showUserPrompt.value = true
  } else {
    showDetails.value = true
  }
}

const acceptUserPrompt = (user: User) => {
  userStore.setUser(user)
  showUserPrompt.value = false
  showDetails.value = true
}

const closeModal = () => {
  showDetails.value = false
  showEdit.value = false
  showUserPrompt.value = false
  modalEventReadOnly.value = false
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
  eventStore.saveEvent(event);
  closeModal()
}

const deleteEvent = (event: Event) => {
  eventStore.deleteEvent(event);
}
</script>

<style scoped>

</style>
