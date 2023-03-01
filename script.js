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

let equal = document.querySelector('.equal');
let add = document.querySelector('.plus');
let subtract = document.querySelector('.minus');
let divide = document.querySelector('.divide');
let multiply = document.querySelector('.multiply')

let currentNumberArray = [];
let currentNumber = ""; 
let numbers = []
let lastOperator;

function operatorHandler(operatorSymbol){
    if(!(lastOperator==='=')){
        numbers.push(Number(currentNumberArray.join("")));
        currentNumberArray.length = 0;
        currentNumber = "";
        inputNumbers.textContent = `${currentNumber}`;
    }

    if(numbers.length == 2){

        calculate = operate(lastOperator, numbers[0], numbers[1]);
        inputNumbers.textContent = `${calculate}`;
        numbers.length = 1;
        numbers[0] = calculate;
 
    }
    lastOperator = operatorSymbol;
    
}

add.addEventListener('click', () => operatorHandler('+'));
subtract.addEventListener('click', () => operatorHandler('-'));
divide.addEventListener('click', () => operatorHandler('/'));
multiply.addEventListener('click', () => operatorHandler('*'));
equal.addEventListener('click', () => operatorHandler('='))

let inputNumbers = document.createElement('div');
inputNumbers.classList.add('display-font');
let displayScreen = document.querySelector('.display')
displayScreen.appendChild(inputNumbers);

let clear = document.querySelector('.clear');
let remove = document.querySelector('.remove');


let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let three = document.querySelector('.three');
let two = document.querySelector('.two');
let one = document.querySelector('.one');
let zero = document.querySelector('.zero');
let dot = document.querySelector('.dot');


function choiceHandler(buttonChoice, number){
  
    if (buttonChoice === clear){
        currentNumberArray.length = 0;
        currentNumber = "";
        inputNumbers.textContent = `${currentNumber}`;
        numbers.length = 0;
    }
    else if (buttonChoice === remove){
        currentNumberArray.pop();
        currentNumber = currentNumber.slice(0,-1);
        inputNumbers.textContent = `${currentNumber}`;
    }
    else if(currentNumberArray.length <= 9){
        if(currentNumberArray[0] == "0" && currentNumberArray.length == 1 && !(number ==".")){
            currentNumberArray.shift();
        }
        currentNumberArray.push(number);
        currentNumber = currentNumberArray.join("");
        inputNumbers.textContent = `${currentNumber}`;

    } 
}

clear.addEventListener('click', () => choiceHandler(clear));
remove.addEventListener('click', () =>  choiceHandler(remove));
seven.addEventListener('click', () => choiceHandler(seven, 7));
eight.addEventListener('click', () => choiceHandler(eight, 8));
nine.addEventListener('click', () => choiceHandler(nine, 9));
four.addEventListener('click', () => choiceHandler(four, 4));
five.addEventListener('click', () => choiceHandler(five, 5));
six.addEventListener('click', () => choiceHandler(six, 6 ));
three.addEventListener('click', () => choiceHandler(three, 3));
two.addEventListener('click', () => choiceHandler(two, 2));
one.addEventListener('click', () => choiceHandler(one, 1));
zero.addEventListener('click', () => choiceHandler(zero, 0));
dot.addEventListener('click', () => {
    if(currentNumberArray.length == 0 && !currentNumberArray.includes(".") && !currentNumberArray.includes("0.")){
        choiceHandler(dot, "0.");
    } else if(!currentNumberArray.includes(".") && !currentNumberArray.includes("0.")){choiceHandler(dot,".")}

});

