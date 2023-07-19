// Call Back: a ideia do call back é você passar uma função para outra função e como um determinado evento acontecer essa funcção que você passou vai ser disparada vai ser chamada de volta

//forEach: O método forEach em JavaScript é uma estrutura de repetição que permite executar uma função para cada item de um array. Ele é uma alternativa ao loop for, e é mais limpo, legível e fácil de manter.

const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))