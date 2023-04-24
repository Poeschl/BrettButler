import {App as Application, createApp} from 'vue'
import './assets/main.scss'
import App from './App.vue'
import router from "./router/main";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faPenToSquare} from "@fortawesome/free-regular-svg-icons";
import {faDice, faPlus} from "@fortawesome/free-solid-svg-icons";

const app: Application<Element> = createApp(App)

library.add(faPenToSquare)
library.add(faDice)
library.add(faPlus)
app.component('FontAwesomeIcon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
