import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import '@/assets/main.css'

// Создаем экземпляр приложения
const app = createApp(App)

// Подключаем хранилище Pinia
app.use(createPinia())

// Подключаем роутер
app.use(router)

// Монтируем приложение
app.mount('#app')
