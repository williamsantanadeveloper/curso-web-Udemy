// estrategia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0,0,0))

// estrategia 2, 3, 4 para gerar valor padrão 

function soma2(a,b,c) {
    a = a !== undefined ? a : 1 
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}
console.log('---------------------')
// A lógica por trás é no caso 'a' for diferente de undefined ele assumi valor 1 e se não 'a' fica como undefined 

// A lógica por trás é no caso 'b' se dentro de arguments existe o indice 1 se sim indice um assume o valor de 'b' se não 'b' assume o valor 1

// A lógica por trás é no caso 'c' se 'c' for um NaN retorne o valor 1 que é o padrão(1)

console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0,0,0))


console.log('-----------------------')

// valor padrão do es2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(soma3(), soma3(3), soma3(1,2,3), soma3(0,0,0))