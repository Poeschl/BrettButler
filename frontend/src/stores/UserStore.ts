import {defineStore, StoreDefinition} from "pinia";
import {computed, ComputedRef, Ref, ref} from "vue";

export const useUserStore: StoreDefinition<"userStore"> = defineStore('userStore', () => {
  const username: Ref<string | undefined> = ref()

  const isUserDefined: ComputedRef<boolean> = computed(() => {
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
