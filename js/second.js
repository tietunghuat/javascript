var title=document.getElementById("title")
var content = document.getElementById("content")
var btn = document.getElementById("btn")
var article = document.getElementById("article")
btn.addEventListener("click",function(){
    article.innerHTML = article.innerHTML +` 
    <div id="list">
            <h2>${title.value}</h2>
            <p>${content.value}</p>
        </div>`
    title.value=""
    content.value = ""
    
})
