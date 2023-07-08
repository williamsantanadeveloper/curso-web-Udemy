const imprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log('Aprovado com nota '.concat(nota))
    }
    else {
        console.log('Reprovado com nota '.concat(nota))
    }
}
imprimirResultado(7)
imprimirResultado(6)
imprimirResultado('Epa!') // cuidado!!!