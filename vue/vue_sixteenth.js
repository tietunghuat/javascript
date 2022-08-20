const { createApp, ref } = Vue

const am = Vue.createApp({
    data() {
        return {
            books: [{ id: "1", name: "haha1", date: "1/12" },
            { id: "2", name: "haha2", date: "2/12" },
            { id: "3", name: "haha3", date: "3/12" }
            ]
        }
    }
})

am.component("my-block", {
    template: `<div class="go">
    <div>ID:<input type="text" v-model="aid"></div>
    <div>Name:<input type="text" v-model="aname"></div>
    <div>Date:<input type="text" v-model="adate"></div>
    </div>`
    ,
    props: ["id", "name", "date"]
    ,data(){
        return{
            aid:this.id,aname:this.name,adate:this.date
        }
    }
})

am.mount("#app1")

const bm = Vue.createApp({
    data() {
        return {
            name: "block"
        }
    },
    methods: {
        greet() {
            alert("Hello vue!props")
        }
    }
})
bm.component("new-component", {
    template: `<div class="nice"></div>`,
})
bm.mount("#app2")
