const{createApp , ref} = Vue

const vm=Vue.createApp({
    data(){
        const name=ref("nice")
        return {name}
    }
}).mount("#app1")

const am=Vue.createApp({
    data(){
        
        return {name1:"good def"}
   
        
    }
}).mount("#app2")

const bm=Vue.createApp({
    template:`<div><b><p> {{ greed }} =money</p></b></div>`,
    data(){
        return{
            greed:"greed is good"
        }

    }

}).mount("#temp")

const cm=Vue.createApp({
    template: `<div><b><p>{{price}} * {{quantity}}={{ subtotal() }} </p></b></div>`,
    data(){
        
        return{
            price:"",
            quantity:""
        }
    },
    methods: {
        subtotal: function () {
            return this.price * this.quantity
        }
    }
}).mount("#count")

cm.$data.price="50"
cm.$data.quantity="23"