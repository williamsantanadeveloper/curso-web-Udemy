const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas, '1')

// Com callback

/* 

O filter é uma estrutura de repetição em Javascript que serve para percorrer arrays, seu uso mais comum é para percorrer array de objetos.

Filtrando um array Como demonstração, podemos ver um exemplo no qual é necessário ter um array somente com números maiores que 10. para isso, o filter iria resolver

*/

const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})
console.log(notasBaixas2, '2')

const notasMenorQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenorQue7)
console.log(notasBaixas3, '3')