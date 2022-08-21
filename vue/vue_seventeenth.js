const { createApp, ref } = Vue


const menuData = {
    name: '好書推薦',
    childNodes: [{
        name: 'Git',
        url: null,
        childNodes: [{
            name: '為你自己學 Git',
            url: 'https://www.tenlong.com.tw/products/9789864342662'
        }]
    },
    {
        name: '前端開發',
        url: null,
        childNodes: [{
            name: '金魚都能懂的 CSS 選取器',
            url: 'https://www.tenlong.com.tw/products/9789864344994'
        },
        {
            name: '0 陷阱！0 誤解！8 天重新認識 JavaScript！',
            url: 'https://www.tenlong.com.tw/products/9789864344130'
        },
        {
            name: '讓 TypeScript 成為你全端開發的 ACE！',
            url: 'https://www.tenlong.com.tw/products/9789864344895'
        },
        ]
    },
    {
        name: 'IoT',
        url: null,
        childNodes: [{
            name: 'IoT沒那麼難！新手用 JavaScript 入門做自己的玩具！',
            url: 'https://www.tenlong.com.tw/products/9789864345328'
        }]
    },
    {
        name: 'Chatbot',
        url: null,
        childNodes: [{
            name: '人人可作卡米狗：從零打造自己的 LINE 聊天機器人',
            url: 'https://www.tenlong.com.tw/products/9789864342938'
        }]
    }
    ]
};

const app = Vue.createApp({
    data() {
        return {
            menuData
        }
    }
});

app.component('menu-component', {
    props: {
        title: String,
        url: String,
        child: {
            default: []
        }
    },
    data() {
        return {
            isOpen: false
        }
    },
    template: `
    <ul>
      <li>
        <template v-if="child.length > 0">
          <h2 class="has-child"
            :class="{ 'is-open': isOpen }"
            @click="isOpen = !isOpen">{{ title }}</h2>
          <menu-component 
            v-show="isOpen"
            v-for="c in child"
            :title="c.name"
            :child="c.childNodes"
            :url="c.url"
            />
        </template>
        <a :href="url" target="_blank" v-else>{{ title }}</a>
      </li>
    </ul>`
});

app.mount('#app');


const bm = Vue.createApp({
    data() {
        return {
            books: [{ id: 1, name: "james", date: "12/26" },
            { id: 2, name: "king", date: "12/27" },
            { id: 3, name: "davis", date: "12/28" }]
        }
    },
    methods: {
        updatedInfo(aa) {
            const idx = this.books.findIndex(d => d.id === aa.id)
            this.books[idx] = aa
        }
    }
})

bm.mount("#app1")

const cm = Vue.createApp({
    data() {
        return {
            msg: "hello world!!!", books: [{ id: 1, name: "james", date: "12/26" },
            { id: 2, name: "king", date: "12/27" },
            { id: 3, name: "davis", date: "12/28" }],
            size:5
        }
    }
})
cm.component("app-component", {
    props: ["name"],
    emit:["enlarge-text"],
    template: `<div><ul><li><h1>{{name}}</h1></li></ul>
    <button @click=$emit("enlarge-text)>Bigger</button>
    </div>`
})

cm.mount("#app2")


