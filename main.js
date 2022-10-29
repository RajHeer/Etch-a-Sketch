// SELECTORS //
const container = document.querySelector('.container');
const input = document.querySelector('input');
const modeRadios = document.querySelectorAll('input[type="radio"]');
const sizer = document.querySelector('input[type="range"]');
const colourInput = document.querySelector('#colourChoice');
const clearBtn = document.querySelector('#clear');

function makeGrid (size) {
        
    const section = document.createElement('section');
    section.setAttribute('id', 'canvas');
    section.style.cssText = `display: grid; grid-template-columns: repeat(${size}, 1fr);`

    // for loop written avoid zero index when numbering sqs // 
    for (let i = 1; i < (size*size)+1; i++) {
        const square = document.createElement('div');
        square.style.cssText = 'border: solid whitesmoke 1px; height: auto';
        square.setAttribute('id', 'sq');
        section.appendChild(square);
    }
    container.appendChild(section);
};

function selectMode (mode) {
    const allSquares = document.querySelectorAll('#sq');
    if (mode === "clear") {
        allSquares.forEach(allSquare => {
            allSquare.style.backgroundColor = 'white';
        })
    };
    allSquares.forEach(allSquare => {
        allSquare.addEventListener('mouseenter', (e) => {
            if(e.buttons === 1) {
                if(mode === "rainbow") {
                    e.target.style.backgroundColor = getRainbowColour(); 
                } else {
                    e.target.style.backgroundColor = mode;
                }
            };
        });
    });
};

function getRainbowColour () {
    let rainbowColours = [
        "darkorchid",
        "darkmagenta",
        "blue",
        "chartreuse",
        "yellow",
        "orange",
        "red"
    ];
    let num = Math.floor(Math.random() * 7 + 1);
    return rainbowColours[num];
}

// Allows to only change colour via input when colour radio button is selected //
colourInput.addEventListener('click', (e) => {
    const allSquares = document.querySelectorAll('#sq');
    allSquares.forEach(allSquare => {
        allSquare.addEventListener('mouseenter', (e) => {
            if(e.buttons === 1) {
                if(document.getElementById('colour').checked) {
                    e.target.style.backgroundColor = colourInput.value;
                }
            };
        });
    });
})

modeRadios.forEach(modeRadio => {
    modeRadio.addEventListener('change', (e) => {
        if (e.target.value === "rainbow") {
            selectMode("rainbow");
        } if (e.target.value === "colour") {
            selectMode(colourInput.value);
        } else if (e.target.value === "eraser") {
            selectMode("white");
        }
    });
});

sizer.addEventListener('change', (e) => {
    if(container.hasChildNodes()) {
        const canvas = document.querySelector('#canvas');
        container.removeChild(canvas);
    }
    makeGrid(e.target.value);
});

clearBtn.addEventListener('click', (e) => {
    selectMode("clear");
});

// Default grid size on page load //
makeGrid(31);
