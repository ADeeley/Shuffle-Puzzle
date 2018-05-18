const tile = document.querySelector('.tile');

function rotateTile(tile) {
    const turnVal = 90;
    const currentRotation = /\d+/.exec(tile.style.transform);
    let newRotation = (currentRotation) ? parseInt(currentRotation) + 90 : 90;
    if (newRotation >= 360) newRotation = 0;

    console.log('current ' + newRotation);
    tile.setAttribute('style', `transform: rotate(${newRotation}deg)`);
}


tile.addEventListener('click', (e) => rotateTile(e.target));