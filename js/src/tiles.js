import Tile from "./tile";
export default class Tiles {
  constructor() {
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
    if (this.puzzleIsSolved()) {
      this.displayVictoryNotice();
    }
  }

  shuffle() {
    console.log(this);
    this.tiles.forEach((tile) => {
      const newRotation = Math.floor(Math.random() * 4) * 90;
      tile.setRotation(newRotation);
    });
    this.hideVictoryNotice();
  }

  hideVictoryNotice() {
    const victoryNotice = document.querySelector(".victory-notice");
    victoryNotice.style.setProperty("display", "none");
  }
  displayVictoryNotice() {
    const victoryNotice = document.querySelector(".victory-notice");
    victoryNotice.style.setProperty("display", "block");
  }
  puzzleIsSolved() {
    return !Array.from(this.tiles).some((tile) => tile.getRotation() !== "0");
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
