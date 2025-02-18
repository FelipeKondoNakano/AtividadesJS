document.getElementById("button").addEventListener("click", () => {
        let number = parseInt(document.getElementById("number").value);
        if(isNaN(number)){
            alert("Digite um número inteiro válido!");
            return;
        } else if(number < 0){
            alert("Não existe fatorial para números negativos!");
            return;
        } else if(number === 0){
            alert(`O fatorial do número 0 é 1 por definição`);
            return;
        }
        
        let result = calculoFatorial(number);
        alert(`O fatorial de ${number}! é ${result}`);

    function calculoFatorial(number){
        let resultado = 1;
        for(let i = number; i > 1; i--)
            resultado *= i;
        return resultado;
    }
});