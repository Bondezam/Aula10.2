export class Form{
   constructor(nome, idade, endereco, email){
   this.nome = nome;
   this.idade = idade;
   this.endereco = endereco;
   this.email = email
   }

   display(){
   console.log('Nome: ', this.nome)
   console.log('idade: ', this.idade)
   console.log('Endereço: ', this.endereco)
   console.log('E-mail: ', this.email)
   }


   done(){
     
    if (this.nome && this.idade && this.endereco && this.email){
       alert('Cadastro Realizado')
    } 
   

   }




}
