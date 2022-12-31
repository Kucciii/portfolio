var openBtn = document.querySelector("#navbar-open")
var closeBtn = document.querySelector("#navbar-close")
var sideBar = document.querySelector(".navbar")

if(screen.width <= 768) {
    openBtn.style.display = "initial";
    closeBtn.style.display = "initial"
    sideBar.style.top = "-100vh"
    sideBar.style.width = "100vw"
}

openBtn.onclick = () => {
    sideBar.style.top = "0"
}

closeBtn.onclick = () => {
    sideBar.style.top = "-100vh"
}