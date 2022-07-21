const { createApp} = Vue

const cm=Vue.createApp({
    data() {
        return {
            price:50,
            quantity:25
            
        }
    }
})
cm.mount('#app')
