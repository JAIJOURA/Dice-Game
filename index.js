var randonNumber1 = Math.floor((Math.random()*6)+1);
if (randonNumber1 ===1){
  document.querySelector("img").setAttribute("src", "images\\dice1.png");
}else if (randonNumber1 === 2) {
  document.querySelector("img").setAttribute("src", "images\\dice2.png");
}else if (randonNumber1 === 3) {
    document.querySelector("img").setAttribute("src", "images\\dice3.png");
}else if (randonNumber1 === 4) {
    document.querySelector("img").setAttribute("src", "images\\dice4.png");
}else if (randonNumber1 === 5) {
    document.querySelector("img").setAttribute("src", "images\\dice5.png");
}else {
    document.querySelector("img").setAttribute("src", "images\\dice6.png");
}
var randonNumber2 = Math.floor((Math.random()*6)+1);
if (randonNumber2 ===1){
  document.firstElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild.setAttribute("src", "images\\dice1.png");
}else if (randonNumber2 === 2) {
  document.firstElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild.setAttribute("src", "images\\dice2.png");
}else if (randonNumber2 === 3) {
  document.firstElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild.setAttribute("src", "images\\dice3.png");
}else if (randonNumber2 === 4) {
  document.firstElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild.setAttribute("src", "images\\dice4.png");
}else if (randonNumber2 === 5) {
  document.firstElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild.setAttribute("src", "images\\dice5.png");
}else {
  document.firstElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild.setAttribute("src", "images\\dice6.png");
}
if (randonNumber1===randonNumber2){
  document.querySelector("h1").innerHTML="DRAW!";
}else if (randonNumber1>randonNumber2) {
  document.querySelector("h1").innerHTML="PLAYER 1 WINS!";
}else {
  document.querySelector("h1").innerHTML="PLAYER 2 WINS!";
}
