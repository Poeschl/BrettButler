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
import {RuntimeConfigurationPlugin} from "./plugins/RuntimeConfigurationPlugin";

const app = createApp(App)

const runtimeConfigPlugin = RuntimeConfigurationPlugin
app.use(runtimeConfigPlugin)

library.add(faPenToSquare, faDice, faPlus, faUserPlus, faUserMinus, faSquareMinus, faUser, faRightFromBracket, faAngleDown)
app.component('FontAwesomeIcon', FontAwesomeIcon)

app.use(router)

const pinia = createPinia()
pinia.use(piniaPluginPersistedState)
app.use(pinia)

runtimeConfigPlugin.getConfig()
  .then(runtimeConfig => {
    if (runtimeConfig.plausibleDomain !== undefined) {
      const plausible = Plausible({
        domain: runtimeConfig.plausibleDomain,
        hashMode: true,
        apiHost: runtimeConfig.plausibleCustomApiHost
      })
      plausible.enableAutoPageviews()
      app.provide("plausible", plausible)
    }
  })


app.mount('#app')
