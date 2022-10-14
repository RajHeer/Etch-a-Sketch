// SELECTORS //
const container = document.querySelector('.container');


function makeGrid () {
    
    // for loop written avoid zero index when numbering sqs // 
    for (let i = 1; i < (4*4)+1; i++) {
        const square = document.createElement('div');
        square.style.cssText = 'border: solid black 1px; height: 50px';
        square.textContent = i;
        container.appendChild(square);
    }
};

makeGrid(4);
