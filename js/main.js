'use strict';

const { createApp } = Vue;

createApp({
    data() {
        return {
            titolo: 'Ciao, sono Vue.JS'
        }
    }
}).mount('#app');