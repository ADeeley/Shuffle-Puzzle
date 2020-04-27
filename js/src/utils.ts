import Tile from "./tile";

export default class GameUtils {
  constructor(private victoryNotice: HTMLElement) {}

  public hideVictoryNotice(): void {
    this.victoryNotice.style.setProperty("display", "none");
  }

  public displayVictoryNotice(): void {
    this.victoryNotice.style.setProperty("display", "block");
  }

  public puzzleIsSolved(tiles: Array<Tile>): boolean {
    return !Array.from(tiles).some((tile) => tile.getRotation() !== "0");
  }
}
