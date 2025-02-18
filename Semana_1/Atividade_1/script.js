document.getElementById("button").addEventListener("click", () =>{
    let number = document.getElementById("number").value
    if(isNaN(number) || number < 0){
        alert("Digite um número inteiro válido!");
    }
    else
        number % 2 == 0 ? alert("É par!") : alert("É ímpar!");
}) 