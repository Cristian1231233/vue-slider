

// Creare carosello
// al click l'immagine grande diventa visibile e l'immagine piccola a destra si evidenzia rispetto alle altre

// const items = [
//     'img/01.jpg',
//     'img/02.jpg',
//     'img/03.jpg',
//     'img/04.jpg',
//     'img/05.jpg'
// ];

const app = new Vue({
    el: '#app',
    data:{
        images: ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg'],
        counter: 0
    },
    mounted(){
        console.log('App montata');
        setInterval(() => {
            this.nextSlider();
        }, 1000)
    },
    methods:{
       prevSlider(){
           this.counter--;
           if(this.counter < 0){
               this.counter = this.images.length - 1;
           }
       },
       nextSlider(){
        this.counter++;
        if(this.counter > this.images.length - 1){
            this.counter = 0;
        }
    }

    }
});



