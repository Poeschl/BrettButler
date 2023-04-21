<template>
  <div
    class="modal is-active"
  >
    <div
      class="modal-background"
    />
    <div class="modal-content">
      <div class="card">
        <div class="card-header">
          <h4
            v-if="isNew"
            class="card-header-title is-size-4"
          >
            Create new event
          </h4>
          <h4
            v-if="!isNew"
            class="card-header-title is-size-4"
          >
            Edit {{ event.name }}
          </h4>
        </div>

        <div class="card-content form">
          <DateInput
            v-model:value="event.date"
            help=""
            label="Event date"
            placeholder="The date of the event"
            :validate="(date) => {
              return new Date() < date
            }"
          />
        </div>
        <EditModalFooter
          :show-delete="props.event.id !== undefined"
          @cancel="$emit('close')"
          @save="save"
          @delete="$emit('delete:event', event)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import Event from "../../models/Event";
import EditModalFooter from "../EditModalFooter.vue";
import DateInput from "../forms/DateInput.vue";

const props = defineProps<{
  event: Event
}>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'update:event', val: Event): void
  (e: 'delete:event', val: Event): void
}>()

const event = ref(props.event)
const isNew = computed(() => {
  return props.event.id === undefined
})

const save = () => {
  emit("update:event", event.value)
}

</script>

<style scoped>
.datetimepicker {
  max-width: none;
}
</style>
