// FUN FACT PAGE ------------

var cartmanImg = document.getElementById("cartman");
var kennyImg = document.getElementById("kenny");
var kyleImg = document.getElementById("kyle");
var stanImg = document.getElementById("stan")
var cardText = document.getElementById("card-text");
var chosenImg = document.getElementById("abc");

cartmanImg.addEventListener("click", () => {
cardText.textContent = "Text for Cartman";
chosenImg.src ="../South-Park-Fan-Page/assets/pictures/cartman.png"
});

kennyImg.addEventListener("click", () => {
cardText.textContent = "Text for Kenny";
chosenImg.src ="../South-Park-Fan-Page/assets/pictures/kenny.png"
});

kyleImg.addEventListener("click", () => {
cardText.textContent = "Text for Kyle";
chosenImg.src ="../South-Park-Fan-Page/assets/pictures/kyle.png"
});

stanImg.addEventListener("click", () =>{
cardText.textContent = "Text for Stan";
chosenImg.src ="../South-Park-Fan-Page/assets/pictures/stan.png"
});

// ------------------