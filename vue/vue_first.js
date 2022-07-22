const { createApp, ref } = Vue

const vm=Vue.createApp({
    data() {
        const message=ref("Hello Vue!!!")
        const message2=ref("It's me!")
        const message3=ref("King James!")
        return {
            message,
            message2,
            message3, 
        }
    }
})
vm.mount('#first')

const am = Vue.createApp({
    data() {
        const price = ref(50)
        const quantity = ref(23)
        return {
            price,
            quantity
        }
    }
})

am.mount('#app')

const bm=Vue.createApp({
    data(){
        return{
            celi:""
        }
    }
}).mount("#cm")
bm.$data.celi="30cm"
//const vMountedInstance=bm.mount("#cm")
//vMountedInstance.$data.celi="30cm"
