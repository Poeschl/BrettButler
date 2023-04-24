import {App as Application, createApp} from 'vue'
import './assets/main.scss'
import App from './App.vue'
import router from "./router/main";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faPenToSquare} from "@fortawesome/free-regular-svg-icons";
import {faDice, faPlus, faSquareMinus, faUserMinus, faUserPlus} from "@fortawesome/free-solid-svg-icons";

const app: Application<Element> = createApp(App)

library.add(faPenToSquare, faDice, faPlus, faUserPlus, faUserMinus, faSquareMinus)
app.component('FontAwesomeIcon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
