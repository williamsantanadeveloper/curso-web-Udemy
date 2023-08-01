calculando_fatorial = (numero) => {
    let resultado = 1

    for (let i = numero; i > 1; i--) {
        resultado = resultado * (i - 1)
    }
    return resultado *= numero
}
console.log(calculando_fatorial(4))