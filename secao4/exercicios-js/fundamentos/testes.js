let valor = [2, 5, "Vasco", 7];

valor.push(1);
console.log(valor)
valor.pop()

console.log(valor)

function divisao(a, b) {
    console.log(a / b)
}
divisao(2, 4)

function div (c, d) {
    return c / d;
}
console.log(div(2, 3))

const outraDivisao = function (f, g) {
    console.log(f / g)
}
outraDivisao(10, 4)

const outraDivisao2 = (m,n) => m / n
console.log(outraDivisao2(10, 10))

const n1 = [] 
for (let i = 0; i < 20; i++) {
    n1.push(function(){
        console.log(i)
    })
}
n1 [2]()
n1 [15]()

const pessoa = {}
pessoa.nome = "William"
console.log(pessoa)

const person = {}
    person.name= "Antônio",
    person.age= 18,
    person.adress= "Bairro industrial"
  
  
  console.log(person)

const pessoa = {
  Name: "william"
}
console.log(pessoa)

const indi = {
  "name": "William"
}
console.log(indi)

function soma(a, b) {
  console.log(a + b)
}
soma(2, 3)

function imprimirSoma(a,b) {
  return a + b
}
console.log(imprimirSoma(4, 2))

const soma2 = (a, b) => (a + b)
console.log(soma(2, 10))