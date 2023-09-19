import { createApp } from 'vue'

import App from './App.vue'
import router from './router/index'

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

//css
import './styles.css'


const app = createApp(App)

app.use(router)
app.mount('#app')
