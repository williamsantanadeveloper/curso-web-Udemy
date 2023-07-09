function getInteiroAleatorioEntre(max, min) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao = -1

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`O valor escolhido foi: ${opcao}.`)
} while(opcao != -1)
console.log("Até a próxima")