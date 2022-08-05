const{createApp,ref}=Vue

const am=Vue.createApp({
    data(){
        return{
            text:"",
            items:["Vue","is","fantastic"]
            
        }
    },
    methods:{
        changeval(){
            this.items[0]=this.text
            alert(this.items)
            console.log(this.items)
            }
    }
}).mount("#app1")

const bm=Vue.createApp({
    data(){
        return{
            message:"this is vue!"
        }
    },
    created(){
        console.log("created")
    },
    mounted(){
        console.log("mounted")
    },
    unmounted(){
        console.log("unmouted")
    }
});
bm.mount("#app2")
bm.unmount("#app2")

const cm=Vue.createApp({
    data(){
        return{
            call:"ha one"
        }
    },
    watch:{
        msg(val,oldValue){
            console.log(`新的msg: ${val}`);
            console.log(`old msg: ${oldValue}`)
        }
    }
    
}).mount("#app3")

const dm=Vue.createApp({
    data(){
        return{
            column: "border:solid black 3px;width:150px;height:150px",
            message:[],
            scrollHeight: 0,
            realScrollHeight: 0,

        }
    },
    methods:{
        addmsg(){
            this.message.push(this.add)
            this.add=""

            const el = document.querySelector('.messages');
            this.scrollHeight = el.scrollHeight;
            el.scrollTop = el.scrollHeight;

            this.$nextTick(() => {
                this.realScrollHeight = el.scrollHeight;
            });
        }
    },
    mounted() {
        const el = document.querySelector('.messages');
        this.realScrollHeight = el.scrollHeight;
        this.scrollHeight = el.scrollHeight;
    }

});
dm.mount("#app4")