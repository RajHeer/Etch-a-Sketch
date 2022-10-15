// SELECTORS //
const container = document.querySelector('.container');
const root = document.querySelector(':root');
const input = document.querySelector('input');

function makeGrid (size) {
    const section = document.createElement('section');
    section.style.cssText = `display: grid; grid-template-columns: repeat(${size}, 1fr);`

    // for loop written avoid zero index when numbering sqs // 
    for (let i = 1; i < (size*size)+1; i++) {
        const square = document.createElement('div');
        square.style.cssText = 'border: solid black 1px; height: 50px';
        square.textContent = i;
        square.addEventListener('mouseenter', (e) => {
            e.target.classList.add('changeBGColour');
        })
        section.appendChild(square);
    }
    container.appendChild(section);
};

const size = prompt('How many rows and columns for your grid?');
makeGrid(size);

input.addEventListener('change', () => {
    root.style.setProperty('--bg-col', input.value);
});
