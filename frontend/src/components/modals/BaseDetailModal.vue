<template>
  <div
    class="modal is-active"
  >
    <div
      class="modal-background"
      @click="$emit('close')"
    />
    <div class="modal-content">
      <slot name="content"/>
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      @click="$emit('close')"
    />
  </div>
</template>

<script setup lang="ts">
defineEmits<{
  (e: 'close'): void
}>()
</script>
