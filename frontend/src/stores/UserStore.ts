import {defineStore, StoreDefinition} from "pinia";
import {computed, ComputedRef, Ref, ref} from "vue";
import UserService from "../services/UserService";
import User, {createEmptyUser} from "../models/User";

const userService = new UserService()
export const useUserStore: StoreDefinition<"userStore"> = defineStore('userStore', () => {
  const user: Ref<User | undefined> = ref()

  const isUserDefined: ComputedRef<boolean> = computed(() => {
    return user.value !== undefined
  })

  function setUser(newUser: User) {
    userService.getUser(newUser.username)
      .then(value => user.value = value)
      .catch(() => {
        const nUser = createEmptyUser()
        nUser.username = newUser.username
        userService.createUser(newUser)
          .then(value => user.value = value)
          .catch(reason => console.error(`Error on user creation: ${reason}`))
      })
  }

  function clearUser() {
    user.value = undefined
  }

  return {user, isUserDefined, setUser, clearUser}
}, {
  persist: true
})
