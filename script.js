const menu = document.getElementById('menu')
const navlist = document.getElementById('navList')
const li = document.querySelector('li')
const a = document.querySelector('a')
const x = document.getElementById('x')

menu.addEventListener("click", ()=>{
    navlist.style.transform = "translateX(0)";
    document.body.style.overflowX = "auto";
})

x.addEventListener("click", ()=>{
    navlist.style.transform = "translateX(100%)";
    document.body.style.overflowX = "hidden";
})

