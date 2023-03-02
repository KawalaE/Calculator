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


let currentNumberArray = [];
let currentNumber = ""; 
let numbers = []
let lastOperator;
let inputNumbers = document.createElement('div');
inputNumbers.classList.add('display-font');
let displayScreen = document.querySelector('.display')
displayScreen.appendChild(inputNumbers);


function operatorHandler(operatorSymbol){
    if(!(lastOperator==='=')){
        numbers.push(Number(currentNumberArray.join("")));
        currentNumberArray.length = 0;
        currentNumber = "";
        inputNumbers.textContent = `${currentNumber}`;
    }

    if(numbers.length == 2){

        calculate = operate(lastOperator, numbers[0], numbers[1]);
        console.log(calculate)
        let checkDecimal = (calculate.toString()).split('.');
        let decimalCount = (checkDecimal[1]).split('');
        if(decimalCount.length > 4){
            calculate = calculate.toFixed(3);
        }
        console.log(decimalCount)
        inputNumbers.textContent = `${calculate}`;
        numbers.length = 1;
        numbers[0] = calculate;
 
    }
    lastOperator = operatorSymbol;
    
}

function choiceHandler(number){
    /*Limit the amount of numbers visible at the display*/ 
    if(currentNumberArray.length <= 9){
        if(currentNumberArray[0] == "0" && currentNumberArray.length == 1 && !(number ==".")){
            currentNumberArray.shift();
        }
        currentNumberArray.push(number);
        currentNumber = currentNumberArray.join("");
        inputNumbers.textContent = `${currentNumber}`;

    } 
}

/* Get the nodelist of all button-operators */
let operatorButtons = document.querySelectorAll('.operator')

operatorButtons.forEach((operButton) => {
    operButton.addEventListener('click', () => {
        let getOperator = operButton.textContent;
        if(getOperator == '.'){
            if(currentNumberArray.length == 0 && !currentNumberArray.includes(".") && !currentNumberArray.includes("0.")){
                choiceHandler("0.");
            } else if(!currentNumberArray.includes(".") && !currentNumberArray.includes("0.")){choiceHandler(".")}
        } else {
            operatorHandler(getOperator);
            console.log(getOperator);
        }
        
    })
})


/* Get the nodelist of all button-numbers */
let numberButtons = document.querySelectorAll('.number');

numberButtons.forEach((numButton)=>{
    numButton.addEventListener('click', () => {
        let getNumber = numButton.textContent;
        choiceHandler(Number(getNumber));
    })
})




