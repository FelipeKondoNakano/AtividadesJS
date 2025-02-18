addEventListener("load", () => {
    const relogio = new Date();
    let horas = relogio.getHours();
    let minutos = relogio.getMinutes();
    let segundos = relogio.getSeconds();
    let horaFormatada = `${horas} : ${minutos} : ${segundos}`;
    document.write(horaFormatada);
    setTimeout(() => {
        location.reload();
    }, 1000);
});