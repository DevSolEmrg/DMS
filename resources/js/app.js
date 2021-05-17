require('./bootstrap');

import Vue from 'vue';
window.Vue = Vue;

//Vuetify Plugins
import Vuetify from 'vuetify'
Vue.use(Vuetify);
//Theme Color
import colors from 'vuetify/lib/util/colors'
//End

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import { routes } from './routes'
console.log("ewtwe", routes, 'ff',__dirname)

//['1', '2'].array.forEach(plugins => Vue.use(plugins))

Vue.component('app-container', require('./components/AppContainer').default);
Vue.component('login-page', require('./components/Login').default);

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify({
        theme: {
            dark: false,
            themes: {
              light: {
                primary: colors.blue,
                secondary: colors.grey.darken1,
                accent: colors.shades.black,
                error: colors.red.accent3,
              },
              dark: {
                primary: colors.blue.lighten3,
              },
            },
        },
    }),
})