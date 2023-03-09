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
                displayContent.textContent = 'division Err';
                setTimeout(location.reload.bind(location), 600);
            } else return divAll(firstNumber,secondNumber);

    }
};

function evaluateEquation(){

    if(numbers.length == 2){
        calculateValue = operate(lastOperator, numbers[0], numbers[1]);
        let stringValue = String(calculateValue);
        let decimalArr = (stringValue.split('')).slice(stringValue.indexOf('.') + 1, stringValue.length);
        let integerArr = (stringValue.split('')).slice(0, stringValue.indexOf('.'));

        if(integerArr.length >= 10){
            displayContent.textContent = `display Err`;
            setTimeout(location.reload.bind(location), 600);

        }

        if(decimalArr.length){
            if(decimalArr.length == 3){
                calculateValue = parseFloat(calculateValue.toFixed(3));
            }else if(decimalArr.length == 2){
                calculateValue = parseFloat(calculateValue.toFixed(2));
            } else if(decimalArr.length ==1){
                calculateValue = parseFloat(calculateValue.toFixed(1));
            }else{
                calculateValue = parseFloat(calculateValue.toFixed((9 - (integerArr.length))));
            }
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
    if(numbers.length == 0){
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