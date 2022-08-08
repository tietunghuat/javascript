const {createApp,ref}=Vue

const am=Vue.createApp({
  data(){}
})

am.component('my-component',{
  template:`<div><h1>Hello Vue world 3x!!!</h1></div>`
})

am.mount("#app1")

const bm=Vue.createApp({
  components:{
    "aa-component":{
      template:`<div><p>Welcome to 3!</p></div>`
    }
  }
})
bm.mount("#app2")