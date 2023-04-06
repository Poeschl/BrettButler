<template>
  <h1 class="is-size-2 mb-4">
    Active
  </h1>
  <div class="columns is-multiline is-flex">
    <div
        v-for="event in activeEvents"
        :key="event.id"
        class="column is-one-third is-full-mobile"
    >
      <EventCard :event="event"/>
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
      <EventCard :event="event"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import EventService from '../services/EventService'
import EventCard from '../components/EventCard.vue'

const eventService = new EventService()

const today = getStartOfDay()
const allEvents = eventService.getAllEvents()
const pastEvents = allEvents.filter(event => event.date < today)
const activeEvents = allEvents.filter(event => event.date >= today)

function getStartOfDay() {
  const now = new Date()
  now.setHours(0, 0, 0)
  return now
}
</script>

<style scoped>

</style>
