'use strict';

const { createApp } = Vue;

createApp({
    data() {
        return {
            titolo: '',
            immagine: ''
        }
    },

    created(){
        this.titolo = 'Ciao, sono Vue.JS';
        this.immagine = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLKWXv3sOTG8LgqcOG7zhlAFctu_wxM2XO-Qj1KdKSWPszOd3MLW3tMgau0bxOFCYV4KM&usqp=CAU'
    }
}).mount('#app');