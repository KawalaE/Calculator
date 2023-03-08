let currentNumberArray = [];
let numbers = [];
let lastOperator;
let calculateValue = 0;
let operatorUsed = 0;
let equalPressed = false;
let displayContent = document.createElement('div');
displayContent.classList.add('display-font');
let displayScreen = document.querySelector('.display')
displayScreen.appendChild(displayContent);

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

function evaluateEquation(){

    if(numbers.length == 2){
        calculateValue = operate(lastOperator, numbers[0], numbers[1]);
        let newValue = (String(calculateValue).split(''));
        let ble = newValue.slice(0,newValue.indexOf('.')).join('');
        let decimalPoints;

        if(newValue.includes('.')){
            decimalPoints = newValue.slice(newValue.indexOf('.') +1);

            for(let i=decimalPoints.length-1; i>=0; i--){
                if(decimalPoints[i] == 0){
                    decimalPoints.pop()
                }else if(decimalPoints[i] !=0){break}   
            }

            decimalPoints = decimalPoints.join('');
            calculateValue = Number(`${ble}.${decimalPoints}`);

        }

        if ((String(calculateValue).split('')).length > 8){
            calculateValue = calculateValue.toFixed(8);
            calculateValue = String(calculateValue).split('');
            for(let i=calculateValue.length-1; i>=0; i--){
                if(calculateValue[i] == 0){
                    calculateValue.pop()
                }else if(calculateValue[i] !=0){break}   
            }
            calculateValue = Number(calculateValue.join(''));
        } 

        displayContent.textContent = `${calculateValue}`;
        numbers.pop();
        numbers[0] = calculateValue;
        operatorUsed =0;
    } 
}
function removeNumber(){
    if(currentNumberArray.length){
        currentNumberArray.pop();
        displayContent.textContent = `${currentNumberArray.join('')}`;
    }
}
function displayClear(){
    equalPressed = false;
    currentNumberArray.length = 0;
    displayContent.textContent = `${currentNumberArray.join('')}`;
}

function operatorHandler(operatorSymbol){
 
    if(equalPressed == true && numbers[0] != Number(displayContent.textContent)){
        numbers[0] = (Number(currentNumberArray.join("")));
    }
    if(equalPressed == false && numbers.length == 1) {
        numbers.push(Number(currentNumberArray.join("")));
    }
    if(numbers.length == false){
        numbers.push(Number(currentNumberArray.join("")));
    }
    equalPressed = false;
    displayClear();
    evaluateEquation();
    operatorUsed = 1;
    lastOperator = operatorSymbol;
}


function numberHandler(number){
    /*Limit the amount of numbers visible at the display*/ 
    if(currentNumberArray.length <= 9){
        if(currentNumberArray[0] == "0" && currentNumberArray.length == 1 && !(number ==".") && !(number =='0.')){
            currentNumberArray.shift();
        }
        currentNumberArray.push(number);
        displayContent.textContent = `${currentNumberArray.join('')}`;    
    } 
}

/*Handle equal sign*/
let equalSignButton = document.querySelector('.equal')
equalSignButton.addEventListener('click', () => {
    if(operatorUsed){
        numbers.push(Number(currentNumberArray.join("")));
        currentNumberArray.length = 0;
        evaluateEquation();   
    }
    equalPressed = true;
})

/* Get the nodelist of all button-operators */
let operatorButtons = document.querySelectorAll('.operator')
operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', () => {
        let getOperator = operatorButton.textContent;
        if(getOperator == '.'){
            if(currentNumberArray.length == 0 && !currentNumberArray.includes(".") && !currentNumberArray.includes("0.")){
                numberHandler("0.");
            } else if(!currentNumberArray.includes(".") && !currentNumberArray.includes("0.") ){numberHandler(".")}
        } else {
            operatorHandler(getOperator);
        }
    })
})

/* Get the nodelist of all button-numbers */
let numberButtons = document.querySelectorAll('.number');
numberButtons.forEach((numButton)=>{
    numButton.addEventListener('click', () => {
        let getNumber = Number(numButton.textContent);
        numberHandler(getNumber);
    })
})

/* Get the nodelist and evaluate CA and CE buttons*/
let additionalOperations = document.querySelectorAll('.additional-options') ;
additionalOperations.forEach((addOperation) => {
    addOperation.addEventListener('click', () => {
        let getOperation = addOperation.textContent;
        if (getOperation == 'CA'){
            displayClear();
            numbers = [];
        }if(getOperation == 'CE'){
            removeNumber();
        }})
})