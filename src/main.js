import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPinterest } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebookSquare)
library.add(faInstagram)
library.add(faTwitter)
library.add(faPinterest)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
