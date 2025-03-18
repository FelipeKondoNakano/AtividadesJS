const div = document.getElementById("conteudo"); // div na página html

function textoTotal(){
    // Elementos para texto da section
    const container = document.createElement("section"); // section que se encontra dentro da div
    const tag = document.createElement("h1");
    const text = document.createTextNode("Total");
    const textBox = document.createElement("input"); // caixa de texto do total
    const botaoReload = document.createElement("button");
    
    // Modificando os elementos da página
    textBox.readOnly = true;
    textBox.value = manTotal + womanTotal;
    textBox.setAttribute("style", "font-size: 20px; text-align: center; width: 100px; height: 30px;");
    botaoReload.innerHTML = 'Reset';
    botaoReload.setAttribute("id", "reset");
    botaoReload.setAttribute("style", "width: 80px; height: 30px;");
    
    if(div){
        tag.appendChild(text);
        container.appendChild(tag);
        container.appendChild(textBox);
        container.appendChild(botaoReload);   
        div.appendChild(container);
    }
    
    document.getElementById("reset").addEventListener("click", () => {
        textBox.value = 0;
    })
}

// Função para criar as seções de contagem de pessoas
function contagemPessoas(){
    // Section para Homem e Mulher, filhas de outra
    const sectionPai = document.createElement("section");
    const sectionMale = document.createElement("section");
    const sectionFemale = document.createElement("section");
    sectionMale.setAttribute("id", "male");
    sectionFemale.setAttribute("id", "female");

    // input
    const manTotal = document.createElement("input");
    const womanTotal = document.createElement("input");
    manTotal.readOnly = true;
    womanTotal.readOnly = true;

    // imagens
    const manImage = document.createElement("img");
    manImage.src = 'https://img.icons8.com/?size=100&id=11214&format=png&color=000000';
    manImage.setAttribute("style", "width: 200px; height: 200px;");

    const womanImage = document.createElement("img");
    womanImage.src = 'https://img.icons8.com/?size=100&id=11226&format=png&color=000000';
    womanImage.setAttribute("style", "width: 200px; height: 200px;");

    // Adicionando as seções de Homem e Mulher ao Pai
    sectionMale.appendChild(manImage);
    sectionMale.appendChild(manTotal);
    sectionFemale.appendChild(womanImage);
    sectionFemale.appendChild(womanTotal);
    sectionPai.appendChild(sectionMale);
    sectionPai.appendChild(sectionFemale);
    div.appendChild(sectionPai);

    // Função para atribuir botões de incrementar e decrementar
    function atribuirBotoes(idSection){
        const section = document.getElementById(idSection); 
        const botaoIncrementar = document.createElement("button");
        const botaoDecrementar = document.createElement("button");

        botaoDecrementar.innerHTML = 'Remover';
        botaoIncrementar.innerHTML = 'Adicionar';

        section.appendChild(botaoIncrementar);
        section.appendChild(botaoDecrementar);

        // Adicionar eventos para os botões
        botaoIncrementar.addEventListener("click", () => {
            textBox.value = parseInt(textBox.value) + 1;
        });

        botaoDecrementar.addEventListener("click", () => {
            textBox.value = parseInt(textBox.value) - 1;
        });
    }
    atribuirBotoes('male');
    atribuirBotoes('female');
}
textoTotal();
contagemPessoas();