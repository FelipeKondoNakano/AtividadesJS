document.getElementById("button").addEventListener("click",() => {
    function Car(){
        let brand, model, year, color, km, fipeValor;

        // Métodos gets e sets
        this.set = function(marca,modelo,ano,cor,kilometragem,valorFipe){
            brand = marca;
            model = modelo;
            year = parseInt(ano);
            color = cor;
            km = parseInt(kilometragem);
            fipeValor = parseFloat(valorFipe);
        }
        this.getBrand = function() { return brand; };
        this.getModel = function() { return model; };
        this.getYear = function() { return year; };
        this.getColor = function() { return color; };
        this.getKm = function() { return km; };
        this.getFipeValor = function() { return fipeValor; };

        // Método para retornar os anos de uso do carro
        this.yearsOfUse = function(){
            const currentYear = new Date().getFullYear();
            return currentYear - year;
        }

        // Método para retornar o valor de mercado do carro
        this.marketValue = function(){
            let kmYear = km / this.yearsOfUse();
            if (kmYear < 30000){
                return fipeValor * 1.1;
            } else if (kmYear > 30000 && kmYear <= 50000){
                return fipeValor;
            } else {
                return fipeValor * 0.9;
            }
        }
    }

    const marca = document.getElementById("brand").value;
    const modelo = document.getElementById("model").value;
    const ano = document.getElementById("year").value;
    const cor = document.getElementById("color").value;
    const kilometragem = document.getElementById("km").value;
    const valorFipe = document.getElementById("valorFipe").value;

    let carro = new Car();
    carro.set(marca,modelo,ano,cor,kilometragem,valorFipe);

    const p = document.createElement("p");
    const conteudo = document.createTextNode(`O carro tem ${carro.yearsOfUse()} anos de uso!`);
    const conteudo2 = document.createTextNode(`O valor de mercado do carro é de R$ ${carro.marketValue()}`);
    p.appendChild(conteudo);
    p.appendChild(conteudo2);
    document.body.appendChild(p);
})