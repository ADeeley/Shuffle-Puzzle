const tiles = document.querySelectorAll('.tiles__tile');

function setRotation(tile, rotation) {
    tile.style.setProperty('transform', `rotate(${rotation}deg)`);
}

function rotateTile(tile) {
    const currentRotation = /\d+/.exec(tile.style.transform);
    let newRotation = (currentRotation) ? parseInt(currentRotation) + 90 : 90;
    if (newRotation >= 360) newRotation = 0;
    setRotation(tile, newRotation);
}

function shuffle() {
    tiles.forEach(tile => {
        const newRotation = Math.floor(Math.random() * 4) * 90;
        setRotation(tile, newRotation);
    });
}

function positionTilesCorrectly() {
    const tileSize = 100;
    const puzzleSize = 500;
    let xOffset = 0;
    let yOffset = 0;
    tiles.forEach(tile => {
        tile.style.setProperty('background-position', `-${xOffset}px -${yOffset}px`);
        xOffset += tileSize;
        if (xOffset >= puzzleSize) {
            xOffset = 0;
            yOffset += tileSize;
        }
    });
}

function newPuzzle() {
    location.reload();
}

function init() {
    const shuffleButton = document.querySelector('#controls__shuffle');
    const NewPuzzleButton = document.querySelector('#controls__new-puzzle');

    tiles.forEach(tile => tile.addEventListener('click', e => rotateTile(e.target)));
    shuffleButton.addEventListener('click', shuffle);
    NewPuzzleButton.addEventListener('click', newPuzzle);

    positionTilesCorrectly();
    shuffle();
}

init();
