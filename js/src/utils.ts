import Tile from "./tile";

export default class GameUtils {
  constructor(private victoryNotice: HTMLElement) {}

  private _config: any = {
    tileSize: 100,
    puzzleSize: 500,
  };

  public get config(): any {
    return this._config;
  }

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
