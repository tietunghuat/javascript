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


import vue_export from './vue_export.js'
const cm=Vue.createApp({
  data(){

  },
    components:{
      vue_export
    }
})
cm.mount("#app3");


  
const dm=Vue.createApp({
  data(){ 
  }
});

dm.component("media-block",{
  template:'#media-block'
});

  <script type = "text/x-template" id = "media-block" >
    <div>
      <div>
        <h1>King James!</h1>
      </div>
      <div>
        <p> The goat!</p>
      </div>
      <div>
        <p>First pick,cavs,heat,cavs,lakers!</p>
      </div>
    </div>
</script >
dm.mount("#app4")
