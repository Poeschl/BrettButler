import {createApp} from 'vue'
import './assets/main.scss'
import App from './App.vue'
import router from "./router";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faPenToSquare} from "@fortawesome/free-regular-svg-icons";

const app: App = createApp(App)

library.add(faPenToSquare)
app.use(FontAwesomeIcon)

app.use(router)

app.mount('#app')
