export default class GameUtils {
	private victoryNotice: HTMLElement;

  constructor() {
    this.victoryNotice = document.querySelector(".victory-notice");
  }

  hideVictoryNotice() {
    this.victoryNotice.style.setProperty("display", "none");
  }

  displayVictoryNotice() {
    this.victoryNotice.style.setProperty("display", "block");
  }

  puzzleIsSolved(tiles) {
    return !Array.from(tiles).some((tile) => tile.getRotation() !== "0");
  }
}
