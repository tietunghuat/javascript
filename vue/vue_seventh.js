
const vm=Vue.createApp({
    data(){
        return {price:'',quantity:''}

    },
    computed:{
        subtotal(){
            console.log("computed")
            return this.price * this.quantity
        }
    },
    methods:{
        subtotal1(){
            console.log("methods")
            return this.price * this.quantity
            
        }
    }
}).mount("#app1")

vm.$data.price=50
vm.$data.quantity = 5

