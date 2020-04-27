import Tiles from "./tiles";
import GameUtils from "./utils";

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
    const victoryNoticeElement: HTMLElement = document.querySelector(
      ".victory-notice"
    );
    const tiles: Tiles = new Tiles(new GameUtils(victoryNoticeElement));

  shuffleButton.addEventListener("click", () => {
    tiles.shuffle();
  });
  NewPuzzleButton.addEventListener("click", newPuzzle);
}

init();
