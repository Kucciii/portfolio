var hamburger = document.getElementById("hamburger")
var sideBar = document.getElementById("navbar")

hamburger.onclick = () => {
    sideBar.classList.toggle("open")
    if (hamburger.innerText == "menu") {
        hamburger.innerText = "close";
    } 
    else {
        hamburger.innerText = "menu";
    }
}