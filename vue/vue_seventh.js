const{createApp, ref}=Vue

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

const am=Vue.createApp({
    data(){
        return{
            twd:0.278,jp:1,
        }
    },
    methods:{
        twd2jp(){
            this.jp=Number.parseFloat(Number(this.twd)/0.278).toFixed(3)

        },
        jp2twd(){
            this.twd = Number.parseFloat(Number(this.jp) * 0.278).toFixed(3)


        }
    }
}).mount("#coin")