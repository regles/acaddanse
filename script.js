var menuP = document.querySelector(".menu")
var nav = document.querySelector(".nav-links")
var nav1 = document.querySelector("body")


function nave(){
    nav.classList.toggle('click')
    nav.classList.toggle('Nslide')
}

menuP.addEventListener("click",nave)