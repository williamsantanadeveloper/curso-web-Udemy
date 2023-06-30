let valor // não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)
console.log(typeof valor)
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)

//Se você declarar qualquer variável em JavaScript e não atribuir qualquer valor a ela então essa variável vai ser do tipo undefined. Já Null significa valor vazio ou inexistente, que é usado para indicar “nenhum valor”. Resumindo valor null é utilizado para indicar a ausência de um objeto, enquanto undefined indica a ausência de um valor qualquer.