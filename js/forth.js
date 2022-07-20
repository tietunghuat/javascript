// // // // function nice(payment)
// // // // {
// // // //     var payment;
// // // //     switch(payment)
// // // //     {
// // // //         case "pc":
// // // //             document.write("nice pc")
// // // //         break;
// // // //         case "tablet":
// // // //             document.write("nice tablet")
// // // //         break;
// // // //         default:
// // // //             document.write("nothings here")
        
// // // //     }
// // // // }
// // // // nice("tablet")

// // // var a=0
// // // for(i=1;i<=5;i++)
// // // {
// // //     a+=i
// // //     document.write(i)
// // //     document.write("</br>")
// // // }
// // // document.write(a)

// // var prop;
// // var abc=new Object()
// // abc.name="king" 
// // abc.age=12
// // abc.phone="0908467037"
// // for(prop in abc)
// // {
// //     document.write("property: "+ prop + " : "+abc[prop]+"</br>")
// // }
// var a=0
// var b=1;
// while(b<=5)
// {
//     b++
//     a+=b
//     document.write(b+"\t")
// }
// document.write( "total is:"+a)
// var a=0
// var b=3
// var target=50
// var c;
// for(b=0;b<=3;b++)
// {
// c=window.prompt("Type something plz")
// if(c==null)
// {
//     window.alert("please type number!")
// }
// if (c == target) {
//     window.alert("gratz, u are right!")
//     break;
// }
// else if(c<=target)
// {
//     window.alert("the num is too small")
// }
// else if(c>=target)
// {
    
//     window.alert("the num is too big")
// }

// else{
//     window.alert("plz type something")
// }
// if(b==true)
// {
//     window.alert("you have no more chance!")
//     break;
// }
// }
var i,j;
document.write("<table border=1>")
document.write("<tr>")
for (i = 1; i <= 9; i++) {
    for(a=0;a<=9;a++)
    {
    document.write("<td>"+a+"</td>")
    }
   
    document.write("<tr>")

    for (i = 1; i <= 9; i++) {
        document.write("<tr>")
        document.write("<td>" + i + "</td>")
        j = 1
        while (j <= 9){
            document.write("<td>")
            document.write(i + "*" + j + "=" + i * j)
            document.write("</td>")
            j++}
        document.write("</tr>")
        
    }
    document.write("</tr>")
    

}
document.write("</tr>")
document.write("</table>")