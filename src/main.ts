import { createApp } from 'vue';
import Toast, { type PluginOptions } from 'vue-toastification';

import 'vue-toastification/dist/index.css';
import './assets/style.css';

import App from './App.vue';

const app = createApp(App);

app.mount('#app');

const options: PluginOptions = {
  // You can set your default options here
};

app.use(Toast, options);
