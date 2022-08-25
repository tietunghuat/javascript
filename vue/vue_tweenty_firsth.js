const{createApp,ref}=Vue
 
const a=Vue.createApp({
    data(){
        return {
            isShow:true
        }
    }
})
a.mount("#app")