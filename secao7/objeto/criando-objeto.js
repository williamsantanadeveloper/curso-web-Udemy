// Usando a notação literal

const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.get_preco_com_desconto = () => {
        return preco * (1 - desc)
    }
}
const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.get_preco_com_desconto())
console.log(p2.get_preco_com_desconto())

// Função factory
function criar_funcionario (nome, salario_base, faltas) {
    return {
        nome, salario_base, faltas,
        get_salario() {
            return (salario_base / 30) * (30 - faltas)
        }
    }
}
const f1 = criar_funcionario('João', 7980, 4)
const f2 = criar_funcionario('Maria', 11400, 1)
console.log(f1.get_salario(), f2.get_salario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna Objeto
const fromJson = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)