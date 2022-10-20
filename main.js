// SELECTORS //
const container = document.querySelector('.container');
const input = document.querySelector('input');
const modeRadios = document.querySelectorAll('input[type="radio"]');

function makeGrid (size) {
    const section = document.createElement('section');
    section.style.cssText = `display: grid; grid-template-columns: repeat(${size}, 1fr);`

    // for loop written avoid zero index when numbering sqs // 
    for (let i = 1; i < (size*size)+1; i++) {
        const square = document.createElement('div');
        square.style.cssText = 'border: solid black 1px; height: 50px';
        square.textContent = i;
        square.setAttribute('id', 'sq');
        section.appendChild(square);
    }
    container.appendChild(section);
};

function selectMode (mode) {
    const allSquares = document.querySelectorAll('#sq');
    allSquares.forEach(allSquare => {
        allSquare.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = mode;
        });
    });
};

function chooseColour (mode) {
    const allSquares = document.querySelectorAll('#sq');
    allSquares.forEach(allSquare => {
        allSquare.addEventListener('mouseenter', (e) => {
            if(document.getElementById('colour').checked)
                e.target.style.backgroundColor = mode;
        });
    });
};

input.addEventListener('click', (e) => {
    const allSquares = document.querySelectorAll('#sq');
    allSquares.forEach(allSquare => {
        allSquare.addEventListener('mouseenter', (e) => {
            if(document.getElementById('colour').checked) {
                e.target.style.backgroundColor = input.value;
            }
        });
    });
})

modeRadios.forEach(modeRadio => {
    modeRadio.addEventListener('change', (e) => {
        if (e.target.value === "rainbow") {
            selectMode("black");
        } if (e.target.value === "colour") {
            selectMode(input.value);
        } else if (e.target.value === "eraser") {
            selectMode("white");
        }
    });
});

const size = prompt('How many rows and columns for your grid?');
makeGrid(size);
