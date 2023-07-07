import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import axios from 'axios';
import mitt from 'mitt';
import { MotionPlugin } from '@vueuse/motion'
import './input.css';

let emitter = mitt();
let app = createApp(App);

app.config.globalProperties.emitter = emitter;
app.config.globalProperties.axios = axios;
app.use(MotionPlugin)
app.use(router).mount('#app')
