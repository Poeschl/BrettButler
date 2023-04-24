import {defineStore, StoreDefinition} from "pinia";
import {computed, ref} from "vue";

export const useUserStore: StoreDefinition<"userStore"> = defineStore('userStore', () => {
  const username = ref<string | undefined>()

  const isUserDefined = computed<boolean>(() => {
    return username.value !== undefined
  })

  function setUser(newUsername: string) {
    username.value = newUsername.trim();
  }

  function clearUser() {
    username.value = undefined
  }

  return {username, isUserDefined, setUser, clearUser}
}, {
  persist: true
})
