import {defineStore} from "pinia";
import {computed, ref} from "vue";
import UserService from "@/services/UserService";
import type User from "@/models/User";
import {createEmptyUser} from "@/models/User";

const userService = new UserService()
export const useUserStore = defineStore('userStore', () => {
  const user = ref<User | undefined>()

  const isUserDefined = computed<boolean>(() => {
    return user.value !== undefined
  })

  function setUser(newUser: User): Promise<User | void> {
    return userService.getUser(newUser.username)
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
