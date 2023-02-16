// FUN FACT PAGE ------------

var cartmanImg = document.getElementById("cartman");
var kennyImg = document.getElementById("kenny");
var kyleImg = document.getElementById("kyle");
var stanImg = document.getElementById("stan")
var cardText = document.getElementById("card-text");
var chosenImg = document.getElementById("abc");

cartmanImg.addEventListener("click", () => {
cardText.textContent =
"Cartman is loosely based on a high school classmate of Trey Parker, one of South Park’s co-creators. The creators believe that children have no social etiquette or tact, and are generally awful, so Cartman was created as a version of the worst child they could imagine. Cartman was originally called Kenny, as seen in the South Park creators’ early animated shorts. All four of the main “boys” can be seen in the shorts, but when “Kenny” dies, it’s clearly the same character that later becomes Cartman!";
chosenImg.src ="../South-Park-Fan-Page/assets/pictures/cartman.png"
});

kennyImg.addEventListener("click", () => {
cardText.textContent =
"Text for Kenny";
chosenImg.src ="../South-Park-Fan-Page/assets/pictures/kenny.png"
});

kyleImg.addEventListener("click", () => {
cardText.textContent = 
"Text for Kyle";
chosenImg.src ="../South-Park-Fan-Page/assets/pictures/kyle.png"
});

stanImg.addEventListener("click", () =>{
cardText.textContent = 
"Text for Stan";
chosenImg.src ="../South-Park-Fan-Page/assets/pictures/stan.png"
});

// ------------------