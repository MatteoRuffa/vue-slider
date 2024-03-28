import {slides} from './data.js';

const {createApp} = Vue;

createApp({
    data() {
        return {
            slides: slides,
            activeIndexSlide: 0
        }
    },
    methods: {
        next() {
            if (this.activeIndexSlide < this.slides.length - 1) {
                this.activeIndexSlide++;
            } else {
                this.activeIndexSlide = 0;
            }
        },
        prev() {
            if(this.activeIndexSlide > 0){
                this.activeIndexSlide--;
            } else {
                this.activeIndexSlide = this.slides.length - 1;
            }
        },
        selectSlide(index) {
            this.activeIndexSlide = index;
        }
    },
    mounted() {
        setInterval(this.next, 3000);
    }    
}).mount('#app');