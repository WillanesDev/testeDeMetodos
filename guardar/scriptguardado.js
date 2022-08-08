// function areaQuadrado(lado){
//   return lado * lado
// }
// console.log(areaQuadrado(10))

// function pi(){
//   return 3.14
// }
// var total = 5 * pi()
// console.log(total)

// function imc(peso, altura){
//   var imc = peso / (altura * altura);
//   return imc;
// }
// console.log(imc(64, 1.7))

// function corFavorita(cor){
//   if(cor === 'azul'){
//     return 'Eu gosto do mar.'
//   } else if(cor === 'verde'){
//     return 'Eu gosto de floresta.'
//   } else {
//     return 'Eu não gosto de cores.'
//   }
// }
// console.log(corFavorita('azul'))

// function mostraConsole(){
//   console.log('Oi') 
// }
// addEventListener('click', mostraConsole)

// function imc2(peso, altura){
//   const imc2 = peso / (altura ** 2)
//   console.log(imc2)
// }
// imc2(64, 1.7)

// function terceiraIdade(idade){
// if(typeof idade !== 'number'){
//   return 'Por favor preencha um número'
// } else if(idade >= 60){
//   return true;
// } else {
//   return false;
// }
// }
// console.log(terceiraIdade(62))

// function faltaVisitar(paisesVisitados){
//   var totalPaises = 193;
  // return `Falta visitar ${totalPaises - paisesVisitados} países`
// }
// console.log(faltaVisitar(25))

function isTruthy(dado){
  return !!dado
}

function perimetroQuadrado(lado){
  return lado * 4
}

function nomeCompleto(nome, sobrenome){
  return `${nome} ${sobrenome}`
}

function isEven(numero){
  var modulo = numero % 2;
  if(modulo === 0){
    return true;
  } else {
    return false;
  }
}
function tipoDeDado(dado){
  return typeof dado;
}
addEventListener('click', function(){
  console.log('Willanes Fernandes')
})
// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);