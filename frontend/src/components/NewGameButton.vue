<template>
  <button
    class="button is-link is-outlined"
    @click="$emit('newGame:clicked')"
  >
    <span class="icon">
      <FontAwesomeIcon
        class="is-small"
        icon="fa-solid fa-plus"
      />
    </span>
    <span>Add new game to event</span>
  </button>
</template>

<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

defineEmits<{
  (e: 'newGame:clicked'): void
}>()

</script>

<style scoped>

</style>
