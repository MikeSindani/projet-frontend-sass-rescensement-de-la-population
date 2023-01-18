/* debut de side bar menu hamberger */ 

const hamburger = document.querySelector(".hamburger")
const siderbar = document.querySelector(".sidebar")
const main = document.querySelector("main")

hamburger.addEventListener("click",()=>{
   siderbar.classList.toggle("close-sidebar-mobi")
   main.classList.toggle("close-main-mobi")
   siderbar.classList.toggle("close-sidebar")
   main.classList.toggle("close-main")
   hamburger.classList.toggle("is-active")
})
/*! code pour change le menu hamberger selon les tailles d'ecrans */ 
function myFunction(x) {
    if (x.matches) { // If media query matches
        hamburger.classList.remove("is-active")
    } else {
        hamburger.classList.add("is-active")
    }
  }
  
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes


const subBtn1 = document.querySelector(".sub-btn-1")
const subMenu1 = document.querySelector(".sub-menu-1")
const subBtn2 = document.querySelector(".sub-btn-2")
const subMenu2 = document.querySelector(".sub-menu-2")
const dropdown = document.querySelector(".dropdown")
subBtn1.addEventListener("click",()=>{
    subMenu1.classList.toggle("sub-menu-1")
    dropdown.classList.toggle("rotate")

})
subBtn2.addEventListener("click",()=>{
    subMenu2.classList.toggle("sub-menu-2")
    dropdown.classList.toggle("rotate")

})
/* fin de side bar menu hamberger */ 





