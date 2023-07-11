// Função em JS é First-Class Object (Citizens)
// Higher-oder function

// criar de forma literal
function fun1(nome) {
    nome = 'William'
    console.log(nome)
}
fun1()

console.log('---------------------------')

// Armazenar em uma variável 
const fun2 = function () {
    nome = 'dasdsa'
    console.log(nome)
}
fun2()

console.log('-------------------------------')

// Armazenar em um array 
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

console.log('----------------------')

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

console.log('---------------')

// Passar função como param
function run(fun) {
    fun()
}

run(function () { console.log('Executando....') })

console.log('-----------------------')

// Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(4)
const cincoMais = soma (2, 3)
cincoMais(4)