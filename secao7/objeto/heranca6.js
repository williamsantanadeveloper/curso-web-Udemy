function aula(nome, video_id) {
    this.nome = nome,
        this.video_id = video_id
}
const aula1 = new aula('Bem-vindo!', 123)
const aula2 = new aula('Até breve', 456)
console.log(aula1, aula2)

// simulando o new
novo = (f, ...params) => {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}
const aula3 = novo(aula, 'Bem vindo!', 123)
const aula4 = novo(aula, 'Até breve', 456)
console.log(aula3, aula4)