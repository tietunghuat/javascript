const{createApp,ref} = Vue  

const vm=Vue.createApp({
    data(){
        return{
            
            arr:["nice","king","birdman","ice"]
        }
    }
}).mount("#app1")

const am=Vue.createApp({
    data(){
        return{
            add:{title:"nice",name:"hi",date:"2019/9"}
        }
    }
}).mount("#app2")

const bm=Vue.createApp({
    data(){
        return{
            numbers:[1,2,3,4,5,6,7,8]
        }
    },
    computed:{
        even(){
            return this.numbers.filter(number => number %2 === 0)
        }
    }
}).mount("#app3")

const cm=Vue.createApp({
    data(){
        return{
            list:[{
                id:"task1",
                title:"Choice 1",
                isdone:false
            },
            {
                id:"task2",
                title:"Choice 2",
                isdone:false
            },
            {
                id:"task3",
                title:"Choice 3",
                isdone:false
            }
        ]}
    },
    computed:{
        todolists(){
            return this.list.filter(d => d.isdone==false)
        },
        donelists() {
            return this.list.filter(d => d.isdone==true)
        }

    }
}).mount("#app4")
