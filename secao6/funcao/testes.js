// const soma = (a, b) => {
//     return a + b
// }
// console.log(soma(2, 4))

// const pessoa = {
//     saudacao: 'Bom dia!',
//     falar() {
//         console.log(this.saudacao)
//     }
// }
// const falar_saudacao = pessoa.falar.bind(pessoa)
// falar_saudacao()

// function pessoa2() {
//     this.idade = 0

//     const self = this

//     setInterval(function () {
//         self.idade++
//         console.log(self.idade)
//     }.bind(this))
// }
// new pessoa

// imprimirAreaCirculo = (a,b) => {
//     a = Math.PI
//     b = Math.pow(2,3)
//     let areaCirculo = a * b
//     console.log(areaCirculo)

//     this.getNewAreaCirculo(function(){
//         return
//     })
// }
// imprimirAreaCirculo()

let numeros = [1,2,3,4,5,6]
const maiorNumero = Math.max(numeros)
console.log(maiorNumero)