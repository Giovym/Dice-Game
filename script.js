const h1 = document.querySelector("h1");

document.querySelector(".btn").addEventListener("click", function () {
  let img1 = Math.floor(Math.random() * 6) + 1;

  let img2 = Math.floor(Math.random() * 6) + 1;

  document
    .getElementById("img-1")
    .setAttribute("src", `images/dice-${img1}.png`);

  document
    .getElementById("img-2")
    .setAttribute("src", `images/dice-${img2}.png`);

  if (img1 > img2) {
    h1.textContent = "PLAYER 1 WINS";
  } else if (img1 < img2) {
    h1.textContent = "PLAYER 2 WINS";
  } else {
    h1.textContent = "DRAW";
  }
});
