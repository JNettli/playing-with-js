import productsData from "./data/products.js";

const productsContainer = document.querySelector(".products-container");
const savedFavProducts = JSON.parse(window.localStorage.getItem("favorites"));
console.log("savedFavProducts: ", savedFavProducts)

for (let i = 0;  i < productsData.length; i++) {
    let cssClass = "";

    const existObject = savedFavProducts.find(function(favHeart){
        return parseInt(favHeart.id) === productsData[i].id
    });

    if(existObject) {
        cssClass = "active-heart";
    }

    console.log("existObject: ", existObject)

    productsContainer.innerHTML += `
    <div class="product">
        <img src="img/gnomechild.png" alt="Gnome Child">
        <h3>${productsData[i].name}</h3>
        <h4>${productsData[i].price}</h4>
        <span class="heart-container">
            <svg class="heart ${cssClass}"
                data-id="${productsData[i].id}";
                data-name="${productsData[i].name}";
                data-price="${productsData[i].price}";
                xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
        </span>
    </div>
    `;
}

const favHeart = document.querySelectorAll(".heart");

/*
for (let j = 0; j < favHeart.length; j++) {
    favHeart[j].addEventListener('click', function(){
        if(favHeart[j].classList.contains("active-heart")) {
            favHeart[j].classList.toggle("active-heart");
        } else {
            favHeart[j].classList.add("active-heart");
        }
    });
}
*/

let saveFav = [];

for (let x = 0; x < favHeart.length; x++) {
    favHeart[x].addEventListener("click", function() {
        this.classList.toggle("active-heart");

        let productSaved = {
            id: this.dataset.id,
            name: this.dataset.name,
            price: this.dataset.price
        }
        saveFav.push(productSaved);
        timeToSave(saveFav);
    });
}

function timeToSave(gang) {
    window.localStorage.setItem("favorites", JSON.stringify(gang));
}

const unsortedArray = [1, 2, 3, 51523, -12938192, 5312.12312, 22, 0, -1, -2, -3];


// Sorting numbers from lowest to highest
unsortedArray.sort(function(a, b){return a-b});


const minArrayItem = unsortedArray[0];
const maxArrayItem = unsortedArray[unsortedArray.length - 1];


let positiveEvenArray = [];
for(let k = 0; k < unsortedArray.length; k++) {
    if (unsortedArray[k] > 0) {
        if (unsortedArray[k] % 2 === 0){
            positiveEvenArray.push(unsortedArray[k]);
        }
    }
}