<template>
  <BaseDetailModal
    @close="$emit('close')"
  >
    <template #content>
      <div class="card">
        <div class="card-content">
          <p class="title is-3">
            {{ props.game.name }}
          </p>
          <p class="subtitle mb-1 is-6">
            {{ props.game.numberOfPlayers }} Player
          </p>
          <p class="subtitle mb-1 is-6">
            {{ props.game.playtimeInMinutes }} Minutes Playtime
          </p>
          <p class="content mt-4">
            {{ props.game.description }}
          </p>
          <a
            target="_blank"
            :href="props.game.url"
          >
            {{ props.game.url }}
          </a>
        </div>
      </div>
    </template>
  </BaseDetailModal>
</template>

<script setup lang="ts">
import Game from "../../models/Game";
import BaseDetailModal from "./BaseDetailModal.vue";

const props = defineProps<{
  game: Game
}>()
defineEmits<{
  (e: 'close'): void
}>()


</script>

<style scoped>

</style>
