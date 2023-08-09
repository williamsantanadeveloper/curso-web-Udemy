// Os getters e setters são funções que dentro dessas funções os valores são acessados. Vantagens: validar, 
const sequencia = {
    _valor: 1, // convenção
    get valor() {
        return this._valor++
    },
    set valor(valor) {
        if (valor > this._valor) {
            this.valor = valor
        }
    }
}
console.log(sequencia.valor, sequencia.valor)

console.log(Object.keys(sequencia))
console.log(Object.values(sequencia))
console.log(Object.entries(sequencia))