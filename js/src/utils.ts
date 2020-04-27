import Tile from "./tile";

export default class GameUtils {
  constructor(private victoryNotice: HTMLElement) {}

  hideVictoryNotice(): void {
    this.victoryNotice.style.setProperty("display", "none");
  }

  displayVictoryNotice(): void {
    this.victoryNotice.style.setProperty("display", "block");
  }

  puzzleIsSolved(tiles: Array<Tile>): boolean {
    return !Array.from(tiles).some((tile) => tile.getRotation() !== "0");
  }
}
