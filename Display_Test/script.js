const start =  document.querySelector('#start');
const stop =  document.querySelector('#stop');
const body = document.querySelector('body')

let startInterval;


// Hex color code generator.
let hex = '0123456789abcdef'; 
const colorId = function(){
    let colorHex = "#";
    for(let i = 0; i < 6; i++){
        colorHex+= hex[Math.floor(Math.random()*16)];
    }

    return colorHex
};



// color setter
const changeColor = function(){
    body.style.backgroundColor = colorId();
}


let intervalId;
// color change start
startInterval = function(){
    if(!intervalId){
        intervalId = setInterval(changeColor, 1000);
    }
};

// start button click
start.addEventListener('click', startInterval);



// color change stop
let stopInterval = function(){
    clearInterval(intervalId);
    intervalId = null;
};

// stop button click
stop.addEventListener('click', stopInterval);


