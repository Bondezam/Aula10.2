class Colaborador {
  constructor(nome, salarioMensal, horasTrabalhadasPorDia) {
    this.nome = nome;
    this.salarioMensal = salarioMensal;
    this.horasTrabalhadasPorDia = horasTrabalhadasPorDia;
    this.horasNormaisPorMes = 220;
  }


  calcularHora() {
    return this.salarioMensal / this.horasNormaisPorMes;
  }

 
  calcularHoraExtra() {
    return this.calcularHora() * 1.5;
  }

  
  calcularHorasExtras(horasExtrasPorDia) {
    let diasUteisNoMes = 22; 
    return horasExtrasPorDia * diasUteisNoMes;
  }


  calcularSalarioComHoraExtra(horasExtrasPorDia) {
    const horasExtrasNoMes = this.calcularHorasExtras(horasExtrasPorDia);
    const salarioBase = this.salarioMensal;
    const valorHoraExtra = this.calcularHoraExtra();


    const valorHorasExtras = horasExtrasNoMes * valorHoraExtra;

    return salarioBase + valorHorasExtras;
  }
}



const colaborador = new Colaborador("João", 3000, 8);

console.log("Hora normal:", colaborador.calcularHora());
console.log("Hora extra:", colaborador.calcularHoraExtra());
console.log("Horas extras no mês:", colaborador.calcularHorasExtras(2)); 
console.log("Salário com horas extras:", colaborador.calcularSalarioComHoraExtra(2));

////////////////////////////////////////

class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
}


class Carrinho {
  constructor() {
    this.produtos = [];
  }


  adicionarProduto(produto) {
    this.produtos.push(produto);
  }


  removerProduto(nome) {
    this.produtos = this.produtos.filter(produto => produto.nome !== nome);
  }

  mostrarCarrinho() {
    if (this.produtos.length === 0) {
      console.log("O carrinho está vazio.");
      return;
    }
    console.log("Produtos no Carrinho:");
    this.produtos.forEach(produto => {
      console.log(`${produto.nome}: R$ ${produto.preco.toFixed(2)}`);
    });
  }

  calcularTotal() {
    const total = this.produtos.reduce((acc, produto) => acc + produto.preco, 0);
    console.log(`Total do carrinho: R$ ${total.toFixed(2)}`);
    return total;
  }
}



let produto1 = new Produto("Camiseta", 49.90);
let produto2 = new Produto("Calça Jeans", 129.90);
let produto3 = new Produto("Tênis", 199.90);


let meuCarrinho = new Carrinho();


meuCarrinho.adicionarProduto(produto1);
meuCarrinho.adicionarProduto(produto2);
meuCarrinho.adicionarProduto(produto3);


meuCarrinho.mostrarCarrinho();

meuCarrinho.calcularTotal();

meuCarrinho.removerProduto("Calça Jeans");

meuCarrinho.mostrarCarrinho();


meuCarrinho.calcularTotal();