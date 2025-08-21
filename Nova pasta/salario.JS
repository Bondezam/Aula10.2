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