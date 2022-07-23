const{createApp,ref}=Vue  

const vm=Vue.createApp({
    data(){
        return{
            twd:0.278
        }
    },
    computed:{
        jpy:{  
            get(){  
                return (this.twd/0.278)

            },
            set(value){
                this.twd = (value * 0.278)

            }
        },
        usdt:{
            get(){
                return (this.twd * 0.034)
            }
            ,
            set(value)
            {
                this.twd=value/0.034
            }

        }

    }
}).mount("#coin")

const am=Vue.createApp({
    data(){
        return{
            customId:"item-id-1"
            
        }
    }
}).mount("#app1")

const bm = Vue.createApp({
    data() {
        return {

            isBtnDisable: true,
            pic:"2.png",
            ww:"width:150px;height"
        }
    }
}).mount("#app2")


const cm = Vue.createApp({
    data() {
        return {
            message:"Hello",
            text:"Everything's good??"
        }
    }
}).mount("#app3")