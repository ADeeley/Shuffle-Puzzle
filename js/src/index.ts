import Tiles from "./tiles";

document
  .querySelector(".tiles")
  .insertAdjacentHTML(
    "afterbegin",
    '<div class="tiles__tile"></div>'.repeat(25)
  );

/**
 * Reloads the page to generate a new puzzle
 */
function newPuzzle(): void {
  location.reload();
}

/**
 * Set up the puzzle's initial state
 */
function init(): void {
  const shuffleButton: HTMLElement = document.querySelector(
    "#controls__shuffle"
  );
  const NewPuzzleButton: HTMLElement = document.querySelector(
    "#controls__new-puzzle"
  );
  const tiles: Tiles = new Tiles();

  shuffleButton.addEventListener("click", () => {
    tiles.shuffle();
  });
  NewPuzzleButton.addEventListener("click", newPuzzle);
}

init();
