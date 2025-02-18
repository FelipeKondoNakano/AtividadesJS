document.getElementById("button").addEventListener("click", () => {
        let number = parseInt(document.getElementById("number").value)
        if(isNaN(number) || number < 0){
            alert("Digite um número inteiro válido!");
        }
        let result = ehPrimo(number) ? `O número ${number} é primo!` : `O número ${number} não é primo!`;
        alert(result);

    function ehPrimo(number){
        if(number < 2) return false;
        if(number === 2) return true;
        if(number % 2 === 0) return false;

        for(let i = 3; i <= Math.sqrt(number); i += 2){
            if(number % i === 0){
                return false;
            }
        }
        return true;
    }
});