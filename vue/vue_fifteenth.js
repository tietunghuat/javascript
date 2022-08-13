const {createApp,ref}=Vue

const am=Vue.createApp({
    data(){
        return{
            nice:"haha"
        }
    }
})
am.mount("#app1")



const bm=Vue.createApp({
})

bm.component("data-block",
{
    template:`<div class="block">
    <div>Count:{{count}}</div>
    <button @click="count++">Plus</button>
    </div>`,
    data(){
        return {count:0}
    }
})
bm.mount("#app2")