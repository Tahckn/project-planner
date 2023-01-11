import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faTrash, faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCheck, faTrash, faPen)

const app = createApp(App).component('fa', FontAwesomeIcon)
app.use(router)

app.mount('#app')
