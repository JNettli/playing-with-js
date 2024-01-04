const header1 = document.querySelector("h1");
header1.innerHTML = "Welcome to JavaScript Class";
header1.style.color = "blue";
header1.style.fontSize = "50px";

function getRandomInt(min, max) {
    min = Math.ceil(0);
    max = Math.floor(100);
    return Math.floor(Math.random() * (max - min) + min);
}


function addListItem() {
    let ul = document.getElementById("list");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode("New Item "));
    li.append(getRandomInt());
    ul.appendChild(li);
}
