const firstNameInput = document.querySelector("#inputterino");
const submitBtn = document.querySelector("#submit-BTN");
const keylog = document.getElementById("keylogger");
const passBtn = document.querySelector("#submit-pwrd-BTN");
const emojiGang = document.getElementById("emoji");


firstNameInput.onkeyup = function(event) {
    let userNameLength = event.target.value;
    if (userNameLength.length > 15){
        submitBtn.disabled = true;
        submitBtn.innerHTML = "Username too long!"
        submitBtn.style.backgroundColor = "red";
        submitBtn.style.color = "black";
    }
    else if (userNameLength.length >= 5){
        submitBtn.disabled = false;
        submitBtn.innerHTML = "Submit!";
        submitBtn.style.backgroundColor = "green";
    } else {
        submitBtn.disabled = true;
        submitBtn.innerHTML = "Username too short!";
    }
}


keylog.onkeyup = function(event) {
    console.log("event: ", event.target.value)
    let passwordLength = event.target.value;

    if (passwordLength.length > 50) {
        passBtn.disabled = true;
        passBtn.innerHTML = "You have a problem. Noone needs this big a password you geek";
        emojiGang.innerHTML = "☠☠🤬🤬🤬🤬🤬☠☠";
        passBtn.style.backgroundColor = "red";
        passBtn.style.color = "black";
    } else if (passwordLength.length >= 10){
        passBtn.disabled = false;
        passBtn.style.backgroundColor = "green";
        passBtn.innerHTML = "Submit!";
        emojiGang.innerHTML = "Good password you nerd! 🤓";
    } else {
        passBtn.disabled = true;
        passBtn.innerHTML = "Password too short";
        emojiGang.innerHTML = "🤨";
    }
}
