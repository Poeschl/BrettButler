<template>
  <GeneralModal>
    <template #header>
      <h4
        v-if="isNew"
        class="card-header-title is-size-4"
      >
        Create new game
      </h4>
      <h4
        v-if="!isNew"
        class="card-header-title is-size-4"
      >
        Edit {{ game.name }}
      </h4>
    </template>
    <template #content>
      <TextInput
        v-model:value="game.name"
        help=""
        label="Game name"
        placeholder="Insert the full game name"
        :max-length="100"
        :validate="(value) => {
          return value.length > 3
        }"
      />
      <TextInput
        v-model:value="game.numberOfPlayers"
        help=""
        label="Number of players"
        placeholder="Type the number of players, eg. 2-4 or 4"
        :max-length="10"
        :validate="(value) => {
          return  RegExp('^[1-9][0-9]*(-[0-9]+)?$').test(value)
        }"
      />
      <NumberInput
          v-model:value="game.playtimeInMinutes"
          help="Minutes"
          label="Estimated playtime"
          placeholder="The playtime in minutes"
          :max-length="10"
          :validate="(value) => {
          return RegExp('^[1-9][0-9]*$').test(value)
        }"
      />
      <TextBoxInput
        v-model:value="game.description"
        help=""
        label="Description"
        placeholder="Give a short description about the game "
        :max-length="400"
        :validate="(value) => {
          return value.length > 80
        }"
      />
      <TextInput
        v-model:value="game.url"
        help=""
        label="Url to more information"
        placeholder="Insert an link to a page with more information about the game"
        :max-length="200"
        :validate="(value) => {
          return RegExp('^https://.*').test(value)
        }"
      />
    </template>
    <template #footer>
      <EditModalFooter
        :show-delete="props.game.id !== undefined"
        @cancel="$emit('close')"
        @save="save"
        @delete="$emit('delete:game', game)"
      />
    </template>
  </GeneralModal>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import type Game from "@/models/Game";
import EditModalFooter from "@/components/EditModalFooter.vue";
import TextInput from "@/components/forms/TextInput.vue";
import TextBoxInput from "@/components/forms/TextBoxInput.vue";
import GeneralModal from "./BaseEditModal.vue";
import NumberInput from "@/components/forms/NumberInput.vue";

const props = defineProps<{
  game: Game
}>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'update:game', val: Game): void
  (e: 'delete:game', val: Game): void
}>()

const game = ref(props.game)
const isNew = computed(() => {
  return props.game.id === undefined
})

const save = () => {
  emit("update:game", game.value)
}

</script>

<style scoped>

</style>
