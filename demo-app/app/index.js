import 'material-design-icons/iconfont/material-icons.css';
import 'material-design-lite/material';
import 'material-design-lite/material.css';

import Vue from 'vue';
import VueMdl from '../../src';
import App from './App.vue';

Vue.use(VueMdl);

new Vue({
  el: 'app',
  components: { App },
  render: createElement => createElement('app')
});
