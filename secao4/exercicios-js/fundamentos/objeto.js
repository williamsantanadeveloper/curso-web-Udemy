// Objeto é representado com {}(chaves)
// Objeto em JavaScript é uma coleção chave-valor
const prod1 = {};
prod1.nome = "Celular Ultra Mega";
prod1.preco = 4998.80
prod1["Desconto legal"] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: "Camisa Polo",
    preco: 79.90,
    obj: {
        blabla: 1,
        obj:{
            blabla: 2
        }
    }
}
console.log(prod2)
console.log("Olá mundo!")