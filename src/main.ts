import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/router'
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
  NCard,
  NSpin,
  NMessageProvider,
  NDropdown,
  NDrawer,
  NDrawerContent,
  NTabs,
  NTabPane,
  NEmpty,
  NCheckbox,
  NBackTop,
  NNumberAnimation,
  NSteps,
  NStep,
  NForm,
  NFormItem,
  NSelect,
  NTag,
} from 'naive-ui'

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
    NCard,
    NSpin,
    NMessageProvider,
    NDropdown,
    NDrawer,
    NDrawerContent,
    NTabs,
    NTabPane,
    NEmpty,
    NCheckbox,
    NBackTop,
    NNumberAnimation,
    NSteps,
    NStep,
    NForm,
    NFormItem,
    NSelect,
    NTag,
  ],
})

const app = createApp(App)
app.use(naive)
app.use(router)
app.use(createPinia())
app.mount('#app')
