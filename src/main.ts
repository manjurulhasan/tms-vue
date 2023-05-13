import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Import our custom CSS
import './assets/scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import './assets/main.css'

import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(fas)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(bootstrap)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
