import Tile from "./tile";
import GameUtils from "./utils";

export default class Tiles {
  private tiles: Array<Tile>;

  constructor(private gameUtils: GameUtils) {
    this.tiles = [...document.querySelectorAll(".tiles__tile")].map(
      (tileElement: HTMLElement) => new Tile(tileElement)
    );
    this.tiles.forEach((tile) =>
      tile.tileElement.addEventListener("click", () => this.rotationEvent(tile))
    );
    this.positionTiles();
    this.shuffle();
  }

  public shuffle(): void {
    this.tiles.forEach((tile: Tile) => {
      const newRotation: number = Math.floor(Math.random() * 4) * 90;
      tile.setRotation(newRotation);
    });
    this.gameUtils.hideVictoryNotice();
  }

  private rotationEvent(tile): void {
    tile.rotateTile(event.target);
    if (this.gameUtils.puzzleIsSolved(this.tiles)) {
      this.gameUtils.displayVictoryNotice();
    }
  }

  private positionTiles(): void {
    const tileSize: number = 100;
    const puzzleSize: number = 500;
    let xOffset: number = 0;
    let yOffset: number = 0;

    this.tiles.forEach((tile: Tile) => {
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
}
