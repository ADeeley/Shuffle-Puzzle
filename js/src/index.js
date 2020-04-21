document
  .querySelector(".tiles")
  .insertAdjacentHTML("afterbegin", '<div class="tiles__tile"></div>'.repeat(25));
const tiles = document.querySelectorAll(".tiles__tile");

function setRotation(tile, rotation) {
  tile.style.setProperty("transform", `rotate(${rotation}deg)`);
}

function getRotation(tile) {
  return /\d+/.exec(tile.style.transform)[0];
}

function rotateTile(tile) {
  const currentRotation = getRotation(tile);
  let newRotation = currentRotation ? parseInt(currentRotation) + 90 : 90;
  if (newRotation >= 360) {
    newRotation = 0;
  }
  setRotation(tile, newRotation);
  if (puzzleIsSolved()) {
    displayVictoryNotice();
  }
}

function shuffle() {
  tiles.forEach((tile) => {
    const newRotation = Math.floor(Math.random() * 4) * 90;
    setRotation(tile, newRotation);
  });
  hideVictoryNotice();
}

function positionTilesCorrectly() {
  const tileSize = 100;
  const puzzleSize = 500;
  let xOffset = 0;
  let yOffset = 0;

  tiles.forEach((tile) => {
    tile.style.setProperty(
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
  return !Array.from(tiles).some((tile) => getRotation(tile) !== "0");
}

function displayVictoryNotice() {
  const victoryNotice = document.querySelector(".victory-notice");
  victoryNotice.style.setProperty("display", "block");
}

function hideVictoryNotice() {
  const victoryNotice = document.querySelector(".victory-notice");
  victoryNotice.style.setProperty("display", "none");
}

function init() {
  const shuffleButton = document.querySelector("#controls__shuffle");
  const NewPuzzleButton = document.querySelector("#controls__new-puzzle");

  tiles.forEach((tile) =>
    tile.addEventListener("click", (event) => rotateTile(event.target))
  );
  shuffleButton.addEventListener("click", shuffle);
  NewPuzzleButton.addEventListener("click", newPuzzle);

  positionTilesCorrectly();
  shuffle();
}

init();
