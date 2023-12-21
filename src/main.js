import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret,faHeart,faCoffee ,faInbox} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faUserSecret,faHeart,faCoffee,faInbox);
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
