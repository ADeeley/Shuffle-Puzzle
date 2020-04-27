import Tile from "./tile";
import GameUtils from "./utils";
export default class Tiles {
  constructor() {
    this.gameUtils = new GameUtils();
    this.tiles = [...document.querySelectorAll(".tiles__tile")].map(
      (tileElement) => new Tile(tileElement)
    );
    this.tiles.forEach((tile) =>
      tile.tileElement.addEventListener("click", (event) =>
        this.rotationEvent(tile)
      )
    );
    this.positionTiles();
    this.shuffle();
  }

  rotationEvent(tile) {
    tile.rotateTile(event.target);
    if (this.gameUtils.puzzleIsSolved(this.tiles)) {
      this.gameUtils.displayVictoryNotice();
    }
  }

  shuffle() {
    console.log(this);
    this.tiles.forEach((tile) => {
      const newRotation = Math.floor(Math.random() * 4) * 90;
      tile.setRotation(newRotation);
    });
    this.gameUtils.hideVictoryNotice();
  }

  positionTiles() {
    const tileSize = 100;
    const puzzleSize = 500;
    let xOffset = 0;
    let yOffset = 0;

    this.tiles.forEach((tile) => {
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
