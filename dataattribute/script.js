const article = document.getElementById("coolDiv");
const coolBTN = document.querySelector("#gang-BTN");
const coolMenu = document.getElementById("thaMenu");
const menuItems = document.querySelectorAll(".menuItem");

for(let i = 0; i < menuItems.length; i++) {
    menuItems[i].onmouseenter = function() {
        menuItems[i].children[0].style.display = "block";
    }
    menuItems[i].onmouseleave = function() {
        menuItems[i].children[0].style.display = "none";
    }
}

coolBTN.onclick = function() {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmljayByb2xs", "_self");
}
