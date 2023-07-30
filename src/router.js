import { createRouter, createWebHistory  } from 'vue-router';
import HomePage from '../src/pages/Homepage.vue';
import FormPage from '../src/pages/Formpage.vue';

export default createRouter({
    history: createWebHistory(),
    routes:[
      {
        path:'/',
        component:HomePage
      },
      {
        path:'/form',
        component:FormPage
    }
    ]
  });