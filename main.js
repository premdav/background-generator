let _ = require('lodash');

let array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log('answer:', _.without(array, 4));
let css = document.querySelector("h3");
let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let body = document.getElementById("gradient");
let button = document.querySelector("button");

const changeBackground = () => {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value; + ")";
    css.textContent = body.style.background + ";";
}

const randomHex = () =>  {
    let letters = '0123456789ABCDEF';
    let genColor1 = '#';
    let genColor2 = '#';
    
    for (let i = 0; i < 6; i++) {
        genColor1 += letters[Math.floor(Math.random() * 16)];
    }
    for (let i = 0; i < 6; i++) {
        genColor2 += letters[Math.floor(Math.random() * 16)];
    }
    color1.value = genColor1;
    color2.value = genColor2;
    changeBackground();

}

window.onload = changeBackground();

color1.addEventListener("input", changeBackground);
color2.addEventListener("input", changeBackground);
button.addEventListener("click", randomHex);

