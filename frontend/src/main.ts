import {createApp} from 'vue'
import './assets/main.scss'
import App from './App.vue'
import router from "./router/main";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faPenToSquare} from "@fortawesome/free-regular-svg-icons";
import {
  faAngleDown,
  faDice,
  faPlus,
  faRightFromBracket,
  faSquareMinus,
  faUser,
  faUserMinus,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";
import {createPinia} from "pinia";
import piniaPluginPersistedState from "pinia-plugin-persistedstate"
import Plausible from "plausible-tracker";

const app = createApp(App)

library.add(faPenToSquare, faDice, faPlus, faUserPlus, faUserMinus, faSquareMinus, faUser, faRightFromBracket, faAngleDown)
app.component('FontAwesomeIcon', FontAwesomeIcon)

app.use(router)

const pinia = createPinia()
pinia.use(piniaPluginPersistedState)
app.use(pinia)

if (import.meta.env.VITE_PLAUSIBLE_DOMAIN !== undefined) {
  const plausible = Plausible({
    domain: import.meta.env.VITE_PLAUSIBLE_DOMAIN,
    hashMode: true,
    apiHost: import.meta.env.VITE_PLAUSIBLE_API_HOST
  })
  plausible.enableAutoPageviews()
  app.provide("plausible", plausible)
}

app.mount('#app')
