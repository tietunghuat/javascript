const{createApp,ref}=Vue

const vm=Vue.createApp({
    template:`<div><p>{{ name }} = price :{{ price }} * quantity: {{ quantity }}= {{subtotal()}}</p></div>`,
    data(){
        return {
            name:"Jersey",price:"",quantity:""
        }
    },
    methods:{
        subtotal: function (){
            return this.price * this.quantity
        }
    }
}).mount("#temp")

vm.$data.price=79
vm.$data.quantity=23