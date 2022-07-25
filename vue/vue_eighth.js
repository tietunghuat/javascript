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


const dm=Vue.createApp({
    data(){
        return{
            picked:1
 
        }
    }
}).mount("#app4")

const em=Vue.createApp({
    data(){
        return{
            picked:[1,2,4]
        }
    }
}).mount("#app5")

const fm = Vue.createApp({
    data() {
        return {
            picked:true,
            picked2:false,
            picked3:true,
            picked4:true
        }
    }
}).mount("#app6")

const gm=Vue.createApp({
    data(){
        return{
            selected:""
        }
    }
}).mount("#app7")