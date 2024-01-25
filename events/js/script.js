const inputBtn = document.querySelector(".btn");
const enterEvent = new KeyboardEvent('keydown', {
    key: 'Enter',
    code: 'Enter',
    which: 13,
    keyCode: 13,
});
const hoverBtn = document.querySelector(".pet-btn");
const handleMouseHover = function() {
    this.style.backgroundColor = "red";
}
const bgChanger = function() {
    this.style.backgroundColor = "white";
}

hoverBtn.addEventListener("mouseover", handleMouseHover);
hoverBtn.addEventListener("mouseout", bgChanger);

inputBtn.addEventListener("click", function() {
    console.log("wow u did it")
});

inputBtn.addEventListener("click", handleClick);
function handleClick() {
    console.log("ermagerd u r so good!")
}

inputBtn.onclick = function(event) {
    console.log(event.target.value);
    console.log(this.value);
}

const firstNameInput = document.querySelector("#firstName");
const handleKeyPress = function(){
    console.log(this.value);
}

