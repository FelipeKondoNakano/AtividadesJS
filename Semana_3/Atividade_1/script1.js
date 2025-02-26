let arrayValores = [];
document.getElementById("button").addEventListener("click", () => {
    const valores = document.getElementById("text").value;
    arrayValores.unshift(valores);
    document.getElementById("text").value = '';
    arrayValores.sort();
    exibirArray();
});

function exibirArray(){
    const ol = document.getElementById("lista");
    ol.innerHTML = '';

    for(let i = 0; i <= arrayValores.length - 1; i++){
        const li = document.createElement("li");
        let conteudo = document.createTextNode(`${arrayValores[i]}`);
        li.appendChild(conteudo);
        ol.appendChild(li);
        document.body.appendChild(ol);
    }
}