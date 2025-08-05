var a=document.querySelector("h1")
a.innerHTML="Learning"
a.style.color="yellow"
console.log(a)

var b=document.querySelector(".btn")
b.style.backgroundColor="red"
b.addEventListener("click",function(){
    a.innerHTML="clicked"
})



