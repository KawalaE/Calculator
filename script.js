function sumAll(input, number){ 
    input += number;
    return input;
};

function subAll(input, number){
    input -= number;
    return input;
}
function mulAll(input, number){
    input *= number;
    return input;
}
function divAll(input, number){
    input /= number;
    return input;  
}

function operate(operator, firstNumber, secondNumber){
    switch(operator){
        case '+':
             return sumAll(firstNumber,secondNumber);
        case '-':
            return subAll(firstNumber,secondNumber);
        case '*':
            return mulAll(firstNumber,secondNumber);
        case '/':
            return divAll(firstNumber,secondNumber);

    }
};
//console.log(operate('', 3,2));

let currentNumberArray = [];

let currentNumber = ""; 

let inputNumbers = document.createElement('div');
inputNumbers.classList.add('display-font');
let displayScreen = document.querySelector('.display')
displayScreen.appendChild(inputNumbers);

let clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    currentNumberArray = [];
    currentNumber = "";
    inputNumbers.textContent = `${currentNumber}`;
});

let seven = document.querySelector('.seven');
seven.addEventListener('click', () => {
    currentNumberArray.splice(9);
    currentNumberArray.push(7);
    currentNumber = currentNumberArray.join("");
    inputNumbers.textContent = `${currentNumber}`;
    
});

let eight = document.querySelector('.eight');
eight.addEventListener('click', () => {
    currentNumberArray.splice(9);
    currentNumberArray.push(8);
    currentNumber = currentNumberArray.join("");
    inputNumbers.textContent = `${currentNumber}`;
    
});

let nine = document.querySelector('.nine');
nine.addEventListener('click', () => {
    currentNumberArray.splice(9);
    currentNumberArray.push(9);
    currentNumber = currentNumberArray.join("");
    inputNumbers.textContent = `${currentNumber}`;
    
});

let four = document.querySelector('.four');
four.addEventListener('click', () => {
    currentNumberArray.splice(9);
    currentNumberArray.push(4);
    currentNumber = currentNumberArray.join("");
    inputNumbers.textContent = `${currentNumber}`;
    
});

let five = document.querySelector('.five');
five.addEventListener('click', () => {
    currentNumberArray.splice(9);
    currentNumberArray.push(5);
    currentNumber = currentNumberArray.join("");
    inputNumbers.textContent = `${currentNumber}`;
    
});

let six = document.querySelector('.six');
six.addEventListener('click', () => {
    currentNumberArray.splice(9);
    currentNumberArray.push(6);
    currentNumber = currentNumberArray.join("");
    inputNumbers.textContent = `${currentNumber}`;
    
});

let three = document.querySelector('.three');
three.addEventListener('click', () => {
    currentNumberArray.splice(9);
    currentNumberArray.push(3);
    currentNumber = currentNumberArray.join("");
    inputNumbers.textContent = `${currentNumber}`;
    
});

let two = document.querySelector('.two');
two.addEventListener('click', () => {
    currentNumberArray.splice(9);
    currentNumberArray.push(2);
    currentNumber = currentNumberArray.join("");
    inputNumbers.textContent = `${currentNumber}`;
    
});

let one = document.querySelector('.one');
one.addEventListener('click', () => {
    currentNumberArray.splice(9);
    currentNumberArray.push(1);
    currentNumber = currentNumberArray.join("");
    inputNumbers.textContent = `${currentNumber}`;
    
});

let zero = document.querySelector('.zero');
zero.addEventListener('click', () => {
    currentNumberArray.splice(9);
    currentNumberArray.push(0);
    currentNumber = currentNumberArray.join("");
    inputNumbers.textContent = `${currentNumber}`;
    
});

let dot = document.querySelector('.dot');
dot.addEventListener('click', () => {
    currentNumberArray.splice(9);
    currentNumberArray.push('.');
    currentNumber = currentNumberArray.join("");
    inputNumbers.textContent = `${currentNumber}`;
    
});
