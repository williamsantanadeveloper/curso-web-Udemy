const ferrari = {
    modelo: 'F40',
    velocidade_maxima: 324,

}
const volvo = {
    modelo: 'V40',
    velocidade_maxima: 200
}
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function meu_objeto() { }
console.log(typeof meu_objeto, typeof Object)
console.log(Object.prototype, meu_objeto.prototype)