const sub = document.querySelector('#sub');
const main = document.querySelector('#main');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const divid = document.querySelector('#divid');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const mult = document.querySelector('#mult');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const minus = document.querySelector('#minus');
const zero = document.querySelector('#zero');
const point = document.querySelector('#point');
const plus = document.querySelector('#plus');
const equals = document.querySelector('#equals');
console.log(main)

const arr = []
var actNumber= '';
var dispTop;
var dispBot;

function add(num) {
    actNumber += num;
    main.innerHTML= actNumber;
}

function operation(type) {
    arr.push(parseFloat(actNumber))
    actNumber= '';
                                            
}
/*
number 1+number 2+ number3 +number4

+,/,-,% operates last 2 numbers with the operation of last time


*/


