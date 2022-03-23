import { createApp } from 'vue'
import {
  create,
  NButton,
  NIcon,
  NGrid,
  NGridItem,
  NDivider,
  NCarousel,
  NImage,
  NInput,
  NInputGroup,
  NList,
  NListItem,
} from 'naive-ui'
import App from './App.vue'
import router from '@/router'

import '@/style/base.css'

const naive = create({
  components: [
    NButton,
    NIcon,
    NGrid,
    NGridItem,
    NDivider,
    NCarousel,
    NImage,
    NInput,
    NInputGroup,
    NList,
    NListItem,
  ],
})

const app = createApp(App)
app.use(naive)
app.use(router)
app.mount('#app')
