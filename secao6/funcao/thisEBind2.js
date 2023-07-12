// setInterval() Dispara uma outra função em um determinado intervalo que foi passado

function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) // Intervalo
}
new Pessoa