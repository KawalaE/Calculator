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
    }
    else if (buttonChoice === remove){
        currentNumberArray.pop();
        currentNumber = currentNumber.slice(0,-1);
        inputNumbers.textContent = `${currentNumber}`;
    }
    else if(currentNumberArray.length <= 9){
        currentNumberArray.push(number);
        console.log(currentNumberArray)
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

