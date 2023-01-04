let hamburger = document.getElementById("hamburger")
let sideBar = document.getElementById("navbar")
let links = document.querySelectorAll(".nav-link")

function hamburgerClick() {
    sideBar.classList.toggle("open")
    if (hamburger.innerText == "menu") {
        hamburger.innerText = "close";
    } 
    else {
        hamburger.innerText = "menu";
    }
}

hamburger.onclick = () => { 
    hamburgerClick()
}

links.forEach(element => {
    element.addEventListener('click', event => {
        hamburgerClick()
    })
});
