const {createApp,ref}= Vue

const vm=Vue.createApp({
    data(){
        return{
            count:0
        }
    },
    methods:{
        plus(){
            return this.count++
        }
    }
}).mount("#app1")