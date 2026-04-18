//adds listeners for mouse events
const kira = document.querySelector("#kira");
kira.addEventListener("mouseover", () => {
  kira.setAttribute("src", "assets/kira2.png");
});
kira.addEventListener("mouseout", () => {
  kira.setAttribute("src", "assets/kira.png");
});

const hol = document.querySelector("#hol");
hol.addEventListener("mouseover", () => {
  hol.setAttribute("src", "assets/chrholhorse2.png");
});
hol.addEventListener("mouseout", () => {
  hol.setAttribute("src", "assets/chrholhorse.png");
});

const fugo = document.querySelector("#fugo");
fugo.addEventListener("mouseover", () => {
  fugo.setAttribute("src", "assets/charfugo2.png");
});
fugo.addEventListener("mouseout", () => {
  fugo.setAttribute("src", "assets/charfugo.png");
});

var gameIndex = 0;
const gameSrcs = [
  "assets/gamep4.png",
  "assets/gameddlc.png",
  "assets/gameragingloop.png",
  "assets/gameshades.png",
  "assets/gamestanleyparable.png",
];
const click = document.querySelector("#click");
const img = click.querySelector("img");
click.addEventListener("click", () => {
  gameIndex += 1;
  if (gameIndex >= gameSrcs.length) {
    gameIndex = 0;
  }
  img.setAttribute("src", gameSrcs[gameIndex]);
});

/* const gameSrcs = [];
const games = document.querySelector("#games");

 */
