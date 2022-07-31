const {createApp,ref}= Vue

// const vm=Vue.createApp({
//     data(){
//         return{
//             count:0
//         }
//     },
//     methods:{
//         plus(){       
//             return this.count++
//         }
//     }
// }).mount("#app1")

const vm = Vue.createApp({
    data() {
        return {
            amount: 0,
            count: 0
            
            
        }
    },
    methods: {
        plus(amount, event) {
            console.log(event.target.tagName)
            this.count += amount
            
        }
    }
}).mount("#app1")

const cm = Vue.createApp({
    data() {
        return {
            amount: 0,
            count: 0,
            msg:[]


        }
    },
    methods: {
        alert(val) {
            this.msg.push(val);
        }
    }
}).mount("#app2")
