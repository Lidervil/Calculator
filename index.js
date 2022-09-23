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

var arr = []
var actNumber= '';
var dispTop;
var dispBot;

function add(num) {
    actNumber += num;
    let arrDisplay = '';
    for (let i=0; i<arr.length; i++) {
        if (arr[i] !== undefined) {
            arrDisplay += arr[i];
        }
    }
    let display = arrDisplay+actNumber;
    main.innerHTML= actNumber;
    sub.innerHTML = display;
}

function operation(type) {
    arr.push(parseFloat(actNumber));
    actNumber= '';
    main.innerHTML= '0';
    let length = arr.length;
    let operNumber;
    if (length < 3) {
        arr.push(type);
    } else if (arr[length-2] == '/') {
        operNumber = arr[length-3] / arr[length-1];
        arr = [operNumber,type];
        main.innerHTML= operNumber;
    } else if (arr[length-2] == '*') {
        operNumber = arr[length-3] * arr[length-1];
        arr = [operNumber,type];
        main.innerHTML= operNumber;
    } else if (arr[length-2] == '-') {
        operNumber = arr[length-3] - arr[length-1];
        arr = [operNumber,type];
        main.innerHTML= operNumber;
    } else if (arr[length-2] == '+') {
        operNumber = arr[length-3] + arr[length-1];
        arr = [operNumber,type];
        main.innerHTML= operNumber;
    }
}

function equals() {
    if (actNumber != '') {
        arr.push(parseFloat(actNumber));
    } else {
    }
    if (length < 3) {
        if (arr[0] != undefined) {
            main.innerHTML=arr[0];
        } else {
            main.innerHTML= '0';
        }
    } else if (arr[length-2] == '/') {
        operNumber = arr[length-3] / arr[length-1];
        main.innerHTML= operNumber;
    } else if (arr[length-2] == '*') {
        operNumber = arr[length-3] * arr[length-1];
        main.innerHTML= operNumber;
    } else if (arr[length-2] == '-') {
        operNumber = arr[length-3] - arr[length-1];
        main.innerHTML= operNumber;
    } else if (arr[length-2] == '+') {
        operNumber = arr[length-3] + arr[length-1];
        main.innerHTML= operNumber;
    }
    arr = [];
}

/*
number 1+number 2+ number3 +number4

+,/,-,% operates last 2 numbers with the operation of last time


*/


