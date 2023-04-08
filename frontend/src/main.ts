import {App as Application, createApp} from 'vue'
import './assets/main.scss'
import App from './App.vue'
import router from "./router";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faPenToSquare} from "@fortawesome/free-regular-svg-icons";
import {faDice} from "@fortawesome/free-solid-svg-icons";

const app: Application<Element> = createApp(App)

library.add(faPenToSquare)
library.add(faDice)
app.component('FontAwesomeIcon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
