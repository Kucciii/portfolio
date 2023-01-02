var openBtn = document.querySelector("#navbar-open")
var closeBtn = document.querySelector("#navbar-close")
var sideBar = document.querySelector(".navbar")

openBtn.onclick = () => {
    sideBar.style.top = "0"
}

closeBtn.onclick = () => {
    sideBar.style.top = "-100vh"
}