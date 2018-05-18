const tiles = document.querySelectorAll('.tiles__tile');
const shuffleButton = document.querySelector('#shuffle-button');

function rotateTile(tile) {
    const currentRotation = /\d+/.exec(tile.style.transform);
    let newRotation = (currentRotation) ? parseInt(currentRotation) + 90 : 90;
    if (newRotation >= 360) newRotation = 0;
    tile.style.setProperty('transform', `rotate(${newRotation}deg)`);
}

function shuffle() {
    tiles.forEach((tile) => {
        const newRotation = Math.floor(Math.random() * 4) * 90;
        tile.style.setProperty('transform', `rotate(${newRotation}deg)`);
    })
}

tiles.forEach(tile => tile.addEventListener('click', (e) => rotateTile(e.target)));
shuffleButton.addEventListener('click', shuffle);

function positionTilesCorrectly() {
    let size = 100;
    let row = 0;
    let col = 0;
    tiles.forEach(tile => {
        tile.style.setProperty('background-position', `-${row}px -${col}px`);
        row += size;
        if (row >= 500) {
            row = 0;
            col += size;
        }
    });
}

function init() {
    positionTilesCorrectly();
    shuffle();
}

init();
