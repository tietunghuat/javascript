
// function add(num1,num2){
//     parseInt(num1,num2)
//     document.write(num1+num2)
// }
// add(1,2)

// function add(num1, num2) {
//     parseInt(num1,num2)
//     return num1;
// }
// document.write(add(3,5));

// var person={
//     name:"king",
//     age:23,
//     is_male:true,
//     print_name:function(){
//         document.write(this.name);
//     }
// };
// document.write(person.age)
// person.print_name()

// var movie={
//     name:"Fast and furios",
//     age:5,
//     actor:[{name:"bold head",
//             age:55,
//             car:"black"
//             },
//         {
//             name:"girl",
//             sex:"female"
//         }]

// }
// document.write(movie.actor[0].name)
// var i =1
// while(i<=5)
// {
//     document.write("i is :"+i)
//     document.write("<br/>")
//     i++
// }

// var password=123456
// var input;
// var entry=0
// var limit=3
// var out_of_limit=false;

// while(input!=password && out_of_limit!=true){
//     entry++
//     if(entry<=limit){
//         input = prompt("Please insert your password")
//     }
//     else
//     {
//         out_of_limit=true
//     }
// }
// if(out_of_limit)
// {
//     alert("out ot limit")
// }
// else
// {
//     alert("Login successfully")
// }

// var friends =["小黑","小白","小哭"]
// for(q=0;q<friends.length;q++){
//     document.write(friends[q]);
//     document.write("<br/>")
// }

// var friends=[
//     {
//         prompt:"who is my best friends?(a)jeremy(b)noob(c)sohai",
//         ans:"a"
//     }, {
//         prompt: "who is my idol?(a)jeremy(b)king james(c)sohai",
//         ans: "b"
//     },
//     {
//         prompt: "who is my fav car?(a)jeremy(b)noob(c)g-class",
//         ans: "c"
//     }
// ]
// var score=0
// for(i=0;i<friends.length;i++)
// {
//     var input=prompt(friends[i].prompt)
//     if(input==friends[i].ans){
//         alert("your are right")
//         score++
//     }
//     else{
//         alert("u are wrong!")
//     }
// }
// alert("U gain "+score+" points! Gratz!!")

var number=[[1,2,3],[4,5,6],[7,8,9],[10,0,11]]
for(i=0;i<number.length;i++){
    for(j=0;j<number[i].length;j++)
    {
        document.write("the row of i("+i+") is num"+number[i][j])    
        document.write("<br/>")
        
    }
    document.write("<br/>")
}

// var d=0
// function add(num1,num2,num3)
// {
//     a=num1
//     b=num2
//     c=num3
//     d=a+b+c
//     return d
// }
// document.write(add(1,5,6))

// class Phone {
//     constructor(name, age, proof){
//         this.name = name;
//         this.age = age;
//         this.proof = proof;
//     }
//     phone_age = function () {
//         return (2021 - this.age)
//     }
// }
// var phone1= new Phone("apple",2019,true)
// var phone2 = new Phone("samsung", 2019, false)
// var phone3 = new Phone("sony", 2, true)
// document.write(phone3.phone_age())

// var h1=document.getElementById("header")
// h1.innerText="Laker Nation"
// h1.style.backgroundColor="purple"
// h1.style.color="yellow"

// function handle(element)
// {
//     // alert("叫你按就按啊？白癡")
//     element.innerText="沖三小 操你媽"
// }

// var btn=document.getElementById("btn")
// btn.addEventListener("click", function(){
//     this.innerText="你他嗎有病？按三小"
// })

var btn=document.getElementById("btn")
btn.addEventListener("click",function(){
    btn.innerText="Suck my dick noob"
})

var img=document.getElementById("img")
img.addEventListener("mouseover",function(){
    this.src="2.png"
})
img.addEventListener("mouseout", function () {
    this.src = "1.png"
})