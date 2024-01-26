const article = document.getElementById("coolDiv");
const coolBTN = document.querySelector("#gang-BTN");
const coolMenu = document.getElementById("thaMenu");
const menuItems = document.querySelectorAll(".menuItem");
const enterBTN = document.getElementById("enter");
const safeBTN = document.getElementById("safety");
const ageInput = document.querySelector("#age");

enterBTN.onclick = function() {
    document.querySelector(".naughtyEnter").style.display = "none";
}

safeBTN.onclick = function() {
    window.open("https://www.youtube.com/watch?v=pxn0wL_uSm4", "_self");
}

enterBTN.addEventListener("click", function() {
    const age = ageInput.value;
    const isAgeOk = isOldEnough(age);
    if(isAgeOk) {
        document.querySelector(".naughtyEnter").style.display = "none";
    } else {
        alert("You are too young, bucko!")
    }
})

function isOldEnough(ageToCheck) {
    if(ageToCheck >= 18) {
        return true;
    }
    return false;
}



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
