
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "@/assets/styles/index.scss" ;
import SvgIcon from '~virtual/svg-component';
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component(SvgIcon.name,SvgIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
