class Pessoa {
    constructor(nome, idade, endereco, formacao) {
        this.nome = nome;
        this.idade = idade;
        this.endereco = endereco;
        this.formacao = formacao;
    }

    apresentar() {
        console.log(`${this.nome} tem ${this.idade} anos, mora em ${this.endereco}, e é formado em ${this.formacao}.`);
    }

    profissao() {
        if (this.formacao === "Engenharia") {
            console.log(`${this.nome} trabalha como chefe de construção.`);
        } else {
            console.log(`${this.nome} trabalha no predio mais alto do mundo.`);
        }
    }
}

let P1 = new Pessoa("Paulo", 28, "Rua de pedras, 42", "Engenharia");
P1.apresentar();
P1.profissao();
////////////////////////////////

class Retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }

    area() {
        return this.largura * this.altura;
    }

    perimetro() {
        return 2 * (this.largura + this.altura);
    }

    descricao() {
        console.log(`Este prédio tem ${this.altura} metros de altura e ${this.largura} metros de largura.`);
    }
}


let edificio = new Retangulo(50, 200);
edificio.descricao();
console.log(`Área do prédio: ${edificio.area()} m²`);


/////////////////////////////////
class Produto {
    constructor(cor, tamanho, magia) {
        this.cor = cor;
        this.tamanho = tamanho;
        this.magia = magia; 
    }

    mostrarDetalhes() {
        console.log(`Produto Mágico - Cor: ${this.cor}, Tamanho: ${this.tamanho}, Magia: ${this.magia}`);
    }

    usarMagia() {
        if (this.magia === "Invisibilidade") {
            console.log("Você agora está invisível!");
        } else if (this.magia === "Teletransporte") {
            console.log("Você foi teletransportado para um novo destino!");
        } else {
            console.log("Nenhuma magia detectada.");
        }
    }
}

let capaMagica = new Produto("Preta", "Grande", "Invisibilidade");
capaMagica.mostrarDetalhes();
capaMagica.usarMagia();

///////////////////////////////