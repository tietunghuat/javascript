const{createApp,ref}=Vue
const vm = Vue.createApp({
    data() {
        return {
            text: 'Hello',
            text1: "<h1>NIcee world!</h1>"

        }
    }
}).mount("#app1")
// const vm=Vue.createApp({
//     template:`<div><p>{{ name }} = price :{{ price }} * quantity: {{ quantity }}= {{subtotal()}}</p></div>`,
//     data(){
//         return {
//             name:"Jersey",price:"",quantity:""
//         }
//     },
//     methods:{
//         subtotal: function (){
//             return this.price * this.quantity
//         }
//     }
// }).mount("#temp")

// vm.$data.price=79
// vm.$data.quantity=23
// const am=Vue.createApp({
//     data(){
//         return{
//             twd:0.278
//             ,
//             customerid:"item-id"
//         }
//     },
//     computed:{
//         jpy:{
//             get(){
//                 return (this.twd/0.278).toFixed(3)
//             },
//             set(value){
//                 this.twd=(value*0.278).toFixed(3)
//             }
//         }
//     }
// }).mount("#app1")


// const bm=Vue.createApp({
//     data()
//     {
//         return{
//             picked:1
//         }
//     }
// }).mount("#app2")

// const cm = Vue.createApp({
//     data() {
//         return {
//             picked: [1]
//         }
//     }
// }).mount("#app3")

// const dm = Vue.createApp({
//     data() {
//         return {
//             selected:""
//         }
//     }
// }).mount("#app4")

//7/27



