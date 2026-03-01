//adds listeners for mouse events
const kira = document.querySelector("#kira");
kira.addEventListener("mouseover", () => {
  kira.setAttribute("src", "assets/kira2.png");
});
kira.addEventListener("mouseout", () => {
  kira.setAttribute("src", "assets/kira.png");
});

/* const gameSrcs = [];
const games = document.querySelector("#games");
games.addEventListener("click", () => {
  games.setAttribute("src", "assets/aabel.gif");
});
 */
