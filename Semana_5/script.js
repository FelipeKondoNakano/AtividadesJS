const div = document.getElementById("conteudo"); // Div na página HTML

let textBoxTotal, textBoxMale, textBoxFemale; // Campos de entrada para total, homens e mulheres

function criarTotal() {
    const container = document.createElement("section");
    container.classList.add("container");

    const tagTotal = document.createElement("h2");
    tagTotal.innerText = "Total de Pessoas";

    textBoxTotal = document.createElement("input");
    textBoxTotal.setAttribute("id", "total");
    textBoxTotal.readOnly = true;
    textBoxTotal.value = 0;

    const botaoReset = document.createElement("button");
    botaoReset.setAttribute("id", "reset");
    botaoReset.setAttribute("style", "display: flex; align-items: center; justify-content: center; width: 50px; height: 50px; background: none; border: none; cursor: pointer;");

    const iconReset = document.createElement("img");
    iconReset.src = "https://img.icons8.com/ios-filled/50/000000/recurring-appointment.png"; // Ícone de reset
    iconReset.setAttribute("alt", "Reset");
    iconReset.setAttribute("style", "width: 30px; height: 30px;");

    botaoReset.appendChild(iconReset);
    botaoReset.addEventListener("click", () => {
        textBoxMale.value = 0;
        textBoxFemale.value = 0;
        textBoxTotal.value = 0;
    });

    const totalContainer = document.createElement("div");
    totalContainer.setAttribute("id", "total-container");
    totalContainer.appendChild(textBoxTotal);
    totalContainer.appendChild(botaoReset);

    container.appendChild(tagTotal);
    container.appendChild(totalContainer);
    div.appendChild(container);
}

function criarContadores() {
    const peopleContainer = document.createElement("div");
    peopleContainer.classList.add("people-container");

    function criarPessoa(tipo, imgSrc) {
        const section = document.createElement("section");
        section.classList.add("person");

        const tag = document.createElement("h3");
        tag.innerText = tipo;

        const imagem = document.createElement("img");
        imagem.src = imgSrc;

        const textBox = document.createElement("input");
        textBox.classList.add("count");
        textBox.readOnly = true;
        textBox.value = 0;

        const buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add("buttons");

        const botaoIncrementar = document.createElement("button");
        botaoIncrementar.classList.add("add");
        botaoIncrementar.innerHTML = "+";
        botaoIncrementar.addEventListener("click", () => {
            textBox.value = parseInt(textBox.value) + 1;
            atualizarTotal();
        });

        const botaoDecrementar = document.createElement("button");
        botaoDecrementar.classList.add("remove");
        botaoDecrementar.innerHTML = "-";
        botaoDecrementar.addEventListener("click", () => {
            let valorAtual = parseInt(textBox.value);
            if (valorAtual > 0) {
                textBox.value = valorAtual - 1;
                atualizarTotal();
            }
        });

        buttonsDiv.appendChild(botaoIncrementar);
        buttonsDiv.appendChild(textBox);
        buttonsDiv.appendChild(botaoDecrementar);

        section.appendChild(tag);
        section.appendChild(imagem);
        section.appendChild(buttonsDiv);

        if (tipo === "Homens") textBoxMale = textBox;
        if (tipo === "Mulheres") textBoxFemale = textBox;

        return section;
    }

    const homens = criarPessoa("Homens", "https://img.icons8.com/?size=100&id=11214&format=png&color=000000");
    const mulheres = criarPessoa("Mulheres", "https://img.icons8.com/?size=100&id=11226&format=png&color=000000");

    peopleContainer.appendChild(homens);
    peopleContainer.appendChild(mulheres);
    div.appendChild(peopleContainer);
}

function atualizarTotal() {
    textBoxTotal.value = parseInt(textBoxMale.value) + parseInt(textBoxFemale.value);
}

// Chamando as funções para criar os elementos na página
criarTotal();
criarContadores();
