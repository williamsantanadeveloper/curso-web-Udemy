// Resolução com for
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
    else {
        console.log('Valor inválido')
    }
}

console.log('--------------')
// Resolução com while
let contador = 1

while (contador <= 50) {
    if (contador % 2 == 0) {
        console.log('contador = ', contador)
    }
    else {
        console.log('Valor inválido', contador)
    }
    contador++
}