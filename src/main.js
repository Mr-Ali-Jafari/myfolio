import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import { createRouter, createWebHistory } from 'vue-router';
import routes from './router';
import messages from './locales';
import { createI18n } from './composables/useI18n';

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount('#app');
