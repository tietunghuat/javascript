const{createApp,ref}=Vue

const vm=Vue.createApp({
    data(){
        return{
            num1:"",
            num2:""
        }
    },
    computed:{
        sum(){
            return (this.num1 + this.num2)
        }
    }
}).mount("#app1")

const am=Vue.createApp({
    data(){
        return{
            text:"<h1>Helloooo</h1>",
            message:"Goddammn",
        }
    }
}).mount("#app2")

const cm=createApp({
    data()
    {
        return {content:""}
    },
    computed:{
        isvalid(){
            return this.content.length<=5
        },
        msgstyle(){
            return{
                'color':this.isvalid?"":"red",
                'border': this.isvalid ? "" :"red solid 5px" 
            }
        }

    }
}).mount("#app3")