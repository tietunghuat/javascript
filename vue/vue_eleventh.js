const{createApp,ref}=Vue

// const am=Vue.createApp({
//     data(){
//         return{
//             isshow:true
//         }
//     }
// }).mount("#app1")


// const bm=Vue.createApp({
//     data(){
//         return{
//             count:0,
//             st:"background-color:red;color:white;border:1px solid black;width:150px;height:100px auto;"
//         }
//     }
// }).mount("#app2")

const cm=Vue.createApp({
    data(){
        return{
            tick:"picka"
        }
    }
}).mount("#app3")

const dm=Vue.createApp({
    data(){
        return{
             login:"username"
        }
    }
}).mount("#app4")