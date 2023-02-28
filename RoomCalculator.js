button = document.getElementById("Button");
console.log(button);

button.addEventListener("click", ()=>{  
    roomCalculator();

});


// This brings up a pop up with a text box for your input
// It has one parameter and that is the message you want to display to the user

// let len = prompt("Please input a length");
// let width = prompt("Please input a width");
// let height = prompt("Please input a height");


let len = document.getElementById("Length").value;
let width = document.getElementById("Width").value;
let height = document.getElementById("Height").value;


function roomCalculator(){
let area = len*width;
let perimeter = (2*len) + (2*width);
let volume = area*height;

let areaElm = document.getElementById("Area");
areaElm.innerText = " Area : " + area;

let perimeterElm = document.getElementById("Perimeter");
perimeterElm.innerText = " Perimeter : " +perimeter;

let volElm = document.getElementById("Volume");
volElm.innerText = " Volume : " + volume;

// to check in console log :
console.log("Area : " + area);
console.log(`Perimeter : ${perimeter}`);
console.log(`Volume : ${volume}`);
}

