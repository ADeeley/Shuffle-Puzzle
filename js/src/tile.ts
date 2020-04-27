export default class Tile {
  constructor(public tileElement: HTMLElement) {}

  public setRotation(rotation): void {
    this.tileElement.style.setProperty("transform", `rotate(${rotation}deg)`);
  }

  public getRotation(): string {
    return /\d+/.exec(this.tileElement.style.transform)[0];
  }

  public rotateTile(): void {
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
