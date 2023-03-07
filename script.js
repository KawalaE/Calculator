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
            if(secondNumber == 0){
                alert('Division by zero is undefined');
                location.reload();
            } else return divAll(firstNumber,secondNumber);

    }
};

let currentNumberArray = [];
let currentNumber = ""; 
let numbers = [];
let lastOperator;
let calculateValue = 0;
let equalPressed = 0;
let inputNumbers = document.createElement('div');
inputNumbers.classList.add('display-font');
let displayScreen = document.querySelector('.display')
displayScreen.appendChild(inputNumbers);

function evaluateEquation(){
 
    if(numbers.length == 2){
        calculateValue = operate(lastOperator, numbers[0], numbers[1]);
        let newValue = (String(calculateValue).split(''));
        let decimalPoints;

        if(newValue.includes('.')){
            decimalPoints = newValue.slice(newValue.indexOf('.') +1);
            console.log(decimalPoints)
            if (decimalPoints.length > 8){
                decimalPoints.length = 7;
            } 
            for(let i=decimalPoints.length-1; i>=0; i--){
                if(decimalPoints[i] == 0){
                    decimalPoints.pop()
                    console.log(decimalPoints)
                }else if(decimalPoints[i] !=0){break}
                
            }
            decimalPoints = decimalPoints.join('');
            calculateValue = Number(`${newValue.slice(0,newValue.indexOf('.')).join('')}.${decimalPoints}`);
            if (decimalPoints.length > 8){
                calculateValue = calculateValue.toFixed(7);
            } 
            
        }
        inputNumbers.textContent = `${calculateValue}`;
        numbers.pop();
        numbers[0] = calculateValue;

    } 
}
function removeNumber(){
    if(currentNumberArray.length){
        currentNumberArray.pop();
        currentNumber = currentNumberArray.join('');
        inputNumbers.textContent = `${currentNumber}`;
    }
}
function displayClear(){
    equalPressed = 0;
    currentNumberArray.length = 0;
    currentNumber = "";
    inputNumbers.textContent = `${currentNumber}`;
}

function operatorHandler(operatorSymbol){
    if(equalPressed != 1){
        numbers.push(Number(currentNumberArray.join("")));
    }
    displayClear();
    evaluateEquation();
    lastOperator = operatorSymbol;
}

function choiceHandler(number){
    /*Limit the amount of numbers visible at the display*/ 
    if(currentNumberArray.length <= 9){

        if(currentNumberArray[0] == "0" && currentNumberArray.length == 1 && !(number ==".")){
            currentNumberArray.shift();
        } else{
            currentNumberArray.push(number);
            currentNumber = currentNumberArray.join("");
            inputNumbers.textContent = `${currentNumber}`;
        }
    } 
}

/*Handle equal sign*/
let equalSignButton = document.querySelector('.equal')
equalSignButton.addEventListener('click', () => {
    if(numbers.length == 0){
        inputNumbers.textContent = 0;
    }
    else {
        numbers.push(Number(currentNumberArray.join("")));
        currentNumberArray.length = 0;
        evaluateEquation();
        equalPressed = 1;
    }
    
})

/* Get the nodelist of all button-operators */
let operatorButtons = document.querySelectorAll('.operator')

operatorButtons.forEach((operButton) => {
    operButton.addEventListener('click', () => {
        let getOperator = operButton.textContent;
        if(getOperator == '.'){
            if(currentNumberArray.length == 0 && !currentNumberArray.includes(".") && !currentNumberArray.includes("0.")){
                choiceHandler("0.");
            } else if(!currentNumberArray.includes(".") && !currentNumberArray.includes("0.") ){choiceHandler(".")}
        } else {
            operatorHandler(getOperator);
        }
        
    })
})

/* Get the nodelist of all button-numbers */
let numberButtons = document.querySelectorAll('.number');

numberButtons.forEach((numButton)=>{
    numButton.addEventListener('click', () => {
        let getNumber = numButton.textContent;
        if (equalPressed == 1){
            numbers.length = 1;
            numbers[0] = getNumber;
        }
        choiceHandler(Number(getNumber));
    })
})

let additionalOperations = document.querySelectorAll('.additional-options') ;

additionalOperations.forEach((addOperation) => {
    addOperation.addEventListener('click', () => {
        let getOperation = addOperation.textContent;
        console.log(getOperation)
        if (getOperation == 'CA'){
            displayClear();
            numbers = [];
        }if(getOperation == 'CE'){
            removeNumber();
        }})
    
})
