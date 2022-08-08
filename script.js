var quadrado ={
  lados: 4,
  area(lado){
    return lado * lado
  },
  perimetro(lado){
    return this.lados * lado
  },
  cinco(){
    return 5
  }
}
console.log(quadrado.area(5))
console.log(quadrado.perimetro(5))
console.log(quadrado.cinco(5))

var heigth = 100
var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
  metadeHeigth(){
    return this.height / 2;
  }
}
menu.backgroundColor = '#000';
menu.color = 'blue';
menu.esconder = function(){
  console.log('escondi')
}
var bg = menu.backgroundColor;


var pessoa ={
  nome: 'Willanes',
  sobrenome: 'Fernandes',
  signo: 'Virgem',
  idade: 21,
}
pessoa.nomeCompleto = function(){
  return `${this.nome} ${this.sobrenome}`
}
var carro ={
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000

var cachorro ={
  raca: 'Labrador',
  cor: 'Preto',
  idade: 10,
  latir(pessoa){
    if(pessoa === 'Homem'){
      return 'Latir'
    } else {
      return 'Nada'
    }
  }
}
