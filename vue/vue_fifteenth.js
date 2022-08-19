const { createApp, ref } = Vue

const am = Vue.createApp({
    data() {
        return {
            nice: "haha"
        }
    }
})
am.mount("#app1")



const bm = Vue.createApp({
})

bm.component("data-block",
    {
        template: `<div class="block">
    <div>Count:{{count}}</div>
    <button @click="count++">Plus</button>
    </div>`,
        data() {
            return { count: 0 }
        }
    })
bm.mount("#app2")
// ===============================
const cm = Vue.createApp({
    data() {
        return {
            message: "I'm ur papa"
        }
    }
})

cm.component("msg-block", {
    template: `<div>(From props)This is parent:{{parentMessage}}</div>
    <div>This is kid:{{message}}</div>
    `,
    props: ["parentMessage"],

    data() {
        return {
            message: "I m ur kid"
        }
    }
})

cm.mount("#app3")
// ===============================
const dm = Vue.createApp({
    data() {
        return {
            number: "123"
        }
    }
})
dm.component("num-block", {
    template: `<div>{{msg}}</div>`,
    props: {
        "props-number": {
            type: [String, Number],
            default: "Hello vue",
            required: true,

        }
    },
    data() {
        return { msg: "num props" }
    }
})
dm.mount("#app4")

