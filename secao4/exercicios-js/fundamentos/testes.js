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