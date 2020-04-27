import Tiles from "./tiles";

let tiles;
document
  .querySelector(".tiles")
  .insertAdjacentHTML(
    "afterbegin",
    '<div class="tiles__tile"></div>'.repeat(25)
  );

function newPuzzle() {
  location.reload();
}

function init() {
  const shuffleButton = document.querySelector("#controls__shuffle");
  const NewPuzzleButton = document.querySelector("#controls__new-puzzle");
  const tiles = new Tiles();
  shuffleButton.addEventListener("click", () => {
    tiles.shuffle();
  });
  NewPuzzleButton.addEventListener("click", newPuzzle);
}

init();
