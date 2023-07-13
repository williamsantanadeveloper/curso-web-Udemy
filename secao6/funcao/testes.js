const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 4))

const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}
const falar_saudacao = pessoa.falar.bind(pessoa)
falar_saudacao()

function pessoa2() {
    this.idade = 0

    const self = this

    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }.bind(this))
}
new pessoa2