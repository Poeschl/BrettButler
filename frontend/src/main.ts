import {App as Application, createApp} from 'vue'
import './assets/main.scss'
import App from './App.vue'
import router from "./router/main";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faPenToSquare} from "@fortawesome/free-regular-svg-icons";
import {
  faDice,
  faPlus,
  faRightFromBracket,
  faSquareMinus,
  faUser,
  faUserMinus,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";
import {createPinia, Pinia} from "pinia";
import piniaPluginPersistedState from "pinia-plugin-persistedstate"

const app: Application<Element> = createApp(App)

library.add(faPenToSquare, faDice, faPlus, faUserPlus, faUserMinus, faSquareMinus, faUser, faRightFromBracket)
app.component('FontAwesomeIcon', FontAwesomeIcon)

app.use(router)

const pinia: Pinia = createPinia()
pinia.use(piniaPluginPersistedState)
app.use(pinia)

app.mount('#app')
