<template>
  <div v-if="userStore.isUserDefined">
    <FontAwesomeIcon
      class="mr-2"
      icon="fa-solid fa-user"
    />
    <span>{{ userStore.username }}</span>
    <a
      @click="clearUser"
      class="mr-1 ml-2 has-text-grey-light"
    >
      <FontAwesomeIcon
        icon="fa-solid fa-right-from-bracket"
      />
    </a>
  </div>
</template>

<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {useUserStore} from "../stores/UserStore";

const userStore = useUserStore()

const clearUser = () => {
  userStore.clearUser()
}

</script>

<style scoped>
div {
  cursor: default;
}
</style>
