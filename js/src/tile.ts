export default class Tile {
  constructor(public tileElement: HTMLElement) {}

  setRotation(rotation): void {
    this.tileElement.style.setProperty("transform", `rotate(${rotation}deg)`);
  }
  getRotation(): string {
    return /\d+/.exec(this.tileElement.style.transform)[0];
  }

  rotateTile(): void {
    const currentRotation: string = this.getRotation();
    let newRotation: number = currentRotation
      ? parseInt(currentRotation) + 90
      : 90;

    if (newRotation >= 360) {
      newRotation = 0;
	}

    this.setRotation(newRotation);
  }
}
