// pessoa -> 123 -> {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}  
// pessoa = { nome: 'Ana' }

Object.freeze(pessoa) // congelando o objeto: não consegui alterar

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)

const pessoa_constante = Object.freeze({nome: 'João'})
pessoa_constante.nome = 'Maria'
console.log(pessoa_constante)