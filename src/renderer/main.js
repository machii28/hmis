import Vue from 'vue';
import axios from 'axios';
import DataStore from 'nedb';
import { ClientTable } from 'vue-tables-2';

import App from './App';
import router from './router';

import './assets/css/index.css';

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

const userData = require('electron').remote.app.getPath('userData');

Vue.prototype.$users = new DataStore({ filename: `${userData}/users.db`, autoload: true });
Vue.prototype.$seniors = new DataStore({ filename: `${userData}/seniors.db`, autoload: true });
Vue.prototype.$diseases = new DataStore({ filename: `${userData}/diseases.db`, autoload: true });
Vue.prototype.$consultations = new DataStore({ filename: `${userData}/consultations.db`, autoload: true });
Vue.prototype.$audits = new DataStore({ filename: `${userData}/audits.db`, autoload: true });

Vue.use(ClientTable, {}, false, () => ({
  framework: 'tailwindcss',
  table: 'table-custom',
  row: 'py-4 mb-3',
  column: 'w-full',
  label: 'font-bold mr-3',
  input: 'border-b-2 p-1 my-4 focus:outline-none',
  select: 'border-b-2 p-1 my-4 focus:outline-none',
  field: 'block',
  inline: 'block',
  right: 'float-right',
  left: 'float-left',
  center: 'text-center pt-5',
  contentCenter: '',
  nomargin: 'm-0',
  groupTr: '',
  small: 'font-hairline',
  button: 'p-2 bg-white text-black',
  pagination: {
    nav: '',
    count: '',
    wrapper: '',
    list: 'pagination-list',
    item: 'pagination-item',
    link: 'pagination-link',
    next: '',
    prev: '',
    active: 'active-pagination',
    disabled: 'disabled-pagination',
  },
}));

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  template: '<App/>',
}).$mount('#app');
