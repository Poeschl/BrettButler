<template>
  <BaseEditModal>
    <template #header>
      <h4 class="card-header-title is-size-4">
        Enter your name to continue
      </h4>
    </template>

    <template #content>
      <TextInput
        v-model:value="username"
        help="This name will be displayed on the website when you participate on a game or bring one."
        label="Your display name"
        placeholder="Type a human readable name"
        max-length="25"
        :validate="(value) => {
          return value.length > 3
        }"
        @keydown.enter="$emit('username:save', username)"
      />
    </template>
    <template #footer>
      <EditModalFooter
        :show-delete="false"
        @cancel="$emit('close')"
        @save="$emit('username:save', username)"
      />
    </template>
  </BaseEditModal>
</template>

<script setup lang="ts">
import EditModalFooter from "../EditModalFooter.vue";
import BaseEditModal from "./BaseEditModal.vue";
import TextInput from "../forms/TextInput.vue";
import {ref} from "vue";

const username = ref<string>("")

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'username:save', val: string): void
}>()
</script>

<style scoped>

</style>
