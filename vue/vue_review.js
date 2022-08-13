const{createApp,ref}=Vue
// const vm = Vue.createApp({
//     data() {
//         return {
//             text: 'Hello',
//             text1: "<h1>NIcee world!</h1>"

//         }
//     }
// }).mount("#app1")

const am=Vue.createApp({
    data(){
        return{
            count:0,
            amount:0
        }
    },
    methods:{
        plus(amount, event){
            console.log(event.target.tagName)
            return this.count+=amount
        }
    }
}).mount("#app2")

const om=Vue.createApp({
    data(){
        return{
            add:'',
            column:"border:solid black 3px;width:150px;height:150px",
            message: ["First","Second","Third"]
            
        }
    },
    methods:{
        addmessage(){
            return this.message.push(this.add),
            this.add=""
        }

    }
}).mount("#app3")

const pm=Vue.createApp({
    data(){
        return{
            list:[{id:"1",title:"choice1",isdone:false}
                , { id: "2", title: "choice2", isdone: false },
                { id: "3", title: "choice3", isdone: false }
    ]}
    },
    computed:{
        todolist(){
            return this.list.filter(d => d.isdone ==false)
        },
        donelist(){
            return this.list.filter(d => d.isdone ==true)
        }
    }
}).mount("#app4")
// const vm=Vue.createApp({
//     template:`<div><p>{{ name }} = price :{{ price }} * quantity: {{ quantity }}= {{subtotal()}}</p></div>`,
//     data(){
//         return {
//             name:"Jersey",price:"",quantity:""
//         }
//     },
//     methods:{
//         subtotal(){
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



 const im=Vue.createApp({
    data(){

    },
    components:{
        "nice-component":{
            template:`<div><h1>Template one~!</h1></div>`
        }
        
    }
 })

 im.mount("#app6")

 const um=Vue.createApp({
    data(){}
 })
um.component("seven-component",{
    template:`<div><h1>Template two!!~</h1></div>`
})
um.mount("#app7")