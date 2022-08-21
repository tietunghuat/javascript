const{createApp,ref}=Vue

const dm = Vue.createApp({
    data() {
        return {
            message: "Hello Vue!"
        };
    }
});


dm.component("custom-input", {
    props: ["modelValue"],
    emit:["modelValue"],
    template: `<input type="text" :value="modelValue"
		@input="$emit('update:modelValue', $event.target.value)"
	>`
});


dm.mount("#app1");

const a = Vue.createApp({
    data() {
        return {
            msg: 'Hello App!'
        }
    },
    provide() {
        // 將 this.msg 透過 provide 傳遞出去
        return {
            provideMsg: this.msg,
            provideMsg2: Vue.computed(() => this.msg)
        };
    }
});

a.component('list-component', {
    template: `
  	<ul>
    	<li v-for="i in 3">
      	{{ i }}
     		<list-item />
			</li>
    </ul>`,
    components: {
        'list-item': {
            // 在子、孫元件中，加上 inject 屬性即可取得 provideMsg
            inject: ['provideMsg', 'provideMsg2'],
            template: `
      	<div>provideMsg: {{ provideMsg }}!</div>
      	<div>provideMsg2: {{ provideMsg2.value }}!</div>
			`
        }
    }
});
a.mount('#app');




const bus = mitt();
const app = Vue.createApp({
    data() {
        return {
            sum: 0
        }
    },
    methods: {
        plus() {
            this.sum++;
        },
        reset() {
            this.sum = 0;
        }
    },
    created() {
        // 實體建立時，在 bus 身上註冊 reset 事件
        // 觸發事件時呼叫 reset 方法
        bus.on('reset', this.reset);
    }
});

app.component('button-counter', {
    template: `<button @click="plus">You clicked me {{ count }} times.</button>`,
    data() {
        return {
            count: 0
        };
    },
    methods: {
        plus() {
            this.count++;
            this.$emit('add-sum');
        },
        reset() {
            this.count = 0;
        },
    },
    created() {
        bus.on('reset', this.reset);
    }
});
app.component('button-reset', {
    template: `<button @click="reset">reset</button>`,
    methods: {
        reset() {
            bus.emit('reset');
        },
    },
});

app.mount("#app3")