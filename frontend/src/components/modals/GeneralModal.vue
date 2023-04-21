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
          <slot name="header"/>
        </div>

        <div class="card-content form">
          <slot name="content"/>
        </div>
        <slot name="footer"/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
