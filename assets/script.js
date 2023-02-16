// FUN FACT PAGE ------------


// Character Fun Fact Arrays vvvvvvvvvv

var cartmanInfo = 
["Cartman is loosely based on a high school classmate of Trey Parker, one of South Park’s co-creators.",
"The creators believe that children have no social etiquette or tact, and are generally awful, so Cartman was created as a version of the worst child they could imagine.",
"Cartman was originally called Kenny, as seen in the South Park creators’ early animated shorts.",
"All four of the main “boys” can be seen in the shorts, but when “Kenny” dies, it’s clearly the same character that later becomes Cartman!"]

var kennyInfo = 
["When considering the various seasons of the show, the film, video games, canon parodies, the original animated shorts, and the show’s intro (where he’s died nine times), Kenny has died 126 times in total as of 2020!",
"Kenny immortal since his parents dabbled in the Cult of Cthulu. Every time Kenny dies, he wakes up the next morning in his bed wearing his orange parka as if nothing happened.",
"Kenny is related to Stan's family through being named 'honorary nephew' by Jimbo in 'Volcano'.",
"Kenny has a pet cat who was shown in 'Major Boobage'. It was only mentioned briefly in 'Douche and Turd' by Cartman who thought that he had broken the cat's leg the week before was the reason that Kenny voted for the Giant Douche."]

var kyleInfo = 
["Kyle is the only one of the four boys to have never been absent for more than one episode in the same season or for two consecutive episodes.",
"Kyle has killed Jesus Christ and Kenny McCormick, as well as a United States soldier dressed up as a wizard alien.",
"And up until Season Five, Kyle had never removed his hat.",
"It is shown that Kyle could possibly be Stan's lawyer, seeing as he was sitting beside Stan after he was sued by Cartman in 'Sexual Harassment Panda'."]

var stanInfo = 
["Stan is the only one of the four boys not to have the 'Oh my god, They killed...' quote about him.",
"So far, Stan is the only one of the boys who hasn't shown any gender-swapping tendencies.",
"Cartman was shown dressed up as Britney Spears in 'AWESOM-O', Kyle had a female avatar in 'Make Love, Not Warcraft', and Kenny dressed like a princess in three of the last four episodes of Season Seventeen and South Park: The Stick of Truth.",
"Stan is the only one of the four who has never contracted a terminal illness, as both Kyle and Cartman contracted AIDS in 'Tonsil Trouble' and Kenny contracted muscular dystrophy in 'Kenny Dies'."]



var cartmanImg = document.getElementById("cartman");
var kennyImg = document.getElementById("kenny");
var kyleImg = document.getElementById("kyle");
var stanImg = document.getElementById("stan")
var cardText = document.getElementById("card-text");
var chosenImg = document.getElementById("abc");


// Randomly Selecting fun facts from the character arrays depending on which character is chosen vvvv

cartmanImg.addEventListener("click", () => {
cardText.textContent = cartmanInfo[Math.floor(Math.random() * (cartmanInfo.length))]

chosenImg.src ="../South-Park-Fan-Page/assets/pictures/cartman.png"
});

kennyImg.addEventListener("click", () => {
cardText.textContent = kennyInfo[Math.floor(Math.random() * (kennyInfo.length))]

chosenImg.src ="../South-Park-Fan-Page/assets/pictures/kenny.png"
});

kyleImg.addEventListener("click", () => {
cardText.textContent = kyleInfo[Math.floor(Math.random() * (kyleInfo.length))]

chosenImg.src ="../South-Park-Fan-Page/assets/pictures/kyle.png"
});

stanImg.addEventListener("click", () =>{
cardText.textContent = stanInfo[Math.floor(Math.random() * (stanInfo.length))]

chosenImg.src ="../South-Park-Fan-Page/assets/pictures/stan.png"
});

// ------------------