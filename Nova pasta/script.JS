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

class ContaBancaria {
  constructor(titular, saldoInicial = 0) {
    this.titular = titular;
    this.saldo = saldoInicial;
  }


  deposito(valor) {
    if (valor > 0) {
      this.saldo += valor;
      console.log(`Depósito de R$${valor} realizado com sucesso.`);
    } else {
      console.log('Valor de depósito inválido.');
    }
  }

  saque(valor) {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`Saque de R$${valor} realizado com sucesso.`);
    } else if (valor > this.saldo) {
      console.log('Saldo insuficiente.');
    } else {
      console.log('Valor de saque inválido.');
    }
  }


  verificarSaldo() {
    console.log(`O saldo atual de ${this.titular} é R$${this.saldo}`);
  }
}

const minhaConta = new ContaBancaria('João', 500);
minhaConta.verificarSaldo();
minhaConta.deposito(200);
minhaConta.saque(100);
minhaConta.verificarSaldo();

////////////////////////////////
    
class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.ligado = false;
  }

  ligar() {
    this.ligado = true;
    console.log(`${this.modelo} está ligado.`);
  }

  desligar() {
    this.ligado = false;
    console.log(`${this.modelo} está desligado.`);
  }

  dirigir() {
    if (this.ligado) {
      console.log(`Dirigindo o ${this.modelo}...`);
    } else {
      console.log(`Não é possível dirigir, o ${this.modelo} está desligado.`);
    }
  }
}
const meuCarro = new Carro('Honda', 'Civic', 2023);


meuCarro.ligar();
meuCarro.dirigir();
meuCarro.desligar();
meuCarro.dirigir();
