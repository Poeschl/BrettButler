<template>
  <BaseEditModal>
    <template #header>
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
    </template>
    <template #content>
      <DateInput
        v-model:value="event.date"
        help=""
        label="Event date"
        placeholder="The date of the event"
        :validate="(date) => {
          return new Date() < date
        }"
      />
    </template>
    <template #footer>
      <EditModalFooter
        :show-delete="props.event.id !== undefined"
        @cancel="$emit('close')"
        @save="save"
        @delete="$emit('delete:event', event)"
      />
    </template>
  </BaseEditModal>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import Event from "../../models/Event";
import EditModalFooter from "../EditModalFooter.vue";
import DateInput from "../forms/DateInput.vue";
import BaseEditModal from "./BaseEditModal.vue";

const props = defineProps<{
  event: Event
}>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'update:event', val: Event): void
  (e: 'delete:event', val: Event): void
}>()

const event = ref<Event>(props.event)
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
