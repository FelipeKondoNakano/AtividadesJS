function criarCalculadora(){
    // Criando o corpo principal da calculadora
    const calculator = document.createElement("div");
    calculator.classList.add('calculator');
    
    // Criando o display da calculadora
    const display = document.createElement("input");
    display.type = 'text';
    display.classList.add('display');
    display.disabled = true;
    calculator.appendChild(display);
    
    // Função para atualizar o display
    function updateDisplay(value){
        display.value = value;
    }
    
    // Função para limpar o display
    function clearDisplay(){
        updateDisplay('');
    }

    function calculate(){

    }

    // Função para apresentar os valores e operadores no display
    function appendToDisplay(value) {
        updateDisplay(display.value + value);
    }
    
    // Criando uma matriz bidimensional para botões da calculadora
    const buttons = [
        ['7', '8', '9', '÷'],
        ['4', '5', '6', 'x'],
        ['1', '2', '3', '-'],
        ['0', '.', '=', '+']
    ];
    // Transforma os textos da matriz acima em botões
    buttons.forEach(row => {
        const buttonRow = document.createElement('div');
        buttonRow.classList.add('button-row');

        row.forEach(buttonText => {
            const button = document.createElement('button');
            button.classList.add('button');
            
            if (buttonText === '=' || buttonText === '/') {
                button.classList.add('operator');
            } else if (buttonText === '+') {
                button.classList.add('operator');
            }

            button.textContent = buttonText;
            button.onclick = () => {
                if (buttonText === '=') {
                    calculate();
                } else if (buttonText === 'C') {
                    clearDisplay();
                } else {
                    appendToDisplay(buttonText);
                }
            };

            buttonRow.appendChild(button);
        });

        calculator.appendChild(buttonRow);
    });
    
    // Criando o botão de limpar o display
    const clearButton = document.createElement('button');
    clearButton.classList.add('button', 'clear');
    clearButton.textContent = 'AC';
    clearButton.onclick = clearDisplay;
    
    calculator.appendChild(clearButton);

    // Adiciona os elementos da calculadora na página principal
    document.getElementById("calculadora").appendChild(calculator);
}

