<template>
  <BaseDetailModal>
    <template #content>
      <div class="card">
        <div class="card-content">
          <div class="panel">
            <div
              v-for="game in props.games"
              :key="game.id"
              class="panel-block"
              @click="$emit('game:selected', game)"
            >
              {{ game.name }}
            </div>
          </div>
        </div>
      </div>
    </template>
  </BaseDetailModal>
</template>

<script setup lang="ts">
import BaseDetailModal from "./BaseDetailModal.vue";
import Game from "../../models/Game";

const props = defineProps<{
  games: Game[]
}>()

defineEmits<{
  (e: 'game:selected', value: Game): void
}>()
</script>

<style scoped lang="scss">
.panel {
  box-shadow: none;
}

.card-content {
  padding: unset;
}

.panel-block {
  cursor: pointer;
}
</style>
