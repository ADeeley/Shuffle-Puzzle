export default class Tile {
  constructor(tileElement) {
    this.tileElement = tileElement;
  }

  setRotation(rotation) {
    this.tileElement.style.setProperty("transform", `rotate(${rotation}deg)`);
  }
	getRotation() {
    return /\d+/.exec(this.tileElement.style.transform)[0];
  }

//   tileElement() {
//     return this.tileElement;
//   }

  rotateTile() {
    const currentRotation = this.getRotation();
    let newRotation = currentRotation ? parseInt(currentRotation) + 90 : 90;
    if (newRotation >= 360) {
      newRotation = 0;
    }
    this.setRotation(newRotation);
    // if (puzzleIsSolved()) {
    //   displayVictoryNotice();
    // }
  }
}
