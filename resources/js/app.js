require('./bootstrap');

import Vue from 'vue';
window.Vue = Vue;

Vue.component('Login', require('./components/Login').default)

const app = new Vue({
    el: '#app'
})