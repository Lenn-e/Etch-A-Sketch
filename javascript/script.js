const mainContainer = document.querySelector(".sketchbox");
const resetButton = document.querySelector("button");

function createSquares(amount) {
    mainContainer.style.gridTemplateColumns = `repeat(${amount}, 1fr)`;
    mainContainer.style.gridTemplateRows = `repeat(${amount}, 1fr)`;

    for(let i = 0; i < amount**2; i++) {
        let square = document.createElement("div");
        square.classList.add("item");
        square.style.opacity = "1";
        mainContainer.append(square);
    }
}

function getRandomRGBValue() {
    return Math.floor(Math.random() * 256);
}

function getRandomColor() {
    return `rgb(${getRandomRGBValue()}, ${getRandomRGBValue()}, ${getRandomRGBValue()})`;
}

function resetSketchbox() {
    mainContainer.innerHTML = "";
    getBoardSize = prompt("Choose board height and length in squares (write a single number value, e.g. 20)");
    createSquares(getBoardSize);
}

mainContainer.addEventListener('mouseover', (event) => {
    currentTileColor = event.target.style.backgroundColor;
    currentOpacity = event.target.style.opacity;

    if(currentTileColor == "") {
        event.target.style.backgroundColor = getRandomColor();
    } else if(currentOpacity > 0) {
        event.target.style.opacity = currentOpacity - 0.1;
    }
});

resetButton.addEventListener("click", resetSketchbox);

createSquares(10);