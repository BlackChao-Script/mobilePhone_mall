import { createApp } from 'vue'
import { create, NButton, NIcon, NGrid, NGridItem } from 'naive-ui'
import App from './App.vue'

import '@/style/base.css'

const naive = create({
  components: [NButton, NIcon, NGrid, NGridItem],
})

const app = createApp(App)
app.use(naive)
app.mount('#app')
