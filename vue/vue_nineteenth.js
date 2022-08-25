const {createApp,ref}=Vue

const am=Vue.createApp({
    data(){
        return{
            current: 'Home',
            tabs:["Home","Tab","Ctrl"],
            msgs:[],
            ss:"border:1px solid black;font-size:15px;width:200px;height:auto"
        }
    },
    computed:{
        currentComponent(){
            return(`tab-${this.current.toLowerCase()}`)
        }
    },
    methods:{
        addmessage(val){
            this.msgs.push(val)
        }
    }
})
am.component("tab-home",{
    name:"tab-home",
    template:`<div><input type="text" v-model="title"></div>`,
    data(){
        return{title:"Home component"}
    },
    created(){
        this.$emit("update",`${this.$options.name} Created.`)
    },
    mounted() {
        this.$emit("update", `${this.$options.name} mounted.`)
    },
    unmounted() {
        this.$emit("update", `${this.$options.name} unmouted.`)
    },
    activated(){
        this.$emit("update",`${this.$options.name} Activated`)
    },
    deactivated() {
        this.$emit("update", `${this.$options.name} DeActivated`)
    },
})
am.component("tab-tab", {
    name: "tab-tab",
    template: `<div><input type="text" v-model="title"></div>`,
    data() {
        return { title: "Tab component" }
    },
    created() {
        this.$emit("update", `${this.$options.name} Created.`)
    },
    mounted() {
        this.$emit("update", `${this.$options.name} mounted.`)
    },
    unmounted() {
        this.$emit("update", `${this.$options.name} unmouted.`)
    },
    activated() {
        this.$emit("update", `${this.$options.name} Activated`)
    },
    deactivated() {
        this.$emit("update", `${this.$options.name} DeActivated`)
    },
})
am.component("tab-ctrl", {
    name: "tab-ctrl",
    template: `<div><input type="text" v-model="title"></div>`,
    data() {
        return { title: "Ctrl component" }
    },
    created() {
        this.$emit("update", `${this.$options.name} Created.`)
    },
    mounted() {
        this.$emit("update", `${this.$options.name} mounted.`)
    },
    unmounted() {
        this.$emit("update", `${this.$options.name} unmouted.`)
    },
    activated() {
        this.$emit("update", `${this.$options.name} Activated`)
    },
    deactivated() {
        this.$emit("update", `${this.$options.name} DeActivated`)
    },
})
am.mount("#app")