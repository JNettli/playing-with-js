const API_URL = "https://catfact.ninja/facts";
const sikeBTN = document.querySelector("#basicBtn");
const goBack = document.querySelector("#sheesh");
const cats = document.querySelector("#cats");
const catFact = document.querySelector("#catFactBox");

cats.onclick = function() {
    fetch(API_URL, {method: 'GET'}).then((response) => response.json())
                                   .then((catData) => {
                                        for(let i = 0; i < catData.data.length; i++){
                                            catFact.innerHTML += `<div><span>${catData.data[i].fact}</span></div>`;
                                        }
                                    console.log(catData);
    });
}

sikeBTN.onclick = function() {
    document.getElementById("sike").style.display = "flex";
}

goBack.onclick = function() {
    document.getElementById("sike").style.display = "none";
}

const showPetName = (name) => {
    console.log("The pet name is: ", name);
}

const addTwoNums = (num1, num2) => {
    console.log(num1 + num2);
}

addTwoNums(69, 420);

showPetName("Bambi");

