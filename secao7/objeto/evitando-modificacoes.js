// Object.preventExtensions

const product = Object.preventExtensions({ // previne alterações no seu objeto, ou seja, só aceita retirada dos atributos
    name_product: 'Qualquer', price: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(product))

product.outer_name = 'Borracha'
product.description = 'Borracha escolar branca'
delete product.tag
console.log(product)

// Object.seal

const person = {person_name: 'Juliana', age: 35}
Object.seal(person) // Não consegui adiconar novos atributos, excluir, mas consegui alterar os valores do produto
console.log('Selado:', Object.isSealed(person))

person.surname = 'Silva'
delete person.person_name
person.age = 29
console.log(person)

// Object.freeze = selado + valores constantes