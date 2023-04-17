<template>
  <footer class="card-footer">
    <a
      class="card-footer-item"
      @click="$emit('save')"
    >
      Save
    </a>
    <a
      class="card-footer-item"
      @click="$emit('cancel')"
    >
      Cancel
    </a>
    <a
      v-if="props.showDelete"
      class="card-footer-item has-text-danger-dark is-hoverable"
      @click="$emit('delete')"
    >
      Delete
    </a>
  </footer>
</template>

<script setup lang="ts">
const props = defineProps<{
  showDelete: boolean
}>()

defineEmits<{
  (e: 'save'): void
  (e: 'cancel'): void
  (e: 'delete'): void
}>()
</script>

<style scoped>

</style>
