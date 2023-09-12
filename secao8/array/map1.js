/* 
O map existe dentro dele um laço que ele vai ser executado
o map serve para fazer uma transformação.
Então a ideia é mapear o outro array do mesmo tamanho
só que com dados transformados.
*/

const numbers = [1, 2, 3, 4, 5]

// For com propósito
let result = numbers.map(function (e) {
    return e * 2
})

console.log(result, numbers)

const sum10 = e => e + 10
const triple = e => e * 3
const for_money = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

result = numbers.map(sum10).map(triple).map(for_money) // utilizando arrays com o método map, caso queira pode alterar a ordem

console.log(result)