// SELECTORS //
const container = document.querySelector('.container');

function makeGrid (size) {
    container.style.cssText = `display: grid; grid-template-columns: repeat(${size}, 1fr);`

    // for loop written avoid zero index when numbering sqs // 
    for (let i = 1; i < (size*size)+1; i++) {
        const square = document.createElement('div');
        square.style.cssText = 'border: solid black 1px; height: 50px';
        square.textContent = i;
        container.appendChild(square);
    }
};

const size = prompt('How many rows and columns for your grid?');
makeGrid(size);
