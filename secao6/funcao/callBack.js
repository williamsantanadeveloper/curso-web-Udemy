// Call Back: a ideia do call back é você passar uma função para outra função e como um determinado evento acontecer essa funcção que você passou vai ser disparada vai ser chamada de volta

//forEach: Trata-se de um recurso muito útil para ser utilizado sempre que queremos que uma determinada função seja aplicada em todos os elementos de um array, pois elimina a necessidade de escrevermos muitas linhas de códigos

const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))