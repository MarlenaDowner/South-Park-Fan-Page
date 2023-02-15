# South-Park-Fan-Page
South-Park-Fan-Page


.gifImage {
  align-items: center;
}

.gifGridArea {
  border: 4px;
  background-size: 120%;
  background-repeat: round;
  image-rendering: unset;
  z-index: +2;
  cursor: pointer;
  border-radius: 100px;
}

#gifGrid {
  margin: 0px 5%;
  display: grid;
  background-color: #ffffff60;
  min-height: 500px;
  height: 70vh;
  grid-template-rows: 25% 25% 25% 25%;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-areas: 
  " gifArea gifArea gifArea cartmenArea"
  " gifArea gifArea gifArea kyleArea"
  " gifArea gifArea gifArea stanArea"
  "randomArea alienArea randyArea kennyArea";
}

img {
  width: 100%;
  height: 100%;
  position: absolute;
}

#gifArea {
  min-height: 100%;
  min-width: 100%;
  position: absolute;
  border: 2px;
  background-color: black;
  text-align: start;
  grid-area: gifArea;
  background-image: url("../images/GIF\ Background.webp");
  background-size: cover;
  background-repeat: no-repeat;
  z-index: +1;
}

#cartmanArea {
  grid-area: cartmenArea;
  background-image: url("../images/pngwing.com\ \(4\).png");
  
}

#kyleArea {
  grid-area: kyleArea;
  background-image: url("../images/pngwing.com\ \(3\).png");
}

#stanArea {
  grid-area: stanArea;
  background-image: url("../images/StanP.webp");
}

#kennyArea {
  grid-area: kennyArea;
  background-image: url("../images/kisspng-kenny-mccormick-stan-marsh-eric-cartman-kyle-brofl-the-simpsons-movie-5acd4ee617a2e4.3338368515234045180968.png");
}

#randyArea {
  grid-area: randyArea;
  background-image: url("../images/kisspng-randy-and-sharon-marsh-kyle-broflovski-stan-marsh-first-appearance-5b52cfe6e3d409.2266863115321538309332.png");
}

#alienArea {
  grid-area: alienArea;
  background-image: url("../images/pngwing.com\ \(1\).png");
}

#randomArea {
  grid-area: randomArea;
  background-image: url("../images/pngwing.com.png");
}

.button {
  grid-area: span;
}
.box {
  position: relative;
}
.basic {
  box-shadow: 10px 8px 10px 5px rgb(73, 219, 245);
}

.shadow:before {
  content:"";
  position: absolute;
  inset: -5px;
  transform: translate(10px,8px);
  z-index: -1;
  filter: blur(10px);
}
