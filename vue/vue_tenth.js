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

const em=Vue.createApp({
    data(){
        return{
            presskey:""
        }
    },
    methods:{
        press(event)
        {
        
                this.presskey = event.key;
              
            }
        }
    
}).mount("#app3")

const fm=Vue.createApp({
    data(){
        return{
            msg:"",
            message:[],
            dd: "border: 2px solid black;width: 200px;height: 150px ; "
        }
    },
    methods:{
        addtomessage(){
            this.message.push(this.msg)
            this.msg=""
        }

    }
}).mount("#app4")
