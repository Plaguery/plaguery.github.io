const kira = document.querySelector("#kira");
kira.addEventListener("mouseover", () => {
  kira.setAttribute("src", "assets/kira2.png");
});
kira.addEventListener("mouseout", () => {
  kira.setAttribute("src", "assets/kira.png");
});
console.log(kira);
