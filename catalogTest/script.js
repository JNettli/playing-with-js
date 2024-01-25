const dropdown = document.querySelector("#circles");
const circlesContainer = document.querySelector(".circle-container");

dropdown.onchange = function() {
    circlesContainer.innerHTML = "";
    for (let i = 1; i <= this.value; i++) {
        circlesContainer.innerHTML += `<span class="ball"></span>`
    }
}