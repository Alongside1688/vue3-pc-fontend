import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import './style.scss'
import './assets/css/iconfont.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
// import 'lib-flexible'

const app = createApp(App)
app.use(router)

app.mount('#app')
