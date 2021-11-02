const root = new Vue({
    el: "#root",
    data: {

        counter: 0,

        activeClass: "selected",

        inactiveClass: "unselected",

        countries: [
            {
                image:"img/01.jpg",
                name:"Svezia",
                caption:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis."
            },
            {
                image:"img/02.jpg",
                name:"Svizzera",
                caption:"Lorem ipsum."
            },
            {
                image:"img/03.jpg",
                name:"Gran Bretagna",
                caption:"Lorem ipsum, dolor sit amet consectetur adipisicing elit."
            },
            {
                image:"img/04.jpg",
                name:"Germania",
                caption:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam."
            },
            {
                image:"img/05.jpg",
                name:"Paradise",
                caption:"Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam."
            }
        ],

    },

    methods: {

        nextImg(){
            console.log("next");
            if(this.counter <= 4){
                this.counter ++;
            }if(this.counter == 5){
                this.counter = 0;
            }console.log(this.counter);
        },

        formerImg(){
            if(this.counter <= 4){
                this.counter --;
            }if(this.counter == -1){
                this.counter = 4
            }
        },

    },

    mounted() {
        console.log("halo");
        setInterval(() => {
            if(this.counter <= 4){
                this.counter ++;
            }if(this.counter == 5){
                this.counter = 0;
            };
        }, 3000)
    }


})

