// par nome/valor
const saudacao = "Opa" // contexto léxico 1

function exec() {
    const saudacao = "falaa" // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nomes/valor
const cliente = {
    nome:"Pedro",
    idade: 18,
    peso: 90,
    endereco: {
        logradouro: "Rua muito feliz",
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)