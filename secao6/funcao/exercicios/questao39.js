const numImpares = (inicio, fim) => {
    if (inicio > fim) {
        let aux
        aux = inicio
        inicio = fim
        fim = aux
    }
    for (let i = inicio; i < fim; i++) {
        if ((i % 2) !== 0) {
            console.log(i)
        }
    }
}

numImpares(100, 0)