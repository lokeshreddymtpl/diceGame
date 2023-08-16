var img = [
  "./images/dice1.png",
  "./images/dice2.png",
  "./images/dice3.png",
  "./images/dice4.png",
  "./images/dice5.png",
  "./images/dice6.png",
];
var pos1 = Math.floor(Math.random() * 6);
var pos2 = Math.floor(Math.random() * 6);

document.querySelectorAll("img")[0].setAttribute("src", img[pos1]);
document.querySelectorAll("img")[1].setAttribute("src", img[pos2]);

if (pos1 == pos2) {
  document.querySelector("h1").textContent = " ↺ Draw match ↻";
} else if (pos1 > pos2) {
  document.querySelector("h1").textContent = "🚩 player 1 wins";
} else {
  document.querySelector("h1").textContent = "player 2 wins 🚩";
}
