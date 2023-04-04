<template>
  <div>
    <NavBar class="mb-5"/>
    <main class="container">
      <router-view>
      </router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue'
</script>
