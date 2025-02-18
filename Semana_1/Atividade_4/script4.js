document.getElementById("button").addEventListener("click", () => {
        let dataValue = document.getElementById("dataType").value.trim();
        if(dataValue === ""){
            document.body.innerHTML = "<h2>Não houve dados digitados!</h2>";
            setTimeout(() => location.reload(), 5000); // arrow function "=>"
            return;
        }

        let userConfirm = confirm("Deseja verificar o tipo do dado digitado?");
        if (userConfirm){
            let dataType = verifyDataType(dataValue);
            document.body.innerHTML = `<h2>O tipo do dado informado é ${dataType}</h2>`;
        } else {
            document.body.innerHTML = "<h2>Obrigado por ter visitado esta página!!</h2>";
        }
        setTimeout(() => location.reload(), 5000);

    function verifyDataType(dataValue){
        if(!isNaN(dataValue)){
            return "Um número";
        } else if(dataValue.toLowerCase() === "true" || dataValue.toLowerCase() === "false"){
            return "valor Boolean";
        }
        return " uma string";
    }
});