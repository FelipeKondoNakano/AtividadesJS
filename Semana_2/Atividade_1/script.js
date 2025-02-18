document.getElementById('button').addEventListener("click", () => {
    const data = new Date();
    let dataAtual = { weekday: "long", year: "numeric", month: "long", day: "numeric"};
    let dataFormatada = data.toLocaleDateString('pt-BR', dataAtual);
    document.write(dataFormatada);
})