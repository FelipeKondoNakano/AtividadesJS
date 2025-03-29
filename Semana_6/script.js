function criarCalculadora(){
    // Criando o corpo principal da calculadora
    const calculator = document.createElement("div");
    calculator.classList.add('calculator');
    
    // Criando o display da calculadora
    const display = document.createElement("input");
    display.type = 'text';
    display.classList.add('display');
    display.disabled = true;
    display.value = '0';
    calculator.appendChild(display);
    
    let currentNumber = "";
    let previousNumber = null;
    let operator = null;
    
    // Função para atualizar o display
    function updateDisplay(value){
        display.value = value;
    }
    
    // Função para limpar o display
    function clearDisplay(){
        currentNumber = "";
        previousNumber = null;
        operator = null;
        updateDisplay('0');
    }

    // Função para calcular o resultado
    function calculate(num1, op, num2){
        let result;
        switch (op) {
            case '+': result = num1 + num2; break;
            case '-': result = num1 - num2; break;
            case 'x': result = num1 * num2; break;
            case '÷': result = num1 / num2; break;
            case '%': result = num1 % num2; break;
            default: return;
        }
        return result;
    }

    // Função para inverter o sinal
    function toggleSign() {
        if (currentNumber !== "") {
            currentNumber = (parseFloat(currentNumber) * -1).toString();
            updateDisplay(previousNumber !== null ? previousNumber + " " + operator + " " + currentNumber : currentNumber);
        }
    }

    // Função para lidar com entrada de números e operadores
    function handleInput(value) {
        if (!isNaN(value) || value === '.') {
            currentNumber += value;
            updateDisplay(previousNumber !== null ? previousNumber + " " + operator + " " + currentNumber : currentNumber);
        } else if (['+', '-', 'x', '÷', '%'].includes(value)) {
            if (currentNumber !== "") {
                if (previousNumber !== null && operator !== null) {
                    previousNumber = calculate(parseFloat(previousNumber), operator, parseFloat(currentNumber));
                } else {
                    previousNumber = parseFloat(currentNumber);
                }
                operator = value;
                currentNumber = "";
                updateDisplay(previousNumber + " " + operator);
            }
        } else if (value === '=') {
            if (previousNumber !== null && operator !== null && currentNumber !== "") {
                previousNumber = calculate(previousNumber, operator, parseFloat(currentNumber));
                updateDisplay(previousNumber);
                currentNumber = "";
                operator = null;
            }
        }
    }
    
    // Criando uma matriz bidimensional para botões da calculadora
    const buttons = [
        ['AC', '+/-', '%', '÷'],
        ['7', '8', '9', 'x'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.', '=']
    ];
    
    // Transforma os textos da matriz acima em botões
    buttons.forEach(row => {
        const buttonRow = document.createElement('div');
        buttonRow.classList.add('button-row');

        row.forEach(buttonText => {
            const button = document.createElement('button');
            button.classList.add('button');
            
            if (['=', '+', '-', '÷', 'x', '%'].includes(buttonText)) {
                button.classList.add('operator');
            }

            button.textContent = buttonText;
            
            if (buttonText === 'AC') {
                button.onclick = clearDisplay;
            } else if (buttonText === '+/-') {
                button.onclick = toggleSign;
            } else {
                button.onclick = () => handleInput(buttonText);
            }
            
            buttonRow.appendChild(button);
        });

        calculator.appendChild(buttonRow);
    });
    
    // Adiciona os elementos da calculadora na página principal
    document.getElementById("calculadora").appendChild(calculator);
}

document.addEventListener("DOMContentLoaded", criarCalculadora);