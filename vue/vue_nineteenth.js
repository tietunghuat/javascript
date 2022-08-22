const {createApp,ref}=Vue

const am=Vue.createApp({
    data(){
        return{
            current: 'Home',
            tabs:["Home","Tab","Ctrl"]
        }
    },
    computed:{
        currentComponent(){
            return(`tab-${this.current.toLowerCase()}`)
            
              
            
        }
    }
})
am.component("tab-home",{
    name:"tab-home",
    template:`<div><input type="text" v-model="title"></div>`,
    data(){
        return{title:"Home component"}
    }
})
am.component("tab-tab", {
    name: "tab-tab",
    template: `<div><input type="text" v-model="title"></div>`,
    data() {
        return { title: "Tab component" }
    }
})
am.component("tab-ctrl", {
    name: "tab-ctrl",
    template: `<div><input type="text" v-model="title"></div>`,
    data() {
        return { title: "Ctrl component" }
    }
})
am.mount("#app")