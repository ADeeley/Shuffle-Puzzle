import Tile from "./tile";

document
  .querySelector(".tiles")
  .insertAdjacentHTML(
    "afterbegin",
    '<div class="tiles__tile"></div>'.repeat(25)
  );

const tiles = [...document.querySelectorAll(".tiles__tile")].map(
  (tileElement) => new Tile(tileElement)
);

function shuffle() {
  tiles.forEach((tile) => {
    const newRotation = Math.floor(Math.random() * 4) * 90;
    tile.setRotation(newRotation);
  });
  hideVictoryNotice();
}

function positionTilesCorrectly() {
  const tileSize = 100;
  const puzzleSize = 500;
  let xOffset = 0;
  let yOffset = 0;

  tiles.forEach((tile) => {
    tile.tileElement.style.setProperty(
      "background-position",
      `-${xOffset}px -${yOffset}px`
    );
    xOffset += tileSize;
    if (xOffset >= puzzleSize) {
      xOffset = 0;
      yOffset += tileSize;
    }
  });
}

function newPuzzle() {
  location.reload();
}

function puzzleIsSolved() {
  return !Array.from(tiles).some((tile) => tile.getRotation() !== "0");
}

function displayVictoryNotice() {
  const victoryNotice = document.querySelector(".victory-notice");
  victoryNotice.style.setProperty("display", "block");
}

function hideVictoryNotice() {
  const victoryNotice = document.querySelector(".victory-notice");
  victoryNotice.style.setProperty("display", "none");
}

function rotationEvent(tile) {
  tile.rotateTile(event.target);
  if (puzzleIsSolved()) {
    displayVictoryNotice();
  }
}
function init() {
  const shuffleButton = document.querySelector("#controls__shuffle");
  const NewPuzzleButton = document.querySelector("#controls__new-puzzle");

  tiles.forEach((tile) =>
    tile.tileElement.addEventListener("click", (event) => rotationEvent(tile))
  );
  shuffleButton.addEventListener("click", shuffle);
  NewPuzzleButton.addEventListener("click", newPuzzle);

  positionTilesCorrectly();
  shuffle();
}

init();
