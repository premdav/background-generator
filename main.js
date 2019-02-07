var _ = require('lodash');

var array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log('answer:', _.without(array, 4));
var css = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function changeBackground() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value; + ")";
    css.textContent = body.style.background + ";";
}

function randomHex() {
    var letters = '0123456789ABCDEF';
    var genColor1 = '#';
    var genColor2 = '#';
    
    for (var i = 0; i < 6; i++) {
        genColor1 += letters[Math.floor(Math.random() * 16)];
    }
    for (var i = 0; i < 6; i++) {
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

